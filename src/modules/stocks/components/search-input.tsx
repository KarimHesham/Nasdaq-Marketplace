import React, {useState} from 'react';
import {TextInput, View} from 'react-native';
import {debounce} from '../utils';
import {useStocks} from '../hooks/stocks-context.hook';
import {searchInputStyles} from '../styles/search-input.styles';

const SearchInput: React.FC = () => {
  const {setSearchTerm} = useStocks();
  const [inputValue, setInputValue] = useState('');

  const debouncedSetSearchTerm = debounce((text: string) => {
    setSearchTerm(text);
  }, 500);

  const handleInputChange = (text: string) => {
    setInputValue(text);
    debouncedSetSearchTerm(text);
  };

  return (
    <View style={searchInputStyles.container}>
      <TextInput
        style={searchInputStyles.input}
        placeholder="Search for stocks..."
        placeholderTextColor="#aaa"
        value={inputValue}
        onChangeText={handleInputChange}
      />
    </View>
  );
};

export default SearchInput;
