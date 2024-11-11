import React from 'react';
import {View, Image, Text} from 'react-native';
import {getStockLogoUrl, getTickerInitials} from '../utils';
import {stockLogoStyles} from '../styles/stock-logo.styles';
import {StockLogoProps} from '../types';

const StockLogo: React.FC<StockLogoProps> = ({ticker}) => {
  //   const logoUrl = getStockLogoUrl(ticker);

  //   if (logoUrl) {
  //     return <Image source={{uri: logoUrl}} style={stockLogoStyles.logo} />;
  //   }

  return (
    <View style={stockLogoStyles.placeholder}>
      <Text style={stockLogoStyles.placeholderText}>
        {getTickerInitials(ticker)}
      </Text>
    </View>
  );
};

export default StockLogo;
