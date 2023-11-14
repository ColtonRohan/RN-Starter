import React from "react";
import {
	StyleSheet,
	View,
	Dimensions,
	TouchableOpacity,
	Text,
} from "react-native";

const { width } = Dimensions.get("screen");

const Pagination = ({ data, index, onNextPress }) => {
	return (
		<View style={styles.container}>
			<View style={styles.dotsContainer}>
				{data.map((item, idx) => {
					const isDotActive = idx === index;
					return (
						<View
							key={idx.toString()}
							style={[
								styles.dot,
								{
									backgroundColor: isDotActive ? "#000" : "red",
									opacity: isDotActive ? 1 : 0.2,
									width: 12,
								},
							]}
						/>
					);
				})}
			</View>
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
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
	},
	dotsContainer: {
		flexDirection: "row",
		marginBottom: 10,
		borderWidth: 1,
	},
	dot: {
		width: 12,
		height: 12,
		borderRadius: 6,
		marginHorizontal: 60,
	},
	nextButton: {
		backgroundColor: "#000",
		paddingVertical: 10,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 1,
	},
	nextButtonText: {
		color: "#fff",
	},
});
