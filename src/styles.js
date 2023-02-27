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
  items: {
    backgroundColor: '#121212',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  header: {
    marginLeft: 10,
    width: 80,
  },
  text: {
    color: '#fff',
  },
  image: {
    width: 25,
    height: 25,
  },
  textHeader:{
      fontSize:11
  },
  heading: {
    paddingLeft:50,
    width: 90,
  },
  headerItems: {
    backgroundColor: '#121212',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default styles;
