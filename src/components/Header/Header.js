
import React from 'react';
import { Text, View } from 'react-native';

const Header = () => {
  const { textStyle } = styles;
  const { viewStyle } = styles;
  const { textStyle2 } = styles;


  return (
    <View style={viewStyle}>

      <Text style={textStyle}> beavers </Text>
      <Text style={textStyle2}> work </Text>

    </View>

  );
};


const styles = {
  Text: {
    color: 'black'
  },
  textStyle: {
    color: 'white',
    fontSize: 40,
    marginTop: 25,
  },
  textStyle2: {
    width: 50,
    color: 'black',
    fontSize: 80,
    marginTop: 55,
    display: 'none'
  },
  viewStyle: {
    backgroundColor: '#dd0a39',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  viewStyle2: {
    backgroundColor: 'red'
  }
};

export default Header;
