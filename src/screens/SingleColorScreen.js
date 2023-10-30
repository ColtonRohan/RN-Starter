import React, { useReducer } from "react";
import Colorlayout from "../Components/Colorlayout";
import { View } from "react-native";

const COLOR_INCREMENT = 50;

const reducer = (state, action) => {
	// state is an object === { Red : number, Green: number, Blue : number}
	//action === { type: "change_Red" || "change_Green" || "change_Blue", payload: 15 || -15 }
	switch (action.type) {
		case "change_Red":
			return state.Red + action.payload > 255 || state.Red + action.payload < 0
				? state
				: { ...state, Red: state.Red + action.payload };
		case "change_Green":
			return state.Green + action.payload > 255 ||
				state.Green + action.payload < 0
				? state
				: { ...state, Green: state.Green + action.payload };
		case "change_Blue":
			return state.Blue + action.payload > 255 ||
				state.Blue + action.payload < 0
				? state
				: { ...state, Blue: state.Blue + action.payload };
		default:
			return state;
	}
};

const SingleColorScreen = () => {
	const [state, dispatch] = useReducer(reducer, { Red: 0, Green: 0, Blue: 0 });

	const { Red, Green, Blue } = state;

	return (
		<>
			<Colorlayout
				onIncrease={() =>
					dispatch({ type: "change_Red", payload: COLOR_INCREMENT })
				}
				onDecrease={() =>
					dispatch({ type: "change_Red", payload: -COLOR_INCREMENT })
				}
				color="Red"
			/>
			<Colorlayout
				onIncrease={() =>
					dispatch({ type: "change_Green", payload: COLOR_INCREMENT })
				}
				onDecrease={() =>
					dispatch({ type: "change_Green", payload: -COLOR_INCREMENT })
				}
				color="Green"
			/>
			<Colorlayout
				onIncrease={() =>
					dispatch({ type: "change_Blue", payload: COLOR_INCREMENT })
				}
				onDecrease={() =>
					dispatch({ type: "change_Blue", payload: -COLOR_INCREMENT })
				}
				color="Blue"
			/>
			<View
				style={{
					height: 200,
					width: 200,
					top: 100,
					left: 100,
					backgroundColor: `rgb(${Red}, ${Green}, ${Blue})`,
				}}
			></View>
		</>
	);
};

export default SingleColorScreen;
