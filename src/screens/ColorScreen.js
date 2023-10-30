import React, { useState } from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";

const ColorScreen = () => {
	const [colors, setColors] = useState([]); // [red, green, blue
	return (
		<View>
			<Button
				title="Add a Color"
				onPress={() => {
					setColors([...colors, randomRgb()]);
					// console.log(colors);
				}}
			/>

			<FlatList
				keyExtractor={(item) => item}
				data={colors}
				renderItem={({ item }) => {
					return (
						<View style={[styles.colorBox, { backgroundColor: item }]}></View>
					);
				}}
			/>
		</View>
	);
};

const randomRgb = () => {
	const red = Math.floor(Math.random() * 256);
	const green = Math.floor(Math.random() * 256);
	const blue = Math.floor(Math.random() * 256);

	return `rgb(${red}, ${green}, ${blue}))`;
};

const styles = StyleSheet.create({
	colorBox: {
		height: 100,
		width: 100,
		borderRadius: 10, // Add a border radius
		margin: 5, // Add some margin
		justifyContent: "center", // Center the content vertically
		alignItems: "center", // Center the content horizontally
	},
});

export default ColorScreen;
