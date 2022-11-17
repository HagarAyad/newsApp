import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '~theme';

const THUMBNAIL_SIZE = 0.2 * Dimensions.get('window').width;

export const articleStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    marginVertical: 5,
    padding: 10,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  infoContainer: {
    width: '70%',
  },
  thumbnail: {
    height: THUMBNAIL_SIZE,
    width: THUMBNAIL_SIZE,
  },
  title: {
    fontWeight: 'bold',
  },
});

export const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: colors.black,
  },
});
