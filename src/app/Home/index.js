import React from 'react';
import {ThemeProvider, createTheme, Button} from '@rneui/themed';
import CaptureImage from '@components/Home/CaptureImage';
import {useNavigation} from '@react-navigation/native';
import {appUrls} from '@utility//appUrls';
import {StyleSheet, View} from 'react-native';

const theme = createTheme({
  Button: {
    size: 'md',
    radius: 'md',
    buttonStyle: {
      width: 150,
      margin: 5,
    },
  },
});

const Home = () => {
  const navigation = useNavigation();

  return (
    <ThemeProvider theme={theme}>
      <View style={styles.homeContainer}>
        <CaptureImage />
        <Button onPress={() => navigation.navigate(appUrls.gallery)}>
          Gallery
        </Button>
      </View>
    </ThemeProvider>
  );
};

export default Home;

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
