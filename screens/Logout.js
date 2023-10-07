import React from 'react'
import{View,Text} from 'react-native'

export default class Logout extends React.Component{
    componentDidMount()
    {
        firebase.auth().signOut()
        this.props.navigation.replace("Login")
    }
    render(){
        return(
            <View>
            <Text>Logout</Text>
            </View>
        )
    }
}