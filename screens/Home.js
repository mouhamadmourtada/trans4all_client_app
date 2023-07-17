import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'
import MdCard from '../components/molecules/MdCard'



const Home = ({navigation}) => {
  const seDeconnecter = ()=> {
    navigation.navigate('signIn')
  }

  const goToTaxiModule = () => {
    navigation.navigate('taxi');
  };

  const goToLivreurModule = () => {
    navigation.navigate('livraison');
  };
  
  return (
    <View style={styles.container}>
      <View>
        <Text style = {styles.indique}>Bienvenu à Transpo4All</Text>
        <View style={{flexDirection : 'row', justifyContent : 'space-between'}}>
          <View style = {{width : '47%'}}> 
            <MdCard imageSource="https://img.freepik.com/vecteurs-libre/affiche-taxi-voiture-service-public-jaune-realiste-reflexion_1284-5444.jpg?w=2000"
              description="Commandeil ta taxi"
              onPress={goToTaxiModule}
              style = {{marginRight : 10}}
            />

          </View>
          <View style = {{width : '47%'}} >
            <MdCard imageSource="https://img.freepik.com/vecteurs-premium/service-livraison-ligne-sans-contact-au-bureau-domicile-moto-suivi-commande-ligne_195968-30.jpg"
                description="Yobboulma   livreur"
                onPress={goToTaxiModule}
            />
          </View>        

        </View>

        <View style={{flexDirection : 'row', justifyContent : 'space-between'}}>
          <View style = {{width : '47%'}}>
            <MdCard imageSource="https://grandpicsaintloup.fr/content/uploads/2023/01/26388482_7184948_Mesa-de-trabajo-1_Mesa-de-trabajo-1_Mesa-de-trabajo-1-e1673018133841.png"
              description="Yobbalema gnu dem"
              onPress={goToTaxiModule}
              style = {{marginRight : 10}}
            />
          </View>
          <View style = {{width : '47%'}}>
            <MdCard imageSource="https://img.freepik.com/vecteurs-premium/vehicule-bus-urbain-transport-public-moderne-trafic-urbain-rural-concept-deplacement-confortable_48369-46058.jpg?w=2000"
                description="Commandeil ta taxi"
                onPress={goToTaxiModule}
            />

          </View>
          

          
        </View>

      </View>
      
    </View>

  );
}

export default Home

const styles = StyleSheet.create({
    mdButton : {
        color : 'white',
    },
    mdText : {
        color : 'red', 
        fontSize : 20,
        // ne refléchissez pas trop, c'était juste pour tester
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor : Colors.blancPrincipal,
    },
    button: {
      backgroundColor: Colors.jaune,
      height : 30,
      alignItems : 'center',
      borderRadius: 5,
      marginBottom: 10,
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
    },
    indique : {
      fontSize : 30,
      color : Colors.jaune,
      fontWeight : 500,
    }
})