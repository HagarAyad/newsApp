import {StyleSheet} from 'react-native';
import {colors} from '~theme';

export const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  circle: {
    height: 14,
    width: 14,
    borderRadius: 7,
    backgroundColor: colors.green,
  },
  langContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
});
