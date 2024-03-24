import { useRef, useState } from 'react';
import {
  StyleSheet,
  ActivityIndicator,
  SafeAreaView,
  TouchableOpacity,
  Image,
  View
} from 'react-native';
import { useCameraDevice } from 'react-native-vision-camera';
import { Camera } from 'react-native-vision-camera';
import { customStyles } from '../../assets/styling/customStyling';


export default function CameraScreen() {
  const [cameraType, setCameraType] = useState('back');
  const device = useCameraDevice(cameraType);
  const [imageData, setImageData] = useState('');
  const cameraRef = useRef(null);

  const handleSwitchCamera = () => {
    if (cameraType == 'back') {
      setCameraType('front')
    } else {
      setCameraType('back')
    }
  }

  const takePicture = async () => {
    try {
      const photo = await cameraRef.current.takePhoto();
      setImageData(photo);
    }
    catch (error) {
      console.log('value of error is', error)
    }
  }

  if (device == null) { return (<ActivityIndicator style={customStyles.activityInd} />) }

  return (
    <SafeAreaView style={customStyles.container}>
      {
        imageData ?
          <View style={{ flex: 1 }}>
            <Image source={{ uri: `file://+${imageData.path}` }} style={{ height: '100%', width: '100%' }} />
            <TouchableOpacity onPress={() => setImageData('')} activeOpacity={0.9} style={{ position: 'absolute', top: 20, left: 20, backgroundColor: "lightgrey", height: 40, width: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 5 }}>
              <Image style={{ height: 20, width: 20 }} source={require('../../assets/icons/arrowLeft.png')} />
            </TouchableOpacity>
          </View>
          :
          <>
            <Camera
              ref={cameraRef}
              style={StyleSheet.absoluteFill}
              device={device}
              photo={true}
              isActive={true}
            />
            <TouchableOpacity onPress={handleSwitchCamera} activeOpacity={0.9} style={customStyles.switchCamera}>
              <Image source={require('../../assets/icons/cameraLogo.png')} style={customStyles.switchCameraIcon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={takePicture} activeOpacity={0.9} style={customStyles.captureBtn} />
          </>
      }
    </SafeAreaView>
  )
}