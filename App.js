import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import About from './screens/About';
import Home from './screens/Home';
import Profil from './screens/Profil';
import CustomDrawerContent from './components/molecules/CustomDrawerContent';
import MainDrawerNavigator from './navigation/DrawerNavigation';


const Drawer = createDrawerNavigator();
function MyDrawer() {
  
  return (
    <Drawer.Navigator
    screenOptions = {{
      // headerShown : false,
      drawerType : 'front', // comment le drawer apparait
      swipeEdgeWidth : 400, // la largeur du drawer
      swipeEnabled : true, // c'est clair swipe enable
      drawerStyle : {
          backgroundColor : '#fcfcff',
      }
  }}
    useLegacyImplementation
    drawerContent={(props) => <CustomDrawerContent {...props} />
    
    
    }>
      <Drawer.Screen name="accueil" component={Home} />
      <Drawer.Screen name="about" component={About} />
      <Drawer.Screen name="profil" component={Profil} />
      <Drawer.Screen name="histocourse" component={Profil} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    // <NavigationContainer>
    //   <MyDrawer />
    // </NavigationContainer>
    <MainDrawerNavigator/>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


