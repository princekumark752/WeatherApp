import React, { FC } from 'react';
import { TextInput, StyleSheet, View } from 'react-native';

interface Props {
  value: string;
  onChange: (text: string) => void;
  onSubmit: () => void;
}

const SearchBar: FC<Props> = ({ value, onChange, onSubmit }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter city name"
        value={value}
        onChangeText={onChange}
        onSubmitEditing={onSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 10 },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 8,
  },
});

export default SearchBar;
