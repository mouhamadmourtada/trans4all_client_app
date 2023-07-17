import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput, Button } from 'react-native-paper';
import Colors from '../constants/Colors';

const SignIn = ({navigation}) => {
  const [password, setPassword] = React.useState('');
  const [username, setUsername] = React.useState('');

  const seconnecter = ()=> {
    navigation.navigate('accueil')
  }
  return (
    
    <View style={styles.princiapal}>
      <View style={{marginBottom : 20,}}>
      <Text variant="displayLarge" style = {{marginBottom : 20, color : Colors.jaune, fontSize : 40, fontWeight : 700}}>LOGIN</Text>
        <TextInput
          label="Username"
          style = {styles.mdInput}
          right={<TextInput.Icon icon="email" />}
        />
        <TextInput style={styles.mdInput}
        
        label="Password"
        secureTextEntry
        right={<TextInput.Icon icon="eye" />}
      />
      </View>
      <Button icon="login" mode="contained" buttonColor={Colors.jaune} onPress={seconnecter}>
        Se Connecter
      </Button>

    </View>
  )
}

export default SignIn

const styles = StyleSheet.create({
  mdButton : {
      color : 'white',
      backgroundColor : Colors.jaune,
  },
  mdText : {
      color : 'red', 
      fontSize : 20,
      backgroundColor : Colors.jaune,
      // ne refléchissez pas trop, c'était juste pour tester
  },
  mdInput : {
    color : Colors.jaune,
    backgroundColor : Colors.blanc,
    marginBottom : 10,
    
  },
  princiapal : {
    paddingTop : 150, paddingHorizontal : 20, 
    backgroundColor : Colors.blancPrincipal,
    flex : 1

  }
})