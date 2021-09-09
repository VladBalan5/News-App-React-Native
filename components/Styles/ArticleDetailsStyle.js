import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 530,
    paddingHorizontal: 17,
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 10,
    margin: 27,
    marginTop: 75,
    marginBottom: 180,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    top: -50,
    borderColor: 'white',
    borderWidth: 10,
  },
  title: {
    top: -30,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    color: Colors.Text,
  },
  author: {
    top: -10,
    alignSelf: 'flex-start',
    color: Colors.Author,
  },
  line: {
    borderBottomColor: '#DCDCDC',
    borderBottomWidth: 3,
    width: 100,
    top: 10,
  },
  description: {
    top: 30,
    color: Colors.Text,
    paddingTop: 10,
  },
});

export default Styles;
