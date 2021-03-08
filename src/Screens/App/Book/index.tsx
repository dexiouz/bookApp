import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface BookProps {}

const Book = (props: BookProps) => {
  return (
    <View style={styles.container}>
      <Text>Book</Text>
    </View>
  );
};

export default Book;

const styles = StyleSheet.create({
  container: {}
});
