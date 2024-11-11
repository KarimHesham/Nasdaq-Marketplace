import {StyleSheet} from 'react-native';

export const stockCardStyles = StyleSheet.create({
  card: {
    backgroundColor: '#2C2C3E',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 180,
    margin: 10,
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 10,
  },
  placeholder: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#3E3E5E',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  placeholderText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  ticker: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  name: {
    color: '#AAA',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 5,
    width: '100%',
  },
});
