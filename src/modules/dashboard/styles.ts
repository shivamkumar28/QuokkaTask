import { StyleSheet } from 'react-native';
import { colors } from '../../constant';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  imageContainer: {
    alignSelf: 'center',
    width: 300,
    height: 300,
    overflow: 'hidden',
    borderRadius: 12,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  list: { marginTop: 26 },
  effectButton: {
    height: 60,
    padding: 16,
    backgroundColor: '#ddd',
    borderRadius: 8,
    marginRight: 10,
    justifyContent: 'center',
  },
  selectedButton: {
    backgroundColor: '#aaa',
  },
  saveButton: {
    marginTop: 30,
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
});
