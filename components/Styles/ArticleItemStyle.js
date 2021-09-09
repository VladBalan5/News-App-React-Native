import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

const Styles = StyleSheet.create({
  item: {
    borderRadius: 10,
    marginLeft: '5%%',
    marginRight: '5%',
    overflow: 'hidden',
  },
  article: {
    backgroundColor: 'white',
    flexDirection: 'row',
    width: '100%',
    marginBottom: 15,
    borderRadius: 5,
    alignItems: 'center',
    paddingLeft: 15,
    paddingVertical: 10,
  },
  image: {
    width: 65,
    height: 65,
    borderRadius: 3,
  },
  container: {
    paddingVertical: 10,
    marginLeft: 20,
    paddingRight: 10,
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: 240,
  },
  title: {
    fontWeight: 'bold',
    color: Colors.Text,
  },
  author: {
    color: Colors.Author,
    paddingTop: 10,
  },
});

export default Styles;
