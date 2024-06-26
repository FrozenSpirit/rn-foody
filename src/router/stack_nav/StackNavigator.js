import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../screens/HomeScreen';
import ProfileScreen from '../../screens/ProfileScreen';

export default function StackNavigator() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}
