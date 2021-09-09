import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

const Styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 17,
    color: Colors.Text,
  },
  textContainer: {
    alignItems: 'flex-start',
    marginLeft: '9%',
    marginTop: '15%',
    marginBottom: '3%',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default Styles;
