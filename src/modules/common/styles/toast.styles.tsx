import {StyleSheet, View, Text} from 'react-native';

const toastStyles = StyleSheet.create({
  errorToast: {
    padding: 10,
    backgroundColor: '#D9534F',
    borderRadius: 8,
  },
  errorText: {
    color: '#FFF',
    fontSize: 14,
    textAlign: 'center',
  },
});

export const toastConfig = {
  error: (props: any) => (
    <View style={toastStyles.errorToast}>
      <Text style={toastStyles.errorText}>{props.text1}</Text>
      <Text style={toastStyles.errorText}>{props.text2}</Text>
    </View>
  ),
};
