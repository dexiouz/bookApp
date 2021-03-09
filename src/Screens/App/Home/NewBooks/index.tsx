import * as React from 'react';
import {Text, View, FlatList} from 'react-native';
import NewBooksCard from './newBooksCard';
import PopularBooks from '../PopularBooks';
import {styles} from './styles';
interface HomeProps {}
const data = [1,2, 2,4];
const Home = (props: HomeProps) => {
  return (
    <View>
      <Text style={styles.title}>New Books</Text>
      <FlatList 
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({item}) => <NewBooksCard />}
        keyExtractor={(item) => Math.random().toString()}
      />
    </View>
  );
};

export default Home;
