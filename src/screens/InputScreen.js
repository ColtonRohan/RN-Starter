import React, { useState } from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";

const InputScreen = () => {
	const [name, setName] = useState("");

	// const onChange = (event) => {
	// 	console.log(event.nativeEvent.text);
	// };

	return (
		<View>
			<Text>Enter Password:</Text>
			<TextInput
				// onChange={onChange}
				autoCapitalize="none"
				autoCorrect={false}
				style={styles.input}
				value={name}
				// onChangeText={setName}
				onChangeText={(newValue) => setName(newValue)}
			></TextInput>
			{name.length < 5 ? (
				<Text>{`Your password is not longer then 5 chars`}</Text>
			) : (
				<Text>{`Your password is : ${name}`}</Text>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	input: {
		height: 40,
		margin: 12,
		borderWidth: 1,
		padding: 10,
	},
});

export default InputScreen;
