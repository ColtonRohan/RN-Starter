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
			<Button
				title="Go to State Demo"
				onPress={() => navigation.navigate("CounterScreen")}
			/>
			<Button
				title="Go to Color Demo"
				onPress={() => navigation.navigate("ColorScreen")}
			/>
			<Button
				title="Go to Color Changer"
				onPress={() => navigation.navigate("SingleColorScreen")}
			/>
			<Button
				title="Go to Input Changer"
				onPress={() => navigation.navigate("InputScreen")}
			/>
			<Button
				title="Go to Style Box"
				onPress={() => navigation.navigate("BoxScreen")}
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
