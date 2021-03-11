import React, {useEffect, useState} from 'react';
import {Text, View, Image, ScrollView} from 'react-native';
import axios from 'axios';
import {Rating} from 'react-native-ratings';
import FastImage from 'react-native-fast-image';
import {Button, HeaderWithActions, Loader} from '../../../components'; 
import {styles} from './styles';
type route = {
  params: any;
};
interface BookDetailsProps {
  route: route;
  navigation: any
}

const BookDetails: React.FC<BookDetailsProps> = ({route, navigation}) => {
  const [state, setState] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(false)
  useEffect(() => {
    const getBooks = async () => {
      setLoading(true)
      try {
        const res = await axios.get(route?.params?.link);
        setState(res.data);
      } catch (e) {
        console.log(e, 'error');
      }
      setLoading(false)
    };
    getBooks()  
  }, []);
  const title = state?.volumeInfo?.title || '';
  const author = state?.volumeInfo?.authors || '';
  const image = state?.volumeInfo?.imageLinks?.thumbnail || '';
  const rating = state?.volumeInfo?.averageRating || '';
  const description = state?.volumeInfo?.description || '';
  const amount = state?.saleInfo?.listPrice?.amount || 'Free';
  const realAuthor = author[0] !== undefined ? author[0] : '';
  const useAuthorName = realAuthor ? realAuthor.slice(0, 40) : realAuthor;
  const previewLink = state?.volumeInfo?.previewLink; 
  return (
    <View style={styles.container}>
      <HeaderWithActions />
      {
        loading ? <Loader /> : (
          <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{alignItems: 'center', marginVertical: 10}}>
            <View style={{width: 216, height: 320}}>
               
              {
            image ? (
            <FastImage
            style={{width: '100%', height: '100%'}}
            source={{
                uri: image,
                priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.contain}
        />
            ):<Text>Loading Image</Text>
          }
            </View>
            <Text style={{fontSize: 24, color: '#06070D', marginVertical: 6}}>
              {title}
            </Text>
            <Text style={{fontSize: 14, color: '#06070D'}}>{useAuthorName}</Text>
  
            <View
              style={{marginTop: 10, flexDirection: 'row', alignItems: 'center'}}>
              <View>
                <Rating
                  startingValue={+rating}
                  type="star"
                  ratingCount={5}
                  imageSize={23}
                  tintColor="#efeeee"
                  readonly={true}
                />
              </View>
              <Text style={{marginLeft: 10}}>{rating || 0}/5</Text>
            </View>
          </View>
  
          <View style={{backgroundColor: ''}}>
            <Text style={{lineHeight: 24}}>{description}</Text>
            <View
              style={{
                flexDirection: 'row',
                marginVertical: 10,
                justifyContent: 'space-between',
              }}>
              <Button
                icon={require('../../../assets/images/btn1.png')}
                title="Preview"
                containerStyle={{width: '49%', backgroundColor: '#fff'}}
                textStyle={{color: '#000'}}
                onPress={() => navigation.navigate("PreviewPage", {
                  uri: previewLink
                })}
              />
              <Button
                icon={require('../../../assets/images/btn2.png')}
                title="Reviews"
                containerStyle={{width: '49%', backgroundColor: '#fff'}}
                textStyle={{color: '#000'}}
                onPress={() => navigation.navigate("PreviewPage", {
                  uri: previewLink
                })}
              />
            </View>
            <Button
              title="Buy Now for $65"
              onPress={() => {}}
              containerStyle={{height: 60}}
            />
          </View>
        </ScrollView>
        )
      }
     
    </View>
  );
};

export default BookDetails;
