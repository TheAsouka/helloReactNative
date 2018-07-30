import React, { Component } from 'react';
import { StyleSheet, Text, View, AppRegistry, Image } from 'react-native';

class Mercos extends Component{
  render(){
    let img = {
      uri: 'https://www.motorlegend.com/images-voiture/hd/mercedes-classe-gla-45-amg-4matic-381-ch-113337.jpg'
    };
    return (
      <Image source={img} style={{ width: 370, height: 200 }} />
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Mercos/>
        <Text>On sort le merco, vous êtes jaloux !</Text>
      </View>      
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bcbcbc',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
