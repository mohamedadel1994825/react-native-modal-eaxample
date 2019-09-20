import { TextApp } from './components/TextApp';
import React from 'react';
import {View} from 'react-native'
import Robot from './components/Robot';
import MultipleGreetings from './components/MultipleGreetings';
import HelloWorld from './components/HelloWorld';
const App1 = () => {
    return (
        <View  style={{alignItems:'center',justifyContent:'center',width:'100%',height:'100%',backgroundColor:'blue'}}>
            {/* <Robot/>
            <MultipleGreetings/>
            <HelloWorld/> */}
            <TextApp/>
        </View>
    );
}

export default App1;