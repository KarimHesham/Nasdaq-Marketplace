import {StyleSheet} from 'react-native';

export const splashStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    backgroundColor: '#1C1C2E',
  },
  logo: {
    width: '60%',
    height: '20%',
  },
  tagline: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
