import * as React from 'react';
import {  View, TouchableOpacity, Image} from 'react-native'; 
import { useNavigation } from '@react-navigation/native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {styles} from './styles';
interface HeaderProps {}

const Header = (props: HeaderProps) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity  onPress={()=>navigation.goBack()}>
        <Ionicons name="chevron-back-outline" size={24} />
      </TouchableOpacity>
      <View style={{flexDirection: 'row',justifyContent: 'space-between',  width: 85, alignItems: 'center'}}>
        <Ionicons name="bookmark-outline" size={24} />
        <Ionicons name="ellipsis-vertical-sharp" size={24} />
      </View>
    </View>
  );
};

export default Header;
