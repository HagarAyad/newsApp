import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '~theme';

const THUMBNAIL_SIZE = 0.6 * Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {
    padding: 15,
    alignItems: 'center',
  },
  image: {
    alignSelf: 'center',
    height: THUMBNAIL_SIZE,
    width: THUMBNAIL_SIZE,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  by: {
    fontWeight: 'bold',
  },
});
