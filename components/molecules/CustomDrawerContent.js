
import { Button, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer';

import myDrawerItems from '../../constants/myDrawerItems';
import { SafeAreaView } from 'react-native-safe-area-context';


function CustomDrawerContent(props) {
    return (
        <>
            <View>
                {/* profil  */}
                 <View style = {{height : 100, backgroundColor : 'green'}}>

                 </View>
            </View>
      <DrawerContentScrollView {...props}>
        {/* <DrawerItemList {...props} /> */}
        
         {myDrawerItems.map((item) => (
            <DrawerItem
                key={item.route}
                label={item.title}
                onPress={() => props.navigation.navigate(item.route)}
                
                icon={({ focused, color, size }) => (
                        <FontAwesome name={item.icon} size={24} color="black" />
                     )}
            />
            ))}
      </DrawerContentScrollView>
        </>
    );
  }

export default CustomDrawerContent
