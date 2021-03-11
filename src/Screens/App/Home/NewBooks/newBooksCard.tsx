import * as React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Rating} from 'react-native-ratings';
import FastImage from 'react-native-fast-image';
import {styles} from './styles';
import { useNavigation } from '@react-navigation/native';
interface Props {
  item: any
}
const index:React.FC<Props> = ({item}) => {
  const navigation = useNavigation();
  const title = item?.volumeInfo?.title || '';
  const author = item?.volumeInfo?.authors || '';
  const image = item?.volumeInfo?.imageLinks?.smallThumbnail || '';
  const rating = item?.volumeInfo?.averageRating || 0;
  const link = item?.selfLink; 
  const realAuthor = author[0] !== undefined ? author[0] : '';
  const useAuthorName = realAuthor ? realAuthor.slice(0, 19) : realAuthor; 
   
  return ( 
      <TouchableOpacity
      onPress={()=>navigation.navigate("BookDetails", {
        link
      })}
        style={styles.bookContainer}>
        <View style={styles.imageView}>
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
            ):<Text style={{backgroundColor: 'red'}}>Loading Image</Text>
          }
         
        </View>
        <View style={{backgroundColor: '', width: '55%'}}>
          <View>
            <Text style={styles.text1}>
              {title}
            </Text>
            <Text style={{fontSize: 12}}>{useAuthorName}</Text>
          </View>

          <View style={{marginTop: 30, alignItems: 'flex-start'}}>
            <Rating
              startingValue={+rating}
              type="star"
              ratingCount={5}
              imageSize={23}
              tintColor="#efeeee"
              readonly={true}
            />
          </View>
        </View> 

        <TouchableOpacity> 
          <Ionicons name="bookmark-outline" size={20} /> 
          </TouchableOpacity> 
      </TouchableOpacity> 
  );
};

export default index;
