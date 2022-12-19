import React from 'react';
import { Animated, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import PropTypes from 'prop-types';

type SwipelistProps = {
  overshootRight?: boolean;
  friction?: number;
  rightOpenValue?: number;
  data?: Array<any>;
  renderRightItem: (item: any, index: number) => JSX.Element;
  renderHiddenItem: (item: any, index: number) => JSX.Element;
  onSwipelistOpen?: (swipe: string) => void;
  onSwipelistClose?: (swipe: string) => void;
};
const Swipelist: React.FC<SwipelistProps> = ({
  overshootRight = false,
  friction = 1,
  rightOpenValue = 200,
  data,
  renderRightItem,
  renderHiddenItem,
  onSwipelistOpen,
  onSwipelistClose,
}) => {
  const renderRightAction = (progress: any, item: any, index: number) => {
    const transLeft = progress.interpolate({
      inputRange: [0, 1],
      outputRange: [rightOpenValue, 1],
    });

    return (
      <View style={{ width: rightOpenValue }}>
        <Animated.View
          style={{ flex: 1, transform: [{ translateX: transLeft }] }}
        >
          {renderHiddenItem(item, index)}
        </Animated.View>
      </View>
    );
  };

  const RenderListView = () => {
    return (
      <>
        {data?.map((item, index) => (
          <View key={index}>
            <GestureHandlerRootView>
              <Swipeable
                renderRightActions={(progress) =>
                  renderRightAction(progress, item, index)
                }
                onSwipeableOpen={onSwipelistOpen}
                onSwipeableClose={onSwipelistClose}
                friction={friction}
                overshootRight={overshootRight}
                // rightThreshold={200}
              >
                {renderRightItem(item, index)}
              </Swipeable>
            </GestureHandlerRootView>
          </View>
        ))}
      </>
    );
  };

  return <RenderListView />;
};

Swipelist.propTypes = {
  data: PropTypes.array.isRequired,
  renderRightItem: PropTypes.func.isRequired,
  renderHiddenItem: PropTypes.func.isRequired,
  rightOpenValue: PropTypes.number,
  friction: PropTypes.number,
  overshootRight: PropTypes.bool,
  onSwipelistOpen: PropTypes.func,
  onSwipelistClose: PropTypes.func,
};

export default Swipelist;
