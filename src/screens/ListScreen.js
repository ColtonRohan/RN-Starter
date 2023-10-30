import React from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";

const ListScreen = ({ navigation }) => {
	const friends = [
		{ id: "1", name: "colton", title: "hello" },
		{ id: "2", name: "joe" },
		{ id: "3", name: "fun" },
		{ id: "4", name: "1" },
		{ id: "5", name: "2" },
	];
	return (
		<>
			<FlatList
				keyExtractor={(item) => {
					return item.id;
				}}
				data={friends}
				renderItem={({ item }) => {
					return (
						<Text
							style={styles.textStyle}
						>{`hello ${item.name}, your id is ${item.id}`}</Text>
					);
				}}
			/>
			<Button
				onPress={() => navigation.navigate("Components")}
				title="Go To Components"
			/>
		</>
	);
	// return <Text>Hello</Text>;
};

const styles = StyleSheet.create({
	textStyle: {
		marginVertical: 50,
		fontSize: 20,
	},
});

export default ListScreen;
