import React, { Component } from 'react'
import { Width, Height } from './consts';
import { View, TextInput, Text, ScrollView, TouchableOpacity, Image, sty } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
export class HorizontalScrollView extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <ScrollView
                horizontal={true}
                pagingEnabled
                showsHorizontalScrollIndicator
            >
                <View style={{width:Width,flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'yellow'}}>
                    <Text style={{fontSize:Width*.2,color:'black'}}>screen 1</Text>
                </View>
                <View style={{width:Width,flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'gray'}}>
                    <Text style={{fontSize:Width*.2,color:'green'}}>screen 2</Text>
                </View>
                 <View style={{width:Width,flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'red'}}>
                    <Text style={{fontSize:Width*.2,color:'white'}}>screen 3</Text>
                </View>
            </ScrollView>
        )
    }
}

export default HorizontalScrollView
