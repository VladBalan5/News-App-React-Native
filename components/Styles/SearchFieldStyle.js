import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

const Styles = StyleSheet.create({
  icon: {
    paddingLeft: '5%',
  },
  image: {
    tintColor: Colors.Search,
  },
  search: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: Colors.Search,
    borderRadius: 5,
    borderWidth: 1,
    marginTop: '5%',
    marginBottom: '10%',
  },
  input: {
    height: 50,
    width: 260,
    padding: 15,
    fontSize: 15,
    borderRadius: 10,
    backgroundColor: 'white',
    color: Colors.SearchText,
  },
});

export default Styles;
