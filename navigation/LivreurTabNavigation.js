import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import index from '../modules/livraison/Livreur';
import TestFunct2 from '../modules/livraison/TestFunct2';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="accueil livraison" component={index} />
      <Tab.Screen name="autre fonctionnalite" component={TestFunct2} />
    </Tab.Navigator>
  );
}
const LivreurTabNavigation = () => {
  return (
    <MyTabs/>
  )
}

export default LivreurTabNavigation

const styles = StyleSheet.create({})