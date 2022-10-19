import { createStackNavigator } from "@react-navigation/stack";
import Bot from "./screens/Bot";
import Map from './screens/Map';
import MapCity from './screens/MapCity'

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='Map' component={Map}/>
        <Stack.Screen name='MapCity' component={MapCity} />
    </Stack.Navigator>
  )
}

export default AppNavigator