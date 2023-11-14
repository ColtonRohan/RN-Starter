import React, { useRef, useState } from "react";
import { FlatList, StyleSheet, View, Dimensions } from "react-native";
import SlideItem from "./SlideItem";
import Pagination from "./Pagination";
import carouselData from "../data/carouselData";

const Slider = () => {
	const [index, setIndex] = useState(0);
	const flatListRef = useRef(null);
	const [isAnimating, setIsAnimating] = useState(false); // Add state to control animation

	const { width: screenWidth } = Dimensions.get("screen");

	const handleOnScroll = (event) => {
		const offsetX = event.nativeEvent.contentOffset.x;
		const currentIndex = Math.round(offsetX / screenWidth);
		setIndex(currentIndex);
	};

	const handleNextPress = () => {
		if (isAnimating) {
			return;
		}
		setIsAnimating(true);
		const nextIndex = (index + 1) % carouselData.length;
		flatListRef.current.scrollToIndex({ index: nextIndex });
		setTimeout(() => {
			setIndex(nextIndex);
			setIsAnimating(false);
		}, 300);
	};

	return (
		<View>
			<FlatList
				ref={flatListRef}
				data={carouselData}
				renderItem={({ item }) => <SlideItem item={item} />}
				horizontal
				pagingEnabled
				snapToAlignment="center"
				showsHorizontalScrollIndicator={false}
				onScroll={handleOnScroll}
			/>
			<Pagination
				data={carouselData}
				index={index}
				onNextPress={handleNextPress}
			/>
		</View>
	);
};

export default Slider;

const styles = StyleSheet.create({});
