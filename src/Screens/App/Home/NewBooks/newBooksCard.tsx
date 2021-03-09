import * as React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Rating} from 'react-native-ratings';
import {styles} from './styles';
interface HomeProps {}

const Home = (props: HomeProps) => {
  return ( 
      <TouchableOpacity
        style={styles.bookContainer}>
        <View style={styles.imageView}>
          <Image
            source={require('../../../../assets/images/modified.png')}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <View>
          <View>
            <Text style={styles.text1}>
              Yves Saint Laurent
            </Text>
            <Text style={{fontSize: 12}}>Suzy Menkes </Text>
          </View>

          <View style={{marginTop: 30}}>
            <Rating
              startingValue={2}
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

export default Home;
