import React from 'react';
import { Text, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
interface Props {
  message: string,
  networkIcon: any
}
const index:React.FC<Props> = ({message, networkIcon}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
      }}>
      {networkIcon ? (
        networkIcon
      ) : (
        <MaterialCommunityIcons name="auto-fix" size={45} color="#326abe" />
      )}

      <Text style={{fontSize: 16, marginTop: 10, textAlign: 'center'}}>
        {message ? message : 'No Records'}
      </Text>
    </View>
  );
};

export default index;
