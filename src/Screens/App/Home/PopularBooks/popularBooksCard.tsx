import * as React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {styles} from './styles';
interface HomeProps {}

const Home = (props: HomeProps) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={()=>navigation.navigate("BookDetails")}>
      <View
        style={{
          backgroundColor: '',
          width: 120,
          marginLeft: 10,
          borderRadius: 10,
        }}>
        <View style={{backgroundColor: '', width: '100%', height: 192}}>
          <Image
            source={require('../../../../assets/images/modified.png')}
            style={{width: '100%', height: '100%'}}
            resizeMode="cover"
          />
        </View>
        <View>
          <Text style={{marginVertical: 5, fontSize: 16, fontWeight: '600'}}>
            Fashionopolis
          </Text>
          <Text style={{fontSize: 12}}>Patrick Mauriès</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Home;
