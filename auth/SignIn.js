import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SignIn = () => {
  return (
    <View>
      <Text>SignIn</Text>
    </View>
  )
}

export default SignIn

const styles = StyleSheet.create({
  mdButton : {
      color : 'white',
      backgroundColor : 'green',
  },
  mdText : {
      color : 'red', 
      fontSize : 20,
      backgroundColor : 'green',
      // ne refléchissez pas trop, c'était juste pour tester
  }
})