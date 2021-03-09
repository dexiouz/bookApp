import React from 'react';
import {styles} from './styles';
import {TouchableOpacity, Text, Image, View} from 'react-native';
interface Props {
  icon?: any;
  onPress: () => void;
  title: string;
  textStyle?: object;
  containerStyle?: object;
}
const Button: React.FC<Props> = ({
  onPress,
  title,
  containerStyle,
  textStyle,
  icon,
}) => (
  <TouchableOpacity
    onPress={onPress}
    style={[
      styles.container,
      {flexDirection: icon ? 'row' : 'column', justifyContent: 'center'},
      containerStyle,
    ]}>
      {
        icon ? (
          <View style={{alignSelf: 'center', marginRight: 12}}>
      <Image source={icon} />
    </View>
        ) : null
      }
    
    <Text style={[styles.text, textStyle]}>{title}</Text>
  </TouchableOpacity>
);

export default Button;
