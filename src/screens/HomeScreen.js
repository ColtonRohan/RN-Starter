import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import PictureComponent from "./PictureScreen";

const HomeScreen = ({ navigation }) => {
	return (
		<View>
			<Text style={styles.text}>Hello Welcome!</Text>
			<Button
				onPress={() => navigation.navigate("Components")}
				title="Go To Components"
			/>

			<Button
				title="Go to List Demo"
				onPress={() => navigation.navigate("List")}
			/>
			<Button
				title="Go to Image Demo"
				onPress={() => navigation.navigate("ImageScreen")}
			/>
			{/* <TouchableOpacity
				onPress={() => {
					props.navigation.navigate("List");
				}}
			>
				<Text>Go to List Demo</Text>
			</TouchableOpacity> */}
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 50,
	},
});

export default HomeScreen;
