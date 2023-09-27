import React, { useState } from "react";
import Colorlayout from "../Components/Colorlayout";
import { View } from "react-native";

const SingleColorScreen = () => {
	const [Red, setRed] = useState(0);
	const [Green, setGreen] = useState(0);
	const [Blue, setBlue] = useState(0);

	// console.log(Red);
	// console.log(Green);
	// console.log(Blue);

	const COLOR_INCREMENT = 50;

	const colorChange = (color, change) => {
		// color === 'red', 'green', 'blue'
		// change === +50, -50

		// 	if (color === "Red") {
		// 		if (Red + change > 255 || Red + change < 0) {
		// 			return;
		// 		} else {
		// 			setRed(Red + change);
		// 		}
		// 	}
		// 	if (color === "Green") {
		// 		if (Green + change > 255 || Green + change < 0) {
		// 			return;
		// 		} else {
		// 			setGreen(Green + change);
		// 		}
		// 	}
		// 	if (color === "Blue") {
		// 		if (Blue + change > 255 || Blue + change < 0) {
		// 			return;
		// 		} else {
		// 			setBlue(Blue + change);
		// 		}
		// 	}

		switch (color) {
			case "Red":
				Red + change > 255 || Red + change < 0 ? null : setRed(Red + change);
				return;
			case "Green":
				Green + change > 255 || Red + change < 0
					? null
					: setGreen(Green + change);
				return;
			case "Blue":
				Blue + change > 255 || Blue + change < 0
					? null
					: setBlue(Blue + change);
			default:
				return;
		}
	};

	return (
		<>
			<Colorlayout
				onIncrease={() => colorChange("Red", COLOR_INCREMENT)}
				onDecrease={() => colorChange("Red", -1 * COLOR_INCREMENT)}
				color="Red"
			/>
			<Colorlayout
				onIncrease={() => colorChange("Green", COLOR_INCREMENT)}
				onDecrease={() => colorChange("Green", -1 * COLOR_INCREMENT)}
				color="Green"
			/>
			<Colorlayout
				onIncrease={() => colorChange("Blue", COLOR_INCREMENT)}
				onDecrease={() => colorChange("Blue", -1 * COLOR_INCREMENT)}
				color="Blue"
			/>
			<View
				style={{
					height: 100,
					width: 100,
					backgroundColor: `rgb(${Red}, ${Green}, ${Blue})`,
				}}
			></View>
		</>
	);
};

export default SingleColorScreen;
