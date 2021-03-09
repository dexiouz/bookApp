import * as React from 'react';
import {Text, View, FlatList} from 'react-native';
import PopularBooksCard from './popularBooksCard';
import {styles} from './styles';
interface HomeProps {}
const data = [1, 2, 4, 5, 6, 7, 7, 8, 8];
const Home = (props: HomeProps) => {
  return (
    <View>
      <Text style={styles.title}>Popular Books</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({item}) => <PopularBooksCard />}
        keyExtractor={(item) => Math.random().toString()}
      />
    </View>
  );
};

export default Home;
