import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#141414',
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: '#fff',
    marginTop: 10,
  },
  containerItem: {
    backgroundColor: '#121212',
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  containerNames: {
    marginLeft: 10,
    width: 80,
  },
  coinName: {
    flexDirection: 'row',
  },
  text: {
    color: '#fff',
  },
  textPrice: {
    color: '#fff',
    fontWeight: 'bold',
  },
  image: {
    width: 30,
    height: 30,
  },
});

export default styles;
