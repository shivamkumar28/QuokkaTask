import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { screens } from '../../constant';
import NavigationConfig from '../../config/navigation-config';
import Dashboard from '../../modules/dashboard';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={NavigationConfig}>
      <Stack.Screen name={screens.dashboard} component={Dashboard} />
    </Stack.Navigator>
  );
};

export default AppStack;
