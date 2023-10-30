import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const LayoutScreen = () => {
	return (
		<View style={styles.Container}>
			<TouchableOpacity
				onPress={() => {
					console.log("clicked");
				}}
			>
				<View style={firstView}></View>
			</TouchableOpacity>
			<View style={secondView}></View>
			<View style={thirdView}></View>
		</View>
	);
};

const styles = StyleSheet.create({
	Size: {
		height: 100,
		width: 100,
		// flex: 0.1,
		borderWidth: 2,
	},
	Container: {
		// flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		// height: 200,
		flex: 1,
		backgroundColor: "gray",
	},
	View1: {
		backgroundColor: "red",
	},
	View2: {
		backgroundColor: "green",
		// position: "absolute",
		// top: 100,
		left: 100,
	},
	View3: {
		backgroundColor: "blue",
	},
});

const firstView = StyleSheet.compose(styles.Size, styles.View1);
const secondView = StyleSheet.compose(styles.Size, styles.View2);
const thirdView = StyleSheet.compose(styles.Size, styles.View3);

export default LayoutScreen;
