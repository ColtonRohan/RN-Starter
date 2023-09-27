import React, { useState } from "react";
import { Text, StyleSheet, View, Button, Image } from "react-native";

const Colorlayout = (props) => {
	return (
		<View>
			<Text style={styles.textView}>{props.color}</Text>
			<Button
				title={`More ${props.color}`}
				onPress={() => props.onIncrease()}
			></Button>
			<Button
				title={`Less ${props.color}`}
				onPress={() => props.onDecrease()}
			></Button>
		</View>
	);
};

const styles = StyleSheet.create({
	textView: {
		fontSize: 50,
		textAlign: "center",
	},
});
export default Colorlayout;
