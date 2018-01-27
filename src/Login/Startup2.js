import React from "react";
import { AppRegistry, View, Image } from "react-native";
import { Container, Content, Header, Left, Right, Icon, Button, Text, Card, Thumbnail } from "native-base";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
export default class Startup extends React.Component {
  render() {
	return (
	  <Container>
	    <Header style={{backgroundColor: "white"}} />
	    <Content>
		  <Image source={require('./Sarcasm.png')} style={{position: "relative" , width: 359, height: 200}} />
		  <Image source={require('./Sarcasm.png')} style={{position: "absolute", width: 150, height: 150, top: 70, left: 100}} />
		</Content>
	  </Container>
	)
  }
}
	  