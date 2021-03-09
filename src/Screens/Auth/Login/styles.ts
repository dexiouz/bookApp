import {StyleSheet} from 'react-native';
import {colors} from '../../../config/colors';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  curve: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopRightRadius: 32,
    borderTopLeftRadius: 32,
    paddingHorizontal: 20,
    justifyContent: 'space-around',
    paddingVertical: 10
  },
  adventureText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff'
  }
});
