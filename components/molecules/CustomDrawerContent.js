
import { Button, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Card} from 'react-native-paper';

import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer';

import myDrawerItems from '../../constants/myDrawerItems';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../../constants/Colors';
import { Ionicons } from '@expo/vector-icons'; 


function CustomDrawerContent(props) {
    return (
        <>
            <View>
                {/* profil  */}
                <View style = {{flexDirection : 'column'}}>
                  <Ionicons style = {{marginTop: 10, textAlign : 'center'}} name="person-circle" size={150} color="black" />
                  <View style = {{flexDirection : 'column', justifyContent: 'center', marginLeft : 10 }}>
                    <Text style = {{fontSize: 20, marginBottom : 10, color : Colors.jaune}}>Mouhamad Mourtada</Text>
                    <Text style = {{fontSize: 20, marginBottom : 10, color : Colors.jaune}}>DIOP</Text>
                  </View>

                </View>
            </View>
      <DrawerContentScrollView {...props}>
        {/* <DrawerItemList {...props} /> */}
        
         {myDrawerItems.map((item) => (
            <DrawerItem
                key={item.route}
                label={item.title}
                style = {{ marginHorizontal : 20, marginVertical : 10, fontWeight : 400, }}
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
