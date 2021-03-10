import React, {useContext} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {AuthContext} from '../../../context/authContext';
import {Button} from '../../../components';
interface SettingsProps {}

const Settings = (props: SettingsProps) => {
  const {signOut} = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Button title="Sign Out" onPress={signOut} />
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
});
