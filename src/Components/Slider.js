import { Animated, FlatList, StyleSheet, Text, View } from "react-native";
import React, { useRef, useState } from "react";
import SlideItem from "./SlideItem";
import Pagination from "./Pagination";
import carouselData from "../data/carouselData";

const Slider = () => {
	const [index, setIndex] = useState(0);
	const scrollX = useRef(new Animated.Value(0)).current;

	const handleOnScroll = (event) => {
		Animated.event(
			[
				{
					nativeEvent: {
						contentOffset: {
							x: scrollX,
						},
					},
				},
			],
			{
				useNativeDriver: false,
			}
		)(event);
	};

	const handleOnViewableItemsChanged = useRef(({ viewableItems }) => {
		// console.log('viewableItems', viewableItems);
		setIndex(viewableItems[0].index);
	}).current;

	const viewabilityConfig = useRef({
		itemVisiblePercentThreshold: 50,
	}).current;

	const onNextPress = () => {
		// Calculate the index of the next page
		const nextIndex = currentIndex + 1;

		// Check if the nextIndex is within the bounds of your data
		if (nextIndex < data.length) {
			// Scroll to the next page
			flatListRef.current.scrollToIndex({ index: nextIndex });

			// Update the currentIndex
			setCurrentIndex(nextIndex);
		}
	};

	return (
		<View>
			<FlatList
				data={carouselData}
				renderItem={({ item }) => <SlideItem item={item} />}
				horizontal
				pagingEnabled
				snapToAlignment="center"
				showsHorizontalScrollIndicator={false}
				onScroll={handleOnScroll}
				onViewableItemsChanged={handleOnViewableItemsChanged}
				viewabilityConfig={viewabilityConfig}
			/>
			<Pagination
				data={carouselData}
				scrollX={scrollX}
				index={index}
				onNextPress={onNextPress}
			/>
		</View>
	);
};

export default Slider;

const styles = StyleSheet.create({});
