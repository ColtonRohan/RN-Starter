import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const BoxScreen = ({ navigation }) => {
	return (
		<View style={styles.viewStyle}>
			{/* <Button
				title="Go to Input Changer"
				onPress={() => navigation.navigate("InputScreen")}
			/> */}
			<Text style={styles.textBox}>BoxScreen</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	// the BOX style is

	// MarginTop
	//      BorderTop
	//          PaddingTop
	//              content
	//          PaddingBottom
	//      Border
	// MarginBottom
	textBox: {
		margin: 10,
		borderWidth: 1,
		borderBottomColor: "black",
		// padding: 10,
		// width: 100,
		flex: "center",
	},
	viewStyle: {
		borderWidth: 2,
		width: "50%",
		height: 100,
	},
});

export default BoxScreen;
