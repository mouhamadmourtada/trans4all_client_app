import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import index from '../modules/taxi/Taxi';
import TestFunct2 from '../modules/taxi/TestFunct2';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="accueil tax" component={index} />
      <Tab.Screen name="autre fonctionnalite" component={TestFunct2} />
    </Tab.Navigator>
  );
}
const TaxiTabNavigation = () => {
  return (
    <MyTabs/>
  )
}

export default TaxiTabNavigation

const styles = StyleSheet.create({})
