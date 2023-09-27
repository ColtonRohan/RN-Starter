import React from "react";
import {
	Text,
	StyleSheet,
	View,
	Button,
	TouchableOpacity,
	Image,
} from "react-native";
import CustomImage from "../Components/CustomImage";

const PictureScreen = (props) => {
	return (
		<View>
			<CustomImage
				title="Beach"
				rating="3"
				imagePath={require("../../assets/beach.jpg")}
			/>
			<CustomImage
				title="Forest"
				rating="4"
				imagePath={require("../../assets/forest.jpg")}
			/>
			<CustomImage
				title="Mountain"
				rating="5"
				imagePath={require("../../assets/mountain.jpg")}
			/>
		</View>
	);
};

const styles = StyleSheet.create({});

export default PictureScreen;
