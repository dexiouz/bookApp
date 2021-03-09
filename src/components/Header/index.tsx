import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface HeaderProps {}

const Header = (props: HeaderProps) => {
  return (
    <View style={styles.container}>
      <Text>Header</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {}
});
