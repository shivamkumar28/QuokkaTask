import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  PermissionsAndroid,
  Platform,
  Alert,
} from 'react-native';
import {
  Grayscale,
  Sepia,
  Invert,
  Brightness,
} from 'react-native-color-matrix-image-filters';
import { captureRef } from 'react-native-view-shot';
import { CameraRoll } from '@react-native-camera-roll/camera-roll';
import { styles } from './styles';
import { Loader } from '../../components';
import { images } from '../../constant';

const effects = [
  { id: 'original', label: 'Original' },
  { id: 'grayscale', label: 'Grayscale' },
  { id: 'sepia', label: 'Sepia' },
  { id: 'invert', label: 'Invert' },
  { id: 'brightness', label: 'Bright' },
];
const Dashboard = () => {
  const [selectedEffect, setSelectedEffect] = useState('original');
  const [loading, setLoading] = useState(false);
  const viewRef = useRef(null);

  const requestStoragePermission = async () => {
    if (Platform.OS === 'android' && Platform.Version < 29) {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    }
    return true;
  };

  const saveImage = async () => {
    const hasPermission = await requestStoragePermission();
    if (!hasPermission) {
      console.warn('Permission denied');
      return;
    }
    try {
      setLoading(true);
      const uri = await captureRef(viewRef, {
        format: 'png',
        quality: 1,
      });
      await CameraRoll.save(uri, { type: 'photo' });
      setLoading(false);
      Alert.alert('Alert', `File save to ${uri}`);
    } catch (e) {
      console.error(e);
    }
  };

  const renderImage = () => {
    const img = (
      <Image source={images.gokuImg} style={styles.image} resizeMode="cover" />
    );

    switch (selectedEffect) {
      case 'grayscale':
        return <Grayscale>{img}</Grayscale>;
      case 'sepia':
        return <Sepia>{img}</Sepia>;
      case 'invert':
        return <Invert>{img}</Invert>;
      case 'brightness':
        return <Brightness amount={1.5}>{img}</Brightness>;
      default:
        return img;
    }
  };

  return (
    <View style={styles.container}>
      <View collapsable={false} ref={viewRef} style={styles.imageContainer}>
        {renderImage()}
      </View>

      <FlatList
        data={effects}
        horizontal
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.effectButton,
              selectedEffect === item.id && styles.selectedButton,
            ]}
            onPress={() => setSelectedEffect(item.id)}
          >
            <Text>{item.label}</Text>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity style={styles.saveButton} onPress={saveImage}>
        <Text style={{ color: '#fff' }}>Save to Gallery</Text>
      </TouchableOpacity>

      <Loader show={loading} />
    </View>
  );
};

export default Dashboard;
