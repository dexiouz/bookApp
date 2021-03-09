import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  inputContainer: {
    borderRadius: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: "#EEEEEE",
    height: 46,
    width: '100%', 
    // backgroundColor: 'rgba(48, 48, 48, 0.3)',
  },
  errorMessage: {
    color: 'red',
    fontSize: 12,
    // marginTop: 3,
  },
});
