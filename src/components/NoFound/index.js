import {Image, StyleSheet, View, Linking, Text} from 'react-native';
import React from 'react';
import {Button} from '@rneui/base';

const NotFound = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('@static/not-found.png')} />
      <Text style={styles.infoText}>
        Please check your permission or capture some photo!
      </Text>
      <Button onPress={() => Linking.openSettings()}>Open Setting</Button>
    </View>
  );
};

export default NotFound;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 250,
    width: 250,
  },
  infoText: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
});
