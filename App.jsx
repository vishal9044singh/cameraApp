import React, { useEffect } from 'react';
import { SafeAreaView, Button, Text } from 'react-native';
import CameraScreen from './src/screens/CameraScreen';

import { useCameraPermission } from 'react-native-vision-camera';

export default function App() {
  const { hasPermission, requestPermission } = useCameraPermission();

  useEffect(() => {
    if (!hasPermission) {
      requestPermission().then((permissionStatus) => {
        console.log("Permission status:", permissionStatus);
      }).catch((error) => {
        console.error("Error while requesting permission:", error);
      });
    }
  }, [hasPermission, requestPermission]);

  if (!hasPermission) {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>
        <Text>You have not given Camera permission!</Text>
        <Button onPress={requestPermission} title='Grant Permission' />
      </SafeAreaView>
    );
  } else {
    return (
      <CameraScreen />
    );
  }
}
