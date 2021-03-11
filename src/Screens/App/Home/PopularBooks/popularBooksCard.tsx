import * as React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import {styles} from './styles';
interface HomeProps {
  item: any;
}

const index: React.FC<HomeProps> = ({item}) => {
  const navigation = useNavigation();
  const title = item?.volumeInfo?.title || '';
  const author = item?.volumeInfo?.authors || '';
  const image = item?.volumeInfo?.imageLinks?.smallThumbnail || '';
  const rating = item?.volumeInfo?.averageRating || '';
  const amount = item?.saleInfo?.listPrice?.amount || 'Free';
  const realAuthor = author[0] !== undefined ? author[0] : '';
  const useAuthorName = realAuthor ? realAuthor.slice(0, 19) : realAuthor;
  const link = item?.selfLink;
  console.log(image, 'am');
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('BookDetails', {
          link,
        })
      }>
      <View
        style={{
          backgroundColor: '',
          width: 140,
          marginLeft: 10,
          borderRadius: 10,
        }}>
        <View style={{backgroundColor: '', width: '100%', height: 192}}>
          {image ? (
            <FastImage
              style={{width: '100%', height: '100%'}}
              source={{
                uri: image,
                priority: FastImage.priority.normal,
              }}
              resizeMode={FastImage.resizeMode.contain}
            />
          ) : (
            <Text>Loading Image</Text>
          )}
        </View>
        <View>
          <Text style={{marginVertical: 5, fontSize: 14, fontWeight: '600'}}>
            {title.slice(0, 30) || ''}
          </Text>
          <Text style={{fontSize: 12}}>{useAuthorName || ''}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default index;
