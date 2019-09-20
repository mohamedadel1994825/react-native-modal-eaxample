import { Width, Height, MyColors } from './consts';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modalbox'
import FlatListData from './FlatListData'
import React, { Component } from 'react'

export class AddModal extends Component {

    constructor(props) {
        super(props)
        this.state = {
            newFoodName: '',
            newFoodDescription: ''
        }
    }
    showModal = () => {
        this.refs.myModal.open()
    }
    hideModal = () => {
        this.refs.myModal.close()
    }
    generateKey = (noOfCharacters) => {
        return require('random-string')({ length: noOfCharacters })

    }

    render() {
        const { newFoodName, newFoodDescription } = this.state
        const foodInput =  newFoodName.length == 0 || newFoodDescription.length == 0
        return (
            <Modal
                // isDisabled={true}
                // isOpen	={false}
                ref={'myModal'}
                style={{
                    width: Width * .68, height: Width * .7, justifyContent: 'center', alignItems: 'center',
                    borderRadius: Width * .05,
                }}
                posiion='center'
                backdrop={true}
            // onClosed={alert('moadal closed')}
            >
                <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: Width * .041 }}>new food information text</Text>
                <TextInput
                    style={{
                        width: Width * .6, height: Width * .1, color: 'gray'
                        , borderBottomColor: 'balck', borderBottomWidth: Width * .005
                    }}
                    placeholder='enter your food name'
                    value={this.state.newFoodName}
                    onChangeText={(text => { this.setState({ newFoodName: text }) })}
                />
                <TextInput
                    style={{
                        width: Width * .6, height: Width * .1, color: 'gray'
                        , borderBottomColor: 'balck', borderBottomWidth: Width * .005,
                    }}
                    placeholder='enter your food Description'
                    value={this.state.newFoodDescription}
                    onChangeText={(text => { this.setState({ newFoodDescription: text }) })}
                />
                <TouchableOpacity
                    activeOpacity={.9}
                    style={{
                        backgroundColor: MyColors.greenColor1, width: Width * .2
                        , height: Width * .1, borderRadius: Width * .01, marginTop: Width * .1
                        , justifyContent: 'center', alignItems: 'center'

                    }}
                    //newFoodName.length == 0 || newFoodDescription.length == 0
                    // alert('you must enter food name and description')
                    onPress={
                      ()=>{
                        foodInput?
                        alert('you must enter food name and description') 
                        :
                        this.hideModal()
                      
                     
                      }
                    

                    }
                >
                    <Text style={{ textAlign: 'center', color: 'white' }}>Save</Text>
                </TouchableOpacity>
            </Modal>
        )
    }
}

export default AddModal