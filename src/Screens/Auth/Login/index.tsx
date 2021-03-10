import React, {useState, useEffect, useContext} from 'react';
import {View} from 'react-native';
import FingerprintScanner from 'react-native-fingerprint-scanner';
import {AuthContext} from '../../../context/authContext';
import {styles} from './styles';
import LoginForm from './LoginForm';
import Top from './top';
interface LoginProps {}

const Login = (props: LoginProps) => {
  console.log(FingerprintScanner, 'FingerprintScanner');
  const [biometryType, setBiometryType] = useState<any>(null);
  const {signIn} = useContext(AuthContext); 
  const getMessage = () => {
    if (biometryType == 'Face ID') {
      return 'Scan your Face on the device to continue';
    } else {
      return 'Scan your Fingerprint on the device scanner to continue';
    }
  };
  const showAuthenticationDialog =  () => {
    if (biometryType !== null && biometryType !== undefined) {
      FingerprintScanner.authenticate({
        description: getMessage(),
      })
        .then(async() => {
          signIn("dex@g.co", 'eurn48209ojsnsdj');
          console.log('object')
        })
        .catch((error) => {
          console.log('Authentication error is => ', error);
        });
    } else {
      console.log('biometric authentication is not available');
    }
  };
  useEffect(() => {
    FingerprintScanner.isSensorAvailable()
      .then((biometryType) => {
        setBiometryType(biometryType);
      })
      .catch((error) => console.log('isSensorAvailable error => ', error));
  }, []); 
  return (
    <View style={styles.container}>
      <Top />
      <LoginForm fingerAuth={showAuthenticationDialog} />
    </View>
  );
};

export default Login;
