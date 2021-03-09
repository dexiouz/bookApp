import * as React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {styles} from './styles';
interface HeaderProps {}

const Header = (props: HeaderProps) => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row',  alignItems: 'center',}}>
        <Image source={require('../../../assets/images/profile.png')} />
        <Text style={{marginLeft: 15}}>Hi, Dustin!</Text>
      </View>
      <TouchableOpacity>
        <AntDesign name="search1" size={24}/>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

 