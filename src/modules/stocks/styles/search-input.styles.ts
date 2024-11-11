import {StyleSheet} from 'react-native';

export const searchInputStyles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  logo: {
    width: 24,
    height: 24,
  },
  input: {
    width: '85%',
    height: 48,
    backgroundColor: '#2C2C3E',
    borderRadius: 12,
    paddingHorizontal: 16,
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});
