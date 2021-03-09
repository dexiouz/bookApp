import React, {useEffect, useState} from 'react';
import {Text, View, FlatList} from 'react-native';
import {Loader} from '../../../../components';
import {popularBooksUrl} from '../../../../api';
import axios from 'axios';
import PopularBooksCard from './popularBooksCard';
import {styles} from './styles';
const url = popularBooksUrl;
interface HomeProps {}
const index: React.FC<HomeProps> = () => {
  const [state, setState] = React.useState<[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    const getBooks = async () => {
      setLoading(true);
      try {
        const res = await axios.get(url);
        setState(res.data.items);
      } catch (e) {
        console.log(e, 'error');
      }
      setLoading(false);
    };

    getBooks();
  }, []);

  return (
    <View>
      <Text style={styles.title}>Popular Books</Text>
      {loading ? (
        <Loader />
      ) : (
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={state}
          renderItem={({item}) => <PopularBooksCard item={item} />}
          keyExtractor={(item) => Math.random().toString()}
        />
      )}
    </View>
  );
};

export default index;
