import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
	const friends = [
		{ id: "1", name: "colton", title: "hello" },
		{ id: "2", name: "joe" },
		{ id: "3", name: "fun" },
		{ id: "4", name: "1" },
		{ id: "5", name: "2" },
	];
	return (
		<FlatList
			keyExtractor={(friend) => {
				return friend.name;
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
