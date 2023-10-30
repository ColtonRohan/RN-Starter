import React from "react";
import {
	Text,
	StyleSheet,
	View,
	Button,
	TouchableOpacity,
	Image,
	FlatList,
} from "react-native";
import CustomImage from "../Components/CustomImage";

const PictureScreen = (props) => {
	const images = [
		{
			id: 1,
			title: "Beach",
			rating: "3",
			imagePath: require("../../assets/beach.jpg"),
		},
		{
			id: 2,
			title: "Forest",
			rating: "4",
			imagePath: require("../../assets/forest.jpg"),
		},
		{
			id: 3,
			title: "Mountain",
			rating: "5",
			imagePath: require("../../assets/mountain.jpg"),
		},
	];

	return (
		<FlatList
			data={images}
			keyExtractor={(item) => item.id.toString()}
			renderItem={({ item }) => (
				<CustomImage
					title={item.title}
					rating={item.rating}
					imagePath={item.imagePath}
				></CustomImage>
			)}
		/>
	);
};

const styles = StyleSheet.create({});

export default PictureScreen;
