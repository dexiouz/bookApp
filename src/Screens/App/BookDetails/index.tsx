import * as React from 'react';
import {Text, View, Image} from 'react-native';
import {Rating} from 'react-native-ratings';
import {Button} from '../../../components';
import {HeaderWithActions} from '../../../components';
import {styles} from './styles';
interface BookDetailsProps {}

const BookDetails = (props: BookDetailsProps) => {
  return (
    <View style={styles.container}>
      <HeaderWithActions />
      <View style={{alignItems: 'center', marginVertical: 10}}>
        <View style={{width: 216, height: 320}}>
          <Image
            source={require('../../../assets/images/bigBook.png')}
            style={{width: '100%', height: '100%'}}
            resizeMode="cover"
          />
        </View>
        <Text style={{fontSize: 24, color: '#06070D', marginVertical: 6}}>
          Yves Saint Laurent
        </Text>
        <Text style={{fontSize: 14, color: '#06070D'}}>Suzy Menkes </Text>

        <View
          style={{marginTop: 10, flexDirection: 'row', alignItems: 'center'}}>
          <View>
            <Rating
              startingValue={3}
              type="star"
              ratingCount={5}
              imageSize={23}
              tintColor="#efeeee"
              readonly={true}
            />
          </View>
          <Text style={{marginLeft: 10}}>4.5/5</Text>
        </View>
      </View>

      <View style={{backgroundColor: ''}}>
        <Text style={{lineHeight: 24}}>
          A spectacular visual journey through 40 years of haute couture from
          one of the best-known and most trend-setting brands in fashion.
        </Text>
        <View style={{flexDirection: 'row',marginVertical: 10, justifyContent: 'space-between'}}>
          <Button
          icon={require('../../../assets/images/btn1.png')}
            title="Preview"
            containerStyle={{width: '49%', backgroundColor: '#fff'}}
            textStyle={{color: '#000'}}
            onPress={() => {}}
          />
          <Button
          icon={require('../../../assets/images/btn2.png')}
            title="Reviews"
            containerStyle={{width: '49%', backgroundColor: '#fff'}}
            textStyle={{color: '#000'}}
            onPress={() => {}}
          />
        </View>
        <Button
            title="Buy Now for $65"  
            onPress={() => {}}
            containerStyle={{height: 60}}
          />
      </View>
    </View>
  );
};

export default BookDetails;
