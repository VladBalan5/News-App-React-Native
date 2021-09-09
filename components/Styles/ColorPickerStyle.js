import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

const Styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    width: 65,
    height: 65,
    margin: 10,
    padding: 10,
    borderRadius: 5,
    borderColor: Colors.Unselected,
    borderWidth: 3,
  },
});

export default Styles;
