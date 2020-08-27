import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import CounterStateScreen from "./src/screens/CounterStateScreen";
import FlatListScreen from "./src/screens/FlatListScreen";
import ColorStateScreen from './src/screens/ColorStateScreen';

const navigator = createStackNavigator(
  {
    home: HomeScreen,
    components : ComponentsScreen,
    stateHooks : CounterStateScreen,
    colors : ColorStateScreen,
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
