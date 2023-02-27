import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from '../styles';

const CoinItem = ({coin}) => (
  <View style={styles.items}>
    <View>
      <Image source={{uri: coin.image}} style={styles.image} />
    </View>
    <View style={styles.header}>
      <Text>
        <Text style={styles.text}>{coin.name}</Text>
      </Text>
    </View>
    <View style={styles.header}>
      <Text style={styles.text}>₹{coin.current_price}</Text>
    </View>
    <View style={styles.header}>
      <Text style={styles.text}>{coin.price_change_24h.toFixed(2)}</Text>
    </View>
    <Text style={styles.text}>
      {coin.price_change_percentage_24h.toFixed(2)}%
    </Text>
  </View>
);

export default CoinItem;
