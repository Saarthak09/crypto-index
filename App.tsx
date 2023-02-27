import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './src/styles'
import CoinItem from './src/components/Coinitem';

export type Coin = {
  name: string;
  symbol: string;
};

const App = () => {
  const [coins, setCoins] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const loadData = async () => {
    const res = await fetch(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=10&page=1&sparkline=false',
    );
    const data = await res.json();
    console.log('data: ', data);
    setCoins(data);
  };
  useEffect(() => {
    loadData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>crypto</Text>
      <FlatList
        data={coins}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <CoinItem coin={item} />}
        refreshing={refreshing}
        onRefresh={async () => {
          setRefreshing(true);
          await loadData();
          setRefreshing(false);
        }}
      />
    </View>
  );
};

export default App;
