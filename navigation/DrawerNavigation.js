import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import CustomDrawerContent from '../components/molecules/CustomDrawerContent'
import Home from '../screens/Home';
import About from '../screens/About'
import Profil from '../screens/Profil'
import CourseHistory from '../screens/CourseHistory'
import TaxiTabNavigation from './TaxiTabNavigation';
import LivreurTabNavigation from './LivreurTabNavigation';

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
      <Drawer.Screen name="histocourse" component={CourseHistory} />
      <Drawer.Screen name="taxi" component={TaxiTabNavigation} />
      <Drawer.Screen name="livraison" component={LivreurTabNavigation} />
    </Drawer.Navigator>
  );
}
  
const MainDrawerNavigator = () => {
  return (
    <NavigationContainer>
      <MyDrawer/>
    </NavigationContainer>
  );
};

export default MainDrawerNavigator;
