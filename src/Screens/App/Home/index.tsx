import * as React from 'react';
import { ScrollView, View, Text, FlatList } from 'react-native';
import {HeaderWithProfile} from '../../../components';
import PopularBooks from './PopularBooks';
import NewBooks from './NewBooks';
import {styles} from './styles';
interface HomeProps {}
const data = [1];
const Home = (props: HomeProps) => {
  return (
    <View style={styles.container}>
      <HeaderWithProfile />
      <FlatList  
       ListHeaderComponent={
        <PopularBooks/>
      }
       ListFooterComponent={
        <NewBooks/>
      }
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({item}) => <Text></Text>}
        keyExtractor={(item) => Math.random().toString()}
      />
    </View>
  );
};

export default Home;


