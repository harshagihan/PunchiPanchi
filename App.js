import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './src/components/organisms/HomeScreen';
import DetailsScreen from './src/components/organisms/DetailsScreen';
import RNBootSplash from 'react-native-bootsplash';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer onReady={() => RNBootSplash.hide()}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerRightContainerStyle: {
              marginRight: 20,
            },
            headerTitleAlign: 'center',
            title: 'පුංච් පැංචි',
            headerBackTitle: 'back',
          }}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
