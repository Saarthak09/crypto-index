import {View, Text} from 'react-native'
import styles from '../styles';

const Header = () => {
  return (
    <View>
      <Text style={styles.title}>Crypto Index</Text>
      <View style={styles.headerItems}>
        <View style={styles.heading}>
          <Text>
            <Text style={styles.textHeader}>Name</Text>
          </Text>
        </View>
        <View style={styles.heading}>
          <Text style={styles.textHeader}>Price</Text>
        </View>
        <View style={styles.heading}>
          <Text style={styles.textHeader}>24h Change</Text>
        </View>
        <View style={styles.heading}>
          <Text style={styles.textHeader}>24h % Change</Text>
        </View>
      </View>
    </View>
  );
};



export default Header;