import React, { useRef, useState } from "react";
import { FlatList, StyleSheet, View, Dimensions } from "react-native";
import SlideItem from "./SlideItem";
import Pagination from "./Pagination";
import carouselData from "../data/carouselData";

const Slider = () => {
	const [index, setIndex] = useState(0);
	const flatListRef = useRef(null);
	const { width: screenWidth } = Dimensions.get("screen");

	const handleOnScroll = (event) => {
		const offsetX = event.nativeEvent.contentOffset.x;
		const currentIndex = Math.round(offsetX / screenWidth);
		setIndex(currentIndex);
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
			<Pagination data={carouselData} index={index} />
		</View>
	);
};

export default Slider;

const styles = StyleSheet.create({});
