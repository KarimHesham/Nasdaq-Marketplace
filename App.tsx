import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import useTheme from './src/modules/common/hooks/theme.hook';
import StocksContainer from './src/modules/stocks/components/stocks-container';
import Toast from 'react-native-toast-message';
import {toastConfig} from './src/modules/common/styles/toast-styles';
import {StocksProvider} from './src/modules/stocks/context/stocks.context';

function App(): React.JSX.Element {
  const {backgroundStyle, isDarkMode} = useTheme();

  return (
    <StocksProvider>
      <SafeAreaView style={[styles.safeArea]}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <StocksContainer />
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
