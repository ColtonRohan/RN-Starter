import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";

const { width } = Dimensions.get("screen");

const Pagination = ({ data, index }) => {
	return (
		<View style={styles.container}>
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
		marginBottom: 30,
	},
});
