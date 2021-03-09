import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {styles} from './styles';

interface Props{
  otherColor: string,
  size: number
}
 const index: React.FC<Props> = ({otherColor, size}) => (
  <View style={styles.container}>
    <ActivityIndicator
     size={size ? size : "large"}
      color={otherColor ? otherColor : '#0753AB'}
    />
  </View>
);

export default index;

