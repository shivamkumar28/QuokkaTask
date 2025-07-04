import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { LoaderProps } from './interface';
import { colors } from '../../constant';

const Loader = (props: LoaderProps) => {
  const { show, size, color } = props;

  if (!show) {
    return null;
  }

  return (
    <View
      style={[
        StyleSheet.absoluteFillObject,
        {
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#00000060',
        },
      ]}
    >
      <ActivityIndicator size={'large'} color={colors.black} />
    </View>
  );
};
export default Loader;
