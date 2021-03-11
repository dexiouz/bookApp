import React, {useEffect, useContext} from 'react';
import {View, ImageBackground} from 'react-native';
import TouchID from 'react-native-touch-id';
import {AuthContext} from '../../../context/authContext';
import {styles} from './styles';
import LoginForm from './LoginForm';
import Top from './top';
interface LoginProps {}


 // touch Id config object
 const optionalConfigObject = {
  title: 'Authentication Required', // Android
  imageColor: '#e00606', // Android
  imageErrorColor: '#ff0000', // Android
  sensorDescription: 'Touch sensor', // Android
  sensorErrorDescription: 'Failed', // Android
  cancelText: 'Cancel', // Android
  fallbackLabel: 'Show Passcode', // iOS (if empty, then label is hidden)
  unifiedErrors: false, // use unified error messages (default false)
  passcodeFallback: false, // iOS - allows the device to fall back to using the passcode, if faceid/touch is not available. this does not mean that if touchid/faceid fails the first few times it will revert to passcode, rather that if the former are not enrolled, then it will use the passcode.
};

const Login = (props: LoginProps) => {
  const {signIn} = useContext(AuthContext);

  // handler to authenticate with touchId
  const _pressHandler = () => {
    TouchID.authenticate(
      'Scan your Fingerprint on the device scanner to continue',
      optionalConfigObject,
    )
      .then(() => {
        signIn('dex@g.co', 'eurn48209ojsnsdj');
      })
      .catch((error: string) => {
        console.log(error, 'error');
      });
  };

 
  useEffect(() => {
    // check if device supports fingerPrint Auth
    TouchID.isSupported(optionalConfigObject)
      .then((biometryType) => {
        // Success code
        if (biometryType === 'FaceID') {
          console.log('FaceID is supported.');
        } else {
          console.log('TouchID is supported.');
        }
      })
      .catch((error) => {
        // Failure code
        console.log(error);
      });
  }, []);
  return (
    <View style={styles.container}>
      {/* <ImageBackground
        source={require('../../../assets/images/modified.png')}
        style={styles.image}> */}
        <Top />
        <LoginForm fingerAuth={_pressHandler} />
      {/* </ImageBackground> */}
    </View>
  );
};
export default Login;
