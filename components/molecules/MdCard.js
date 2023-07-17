import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const MdCard = ({ imageSource, description, onPress }) => {
  return (
    <View>
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={{ uri: imageSource }} style={styles.image} />
      <Text style={styles.description}>{description}</Text>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Voir plus</Text>
      </TouchableOpacity>
    </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop : 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 6,
    marginBottom: 16,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#FDCD03',
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: 'center',
    height : 40,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default MdCard;
