import React from 'react';
import { WebView } from 'react-native-webview';

 interface Props {
   route: any
 }
const index: React.FC<Props> = ({route}) => {

  console.log(route)
  const {uri} = route.params
  return (
    <WebView source={{ uri }} androidHardwareAccelerationDisabled />
  )
}
export default index;