import { Image, StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";

const { width, height } = Dimensions.get("screen");

const SlideItem = ({ item }) => {
	return (
		<View style={styles.container}>
			<Image source={item.img} style={[styles.image]} />
			<View style={styles.content}>
				<Text style={styles.title}>{item.title}</Text>
				<Text style={styles.description}>{item.description}</Text>
			</View>
		</View>
	);
};

export default SlideItem;

const styles = StyleSheet.create({
	container: {
		width,
		height,
		alignItems: "center",
	},
	image: {
		flex: 0.5,
		margin: 30,
		width: "90%",
		borderWidth: 1,
		borderRadius: 30,
	},
	content: {
		flex: 0.4,
		alignItems: "center",
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		color: "#333",
	},
	description: {
		fontSize: 18,
		marginVertical: 12,
		color: "#333",
	},
	price: {
		fontSize: 32,
		fontWeight: "bold",
	},
});
