import React from 'react';
import {View, Text} from 'react-native';
import {StockCardProps} from '../types';
import {stockCardStyles} from '../styles/stock-card.styles';
import StockLogo from './stock-logo';

const StockCard: React.FC<StockCardProps> = ({ticker, name}) => {
  return (
    <View style={stockCardStyles.card}>
      <StockLogo ticker={ticker} />
      <Text style={stockCardStyles.ticker}>{ticker}</Text>
      <Text style={stockCardStyles.name} numberOfLines={1} ellipsizeMode="tail">
        {name}
      </Text>
    </View>
  );
};

export default StockCard;
