import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import React from 'react'



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
    <View style = {{padding : 20}}>
      <Text style = {styles.mdText}>vous etes dans la page d'accueil de l'app</Text>
      <Button style = {styles.mdButton} title = "se déconnecter" onPress={seDeconnecter}/>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={goToTaxiModule}>
          <Text style={styles.buttonText}>Aller au module Taxi</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={goToLivreurModule}>
          <Text style={styles.buttonText}>Aller au module Livreur</Text>
        </TouchableOpacity>
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
    },
    button: {
      backgroundColor: 'blue',
      height : 30,
      alignItems : 'center',
      borderRadius: 5,
      marginBottom: 10,
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
    },
})