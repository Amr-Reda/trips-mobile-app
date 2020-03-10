import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  Alert
} from 'react-native';
// import {signin} from '../http'

export default class HomeView extends Component {
        
  constructor(props) {
    super(props);

    //TODO: prevent app from go back
    if (!props.route.params || !props.route.params.token) {
        props.navigation.navigate({name: 'SignIn'})
        return 
    }
    state =   {
      token   : props.route.params.token,
      name: props.route.params.name
    }
  }

  logout = async () => {
    this.setState({})
    this.props.navigation.navigate({name: 'SignIn'})
    return
  }

  render() {
    return (
      <View style={styles.container}>
          <Text>Hello {state.name} !</Text>
          <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]} onPress={() => this.logout()}>
          <Text style={styles.signUpText}>Logout</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    // backgroundColor: '#00b5ec',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  signupButton: {
    backgroundColor: "#0000FF"
  },
  signUpText: {
    color: 'white',
  }
});