import { AddModal } from './AddModal';
import { Width, MyColors } from './consts';
import React, { Component } from 'react'
import { FlatList, View, Text, Image, TouchableOpacity } from 'react-native'
import FlatListData from './FlatListData'
import Icon from 'react-native-vector-icons/Ionicons';
class FlatListItem extends Component {
    render() {
        const { name, foodName, imageUrl } = this.props.item
        const { key1 } = this.props

        return (
            <View>
                <View style={{
                    width: Width, height: Width * .3,
                    backgroundColor: key1 % 2 == 0 ? 'green' : 'red',
                    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
                }} >
                    <Image
                        source={require('./images/chocolate.jpg')
                        }
                        style={{
                            width: Width * .25, height: Width * .25,
                            backgroundColor: 'white', borderRadius: Width * .12
                        }}
                    />
                    <View style={{ width: Width * .6, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: 'white', textAlign: 'center' }}>
                            {name}
                        </Text>
                        <Text style={{ color: 'white', textAlign: 'center' }}>
                            {foodName}
                        </Text>
                    </View>

                </View>

                <View style={{ height: 3, backgroundColor: 'white', width: Width }}></View>

            </View>

        )
    }
}


export class FlatListFood extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }
    _onPressAdd = () => {
        this.refs.addModal.showModal()

    }
    render() {


        return (
            <View style={{ flex: 1, alignItems: 'center' }}>
                <Image
                    source={require('./images/chocolate.jpg')}
                    style={{
                        position: 'absolute', top: 0, bottom: 0, right: 0, flex: 1,width:'100%',height:'100%'
                        , left: 0, backgroundColor: 'transparent'
                    }} />
                <View style={{
                    width: Width, height: Width * .17,
                    justifyContent: 'center', alignItems: 'flex-end', backgroundColor: MyColors.whiteRed
                }}>
                    <TouchableOpacity style={{ width: Width * .13 }}
                        activeOpacity={.9}
                        onPress={this._onPressAdd}
                    >
                        <Icon name="md-add-circle-outline" color="white" size={Width * .1}
                        />
                    </TouchableOpacity>

                </View>
                <FlatList
                    horizontal={true}
                    pagingEnabled
                    data={FlatListData}
                    keyExtractor={(item, index) => '' + index}
                    renderItem={({ item, index }) => {
                        return (
                            <FlatListItem
                                item={item}
                                key1={index}
                            />


                        )


                    }}

                />
                <AddModal ref={'addModal'}

                >

                </AddModal>
            </View>
        )
    }
}


export default FlatListFood
