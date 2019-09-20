import React from 'react';
import {View,Text} from 'react-native';
const Greeting = ({name}) => {
  let greetingString = `hello ${name} welcome to react-native`;
  return (
    <View>
      <Text>{greetingString}</Text>
    </View>
  );
};

const MultipleGreetings = () => {

    return (
    <View style={{alignItems:'center'}}>
      <Greeting name="mohamed" />
      <Greeting name="ali" />
    </View>
  );
};

export default MultipleGreetings;
