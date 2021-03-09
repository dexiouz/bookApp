import React from 'react';
import {styles} from './styles';
import {TouchableOpacity, Text} from 'react-native';
interface Props {
  onPress: () => void;
  title: string;
  containerStyle?: object;
}
const Button: React.FC<Props> = ({onPress, title, containerStyle}) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.container, containerStyle]}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

export default Button;
