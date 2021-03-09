import { Text, View, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  bookContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 15, 
  },
  imageView: {width: 100, height: 150},
   title: {
     fontSize: 24,
     fontWeight: '600',
     marginVertical: 20
   },
   image: {width: '100%', height: '100%'},
   text1: {marginVertical: 5, fontSize: 16, fontWeight: '600'},
   bookTitle: {
    fontSize: 24,
    fontWeight: '600'
  }
});