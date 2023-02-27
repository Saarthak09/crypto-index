import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from '../styles'

const CoinItem = ({coin}) => (
  <View style={styles.containerItem}>
    <View style={styles.coinName}>
      <Image source={{uri: coin.image}} style={styles.image} />
      <View style={styles.containerNames}>
        <Text style={styles.text}>{coin.name}</Text>
      </View>
    </View>
    <View style={styles.containerNames}>
      <Text style={styles.textPrice}>₹{coin.current_price}</Text>
    </View>
    <View style={styles.containerNames}>
      <Text>{coin.price_change_percentage_24h.toFixed(2)}%</Text>
    </View>
    <Text>{coin.price_change_24h.toFixed(2)}</Text>
  </View>
);


export default CoinItem;
