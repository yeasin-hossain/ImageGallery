import {View} from 'react-native';
import React from 'react';
import {ThemeProvider, createTheme} from '@rneui/themed';
import CaptureImage from '@components/Home/CaptureImage';

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
  return (
    <View>
      <ThemeProvider theme={theme} />
      <CaptureImage />
    </View>
  );
};

export default Home;
