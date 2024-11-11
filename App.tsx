import React, {useEffect, useState} from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import useTheme from './src/modules/common/hooks/theme.hook';
import StocksContainer from './src/modules/stocks/components/stocks-container';
import Toast from 'react-native-toast-message';
import {toastConfig} from './src/modules/common/styles/toast.styles';
import {StocksProvider} from './src/modules/stocks/context/stocks.context';
import SplashScreen from './src/modules/common/components/splash-screen';

function App(): React.JSX.Element {
  const {backgroundStyle, isDarkMode} = useTheme();

  const [isSplashVisible, setIsSplashVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsSplashVisible(false);
    }, 2500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <StocksProvider>
      <SafeAreaView style={[styles.safeArea]}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        {isSplashVisible ? (
          <SplashScreen />
        ) : (
          <>
            <StocksContainer />
            <Toast config={toastConfig} />
          </>
        )}
        <Toast config={toastConfig} />
      </SafeAreaView>
    </StocksProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    paddingTop: 16,
    flex: 1,
    backgroundColor: '#1C1C2E',
  },
});

export default App;
