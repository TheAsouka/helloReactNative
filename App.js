import React, { Component } from 'react';
import { StyleSheet, Text, View, AppRegistry, Image } from 'react-native';

class Merco extends Component{
  render(){
    let img = {
      uri: 'https://www.motorlegend.com/images-voiture/hd/mercedes-classe-gla-45-amg-4matic-381-ch-113337.jpg'
    };
    return (
      <Image source={img} style={{ width: this.props.width, height: this.props.height }} />
    );
  }
}

class DescriptionVoiture extends Component{
  render(){
    return (
      <Text style={{color: '#5342f4'}}>Ceci est un {this.props.name} !</Text>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Merco width={350} height={200}/>

        <Text>On sort le merco, vous êtes jaloux !</Text>
        <DescriptionVoiture name="GLA45 AMG 4Matic"/>

        <Merco width={35} height={20}/>
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
