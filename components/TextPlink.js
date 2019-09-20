import { View, Text,StyleSheet } from 'react-native';
import React, { Component } from 'react';
class Plink extends Component {
    constructor(props) {
        super(props);
        this.state = { showText: 'true' };

        let todoTask = () => {
            this.setState((prevState) => {
                return {
                    showText: !prevState.showText
                }
            })
        }
        const timePlink = 500;
        setInterval(todoTask, timePlink);
    }
    render() {
        let { inputText } = this.props;
        let textToDisplay = this.state.showText ? inputText : '';

        return (
            <Text >
                {textToDisplay}

            </Text>
        );
    }
}

class TextPlink extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Plink  inputText='HELLO MOHAMED' />
                <Plink   inputText='im happy' />
            </View>
        );
    }
}
const styles=StyleSheet.create({
    container:{
        display:'flex',
        flex:1,
        backgroundColor:'green',
        justifyContent:'center',
        alignItems:'center'
    }
})
export default TextPlink;