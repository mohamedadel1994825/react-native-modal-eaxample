import { Width, Height } from './consts';
import { View, TextInput, Text, ScrollView, TouchableOpacity, Image, sty } from 'react-native';
import React, { Component } from 'react'

class TextApp extends Component {

    constructor(props) {
        super(props)
        this.state = {
            textTyped: '',
            passwordTyped: ''

        }
    }
    onChangeText = (text) => {
        this.setState(() => {
            return {
                textTyped: text
            }
        })

    }
    onChangePassword = (password) => {
        this.setState(() => {
            return {
                passwordTyped: password
            }
        })

    }
    _onPress = () => {

        alert('you pressed my')
    }

    render() {
        return (
            <ScrollView
             contentContainerStyle={{ width: Width, justifyContent: 'space-around', alignItems: 'center' }}
                keyboardDismissMode='on-drag'
              
            >
                <View style={{width: Width, justifyContent: 'space-around', alignItems: 'center'}}>
                <View style={{ width: Width * .89, height: Width * .5 ,margin:10}}>
                        <Image
                            source={require('./images/robot.jpg')}
                            style={{ width: '100%', height:'100%'}}
                        />
                    </View>
                     <View style={{ width: Width * .89, height: Width * .5 ,margin:10 }}>
                        <Image
                            source={require('./images/robot.jpg')}
                            style={{ width: '100%', height:'100%'}}
                        />
                    </View> 
                      <View style={{ width: Width * .89, height: Width * .5 ,margin:10 }}>
                        <Image
                            source={require('./images/robot.jpg')}
                            style={{ width: '100%', height:'100%'}}
                        />
                    </View> 
               
                
                        <TextInput
                            style={{ width: 350, height: 50, padding: 5, margin: 10, borderColor: 'gray', borderWidth: 1 ,margin:10 }}
                            placeholder='enter your passWord '
                            placeholderTextColor='gray'
                            keyboardType='default'
                            onChangeText={this.onChangePassword}
                            secureTextEntry
                        />
                        <TextInput
                            style={{ width: 350, height: 200, padding: 5, margin: 10, borderColor: 'gray', borderWidth: 1 ,margin:10 }}
                            placeholder='enter your  email '
                            placeholderTextColor='gray'
                            keyboardType='email-address'
                            multiline={true}
                        />
                        <TouchableOpacity
                            style={{
                                width: 200, height: 50, justifyContent: 'center',
                                alignItems: 'center', backgroundColor: 'green', borderRadius: 5, borderWidth: 2 ,margin:10
                            }}
                            activeOpacity={.95}
                            onPress={this._onPress}
                        >
                            <Text style={{ fontSize: 20, textAlign: 'center', color: "white" }}>Press Me</Text>
                        </TouchableOpacity>
                </View>
                    
            </ScrollView>

        )
    }
}

export default TextApp
