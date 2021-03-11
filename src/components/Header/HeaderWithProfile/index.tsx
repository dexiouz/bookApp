import  React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {styles} from './styles';
interface HeaderProps {}

const Header = (props: HeaderProps) => {
  const [user, setUser] = useState<any>('')
  const getUser = async () => {
    const user = await AsyncStorage.getItem('email');
    setUser(user);
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row',  alignItems: 'center',}}>
        <Image source={require('../../../assets/images/profile.png')} />
        <Text style={{marginLeft: 15}}>Hi, {user ? user.split('@')[0] : "Anonymous"!}</Text>
      </View>
      <TouchableOpacity>
        <AntDesign name="search1" size={24}/>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

 