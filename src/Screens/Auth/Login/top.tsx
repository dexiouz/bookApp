import React  from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles'; 
interface LoginProps {}

const index = (props: LoginProps) => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1.1, justifyContent: 'flex-end'}}>
        <View style={{width: '50%', marginLeft: 20, marginBottom: 70}}>
          <Text style={styles.adventureText}>Adventures </Text>
          <Text style={styles.adventureText}>in literature</Text>
          <Text style={{color: '#fff', marginTop: 25}}>Join Our Community</Text>
        </View>
      </View> 
    </View>
  );
};

export default index;
