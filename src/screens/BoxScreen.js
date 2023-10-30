import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const BoxScreen = ({ navigation }) => {
	return (
		<>
			<View style={styles.viewStyle}>
				{/* <Button
				title="Go to Input Changer"
				onPress={() => navigation.navigate("InputScreen")}
			/> */}
				<Text style={styles.textBox}>Child 1</Text>
				<Text style={text}>Child 2</Text>
				<Text style={styles.textBox}>Child 3</Text>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	// the BOX style is

	// MarginTop
	//      BorderTop
	//          PaddingTop
	//              content
	//          PaddingBottom
	//      Border
	// MarginBottom

	viewStyle: {
		// flex examples
		borderWidth: 2,
		borderColor: "blue",
		// height: 200,
		// width: "50%",
		// height: 200,
		flex: 0.5,

		// these three styles should only be places within the parent element of what you want to move
		// inside the parent element you use alignitems to move the children around
		// alignItems: "stretch",  | default value
		// alignItems: "stretch",
		// alignItems: "flex-start",
		// alignItems: "center",
		// alignItems: "flex-end",

		//control if children elemenents are going to be laid out vertical or horizontal
		// flexDirection: "column" | default value  ;
		// flexDirection: "column"
		// when changing to flex direction "column"
		//      justifyContent = vertical
		//      alignItems = horizontal

		// when changing to flex direction "row"
		//     justifyContent = horizontal
		//     alignItems = vertical

		flexDirection: "row",
		// when you change it to row, the align items works slightly diffrent
		// alignItems: "stretch", default
		// alignItems: "baseline",
		// alignItems: "center",
		// alignItems: "flex-end",
		// alignItems: "flex-start",

		//Justify content
		// justifyContent: "flex-start", | default value
		// justifyContent: "center",
		// justifyContent: "flex-end",
		// justifyContent: "space-between",
		// justifyContent: "space-around",
		// justifyContent: "space-evenly",

		//Position Property
		// position: "relative"  | Default Value

		// !! this is where things get weird !!
		// a position of absoloute obeys some flexbox rules set by parent but ignores its sibilings
		// position: "absolute",
	},
	//child
	textBox: {
		// margin: 10,
		// marginVertical: 20,
		// marginHorizontal: 20,
		borderWidth: 3,
		borderBottomColor: "black",
		// padding: 10,
		// paddingLeft: "50%",
		// paddingRight: "50%",
		// width: 100,
		// flex: 10,
		textAlign: "center",
	},
	child2: {
		// flex: 1,
		// the alignSelf will take priority over alignItems from the parent element
		// used to style a child seperatly from the parent
		// alignSelf: "stretch", | Default Value
		// alignSelf: "flex-end",
		// alignSelf: "center",
		// alignSelf: "flex-start",
		// adding absolute to child 2 will make it ignore the other children with the textBox style
		// position: "absolute",
		// how to change absolute position is with directions ( rules change with relative)
		// top: 44, this is saying from the top of the box go down 44px
		// bottom: 20, this is saying from the bottom of the box go up 20px
		// left: 20, this is saying from the left side of the box go 20px to the right
		// right: 20, this is saying from the right side of the box go 20px to the left
		//if the position is relative(default) then top/botttom/left/right work slightly different
		// top: 44, this is saying from the top of the elements current location go down 44px ( add 20 px of space on the top)
		// bottom: 20, this is saying from the bottom of the elements current location go up 20px ( add 20 px of space below)
		// left: 20, this is saying from the left side of the elements current location go 20px to the right ( add 20 px of space to the left)
		// right: 20, this is saying from the right side of the elements current location go 20px to the left ( add 20 px of space to the right)
		// if you set multiple positions at the same time the box will grow to that size
		// this would make the box fill the screen and be one px away from every side
		// top: 1,
		// bottom: 1,
		// left: 1,
		// right: 1,
		// react native added an easier way to do this though with ...StyleSheet.absoluteFillObject
		// ...StyleSheet.absoluteFillObject,
	},
});

// with this setup, any styles in child2 will overwrite the same style in textBox. if only one has the stlye it combines into text
const text = StyleSheet.compose(styles.textBox, styles.child2);

export default BoxScreen;
