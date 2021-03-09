import React, {useEffect, useState} from 'react';
import {Text, View, FlatList} from 'react-native';
import NewBooksCard from './newBooksCard';
import {newBooksUrl} from '../../../../api';
import {Loader} from '../../../../components';
import axios from 'axios';
import {styles} from './styles';
interface HomeProps {}
const data = [1,2, 2,4];
const index: React.FC<HomeProps> = (props: HomeProps) => {
  const [state, setState] = React.useState<[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    const getBooks = async () => {
      setLoading(true);
      try {
        const res = await axios.get(newBooksUrl);
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
      <Text style={styles.title}>New Books</Text>
      {loading ? (
        <Loader />
      ) : (
      <FlatList 
        showsHorizontalScrollIndicator={false}
        data={state}
        renderItem={({item}) => <NewBooksCard item={item}/>}
        keyExtractor={(item) => Math.random().toString()}
      />
      )
}
    </View>
  );
};

export default index;
