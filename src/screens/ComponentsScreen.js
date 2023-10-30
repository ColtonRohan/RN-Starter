import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
	const name = "colton";
	const greeting = <Text style={styles.textStyle}>Hello</Text>;

	return (
		<View>
			<Text>{greeting}</Text>
			<Text style={styles.textStyle}>Getting Started!</Text>
			<Text style={styles.center}>My name is {name}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	textStyle: {
		fontSize: 30,
		textAlign: "center",
	},
	center: {
		textAlign: "center",
		fontSize: 45,
	},
});

export default ComponentsScreen;
