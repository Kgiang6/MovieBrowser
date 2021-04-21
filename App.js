import React from 'react';
import {Text, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {HomeScreenStack} from './Navigation/Navigator';


const App = props => {

  return(
  <NavigationContainer>
    <HomeScreenStack/>
  </NavigationContainer>
  )
}
export default App;