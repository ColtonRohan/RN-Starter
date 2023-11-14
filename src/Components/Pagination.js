import {
	StyleSheet,
	Animated,
	View,
	Dimensions,
	TouchableOpacity,
	Text,
} from "react-native";
import React from "react";

const { width } = Dimensions.get("screen");

const Pagination = ({ data, scrollX, index, onNextPress }) => {
	return (
		<View style={styles.container}>
			{data.map((_, idx) => {
				const inputRange = [(idx - 1) * width, idx * width, (idx + 1) * width];

				const dotWidth = scrollX.interpolate({
					inputRange,
					outputRange: [12, 30, 12],
				});

				const opacity = scrollX.interpolate({
					inputRange,
					outputRange: [0.2, 1, 0.1],
				});

				const backgroundColor = scrollX.interpolate({
					inputRange,
					outputRange: ["#ccc", "#000", "#ccc"],
				});

				return (
					<Animated.View
						key={idx.toString()}
						style={[
							styles.dot,
							{
								opacity,
								backgroundColor: idx === index ? "#000" : backgroundColor,
							},
							// idx === index && styles.dotActive,
						]}
					/>
				);
			})}
			<TouchableOpacity onPress={onNextPress} style={styles.nextButton}>
				<Text style={styles.nextButtonText}>Next</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Pagination;

const styles = StyleSheet.create({
	container: {
		position: "absolute",
		bottom: 35,
		flexDirection: "row",
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
	},
	dot: {
		width: 12,
		height: 12,
		borderRadius: 6,
		marginHorizontal: 30,
		backgroundColor: "#ccc",
	},
	dotActive: {
		backgroundColor: "#000",
	},
});
