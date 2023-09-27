import React from "react";
import { Text, StyleSheet, View, Button, Image } from "react-native";

const CustomImage = (props) => {
	return (
		<View style={styles.viewStructure}>
			<Image source={props.imagePath} />
			<Text style={styles.textStyle}>{props.title}</Text>
			<Text style={styles.textStyle}>{`image rating -  ${props.rating}`}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	viewStructure: {
		flexDirection: "row",
		justifyContent: "start",
		marginBottom: 30,
	},
	textStyle: { marginVertical: 10, marginHorizontal: 10 },
});

export default CustomImage;
