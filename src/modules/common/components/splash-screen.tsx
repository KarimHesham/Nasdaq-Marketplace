import React from 'react';
import {View, Image} from 'react-native';
import {splashStyles} from '../styles/splash.styles';
import NasdaqLogo from '../../../assets/nasdaq-logo.png';
import {Text} from 'react-native';

const SplashScreen: React.FC = () => {
  return (
    <View style={splashStyles.container}>
      <Image
        source={NasdaqLogo}
        style={splashStyles.logo}
        resizeMode="contain"
      />
      <Text style={splashStyles.tagline}>Kareem Hesham</Text>
    </View>
  );
};

export default SplashScreen;
