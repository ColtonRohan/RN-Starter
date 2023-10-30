import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";
import PictureScreen from "./src/screens/PictureScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColorScreen from "./src/screens/ColorScreen";
import SingleColorScreen from "./src/screens/SingleColorScreen";
import InputScreen from "./src/screens/InputScreen";
import BoxScreen from "./src/screens/BoxScreen";
import LayoutScreen from "./src/screens/LayoutScreen";

const navigator = createStackNavigator(
	{
		Home: HomeScreen,
		Components: ComponentsScreen,
		List: ListScreen,
		ImageScreen: PictureScreen,
		CounterScreen: CounterScreen,
		ColorScreen: ColorScreen,
		SingleColorScreen: SingleColorScreen,
		InputScreen: InputScreen,
		BoxScreen: BoxScreen,
		LayoutScreen: LayoutScreen,
	},
	{
		initialRouteName: "Home",
		defaultNavigationOptions: {
			title: "App",
		},
	}
);

export default createAppContainer(navigator);
