import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import CounterStateScreen from "./src/screens/CounterStateScreen";
import FlatListScreen from "./src/screens/FlatListScreen";
import ColorAdjusterScreen from "./src/screens/ColorAdjusterScreen";
import ColorAdjusterReduxScreen from "./src/screens/ColorAdjusterReduxScreen";
import TextInputScreen from "./src/screens/TextInputScreen";
import LayoutScreen from "./src/screens/LayoutScreen";
import ColorStateScreen from './src/screens/ColorStateScreen';

const navigator = createStackNavigator(
  {
    home: HomeScreen,
    components : ComponentsScreen,
    stateHooks : CounterStateScreen,
    colorAdjuster: ColorAdjusterScreen,
    textInput: TextInputScreen,
    layout: LayoutScreen,
    colors : ColorStateScreen,
    colorsRedux : ColorAdjusterReduxScreen,
    list : FlatListScreen 
  },
  {
    initialRouteName: "home",
    defaultNavigationOptions: {
      title: "React Native App"
    }
  }
);

export default createAppContainer(navigator);
