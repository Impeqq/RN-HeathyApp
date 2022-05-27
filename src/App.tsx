/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { useState } from 'react';
import type { Node } from 'react';

import 'react-native-gesture-handler';

import { BottomNavigator, StackNavigator } from '@navigation';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { OnboardingScreen } from '@screens';
import { colors } from '@theme';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.white2,
  },
};

const App: () => Node = () => {
  const [isOnboarded, setIsOnboarded] = useState(false);

  const handleOnboarded = () => setIsOnboarded(true);

  return (
    <NavigationContainer theme={MyTheme}>
      {isOnboarded ? (
        <StackNavigator />
      ) : (
        <OnboardingScreen handleOnboarded={handleOnboarded} />
      )}
    </NavigationContainer>
  );
};

export default App;
