import React  from 'react';
import {Text, View, ImageBackground} from 'react-native';
import {styles} from './styles'; 
interface LoginProps {}

const index = (props: LoginProps) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../../assets/images/modified.png')}   style={styles.image}>
      <View style={{flex: 1.1, justifyContent: 'flex-end'}}>
        <View style={styles.textView}>
          <Text style={styles.adventureText}>Adventures </Text>
          <Text style={styles.adventureText}>in literature</Text>
          <Text style={{color: '#fff', marginTop: 25}}>Join Our Community</Text>
        </View>
      </View>
    </ImageBackground>
      
    </View>
  );
};

export default index;
