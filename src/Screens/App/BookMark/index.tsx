import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface BookMarkProps {}

const BookMark = (props: BookMarkProps) => {
  return (
    <View style={styles.container}>
      <Text>BookMark</Text>
    </View>
  );
};

export default BookMark;

const styles = StyleSheet.create({
  container: {}
});
