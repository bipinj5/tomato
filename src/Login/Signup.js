import React from "react";
import { AppRegistry, Alert, View, StyleSheet } from "react-native";
import { Container, Content, Header, Left, Body, Title, Card, CardItem, Right, Icon, Button, Text, Form, Item, Input, Label } from "native-base";
import { StackNavigator } from "react-navigation";
import { trySignup } from './Startup';
export default class Profile extends React.Component {
  constructor(props){
    super(props);
    this.state = {
	  	isLoggedIn : false,
	  	usernameTextBox : 'nilesh',
	  	passwordTextBox : '1234567890',
	  }
  }
	
  componentDidMount() {
	fetch('https://app.butane33.hasura-app.io/v1/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "username": '',
        "password": '',
      }),
    });
  }
  
  handleSignupPressed = async () => {
    let resp = await trySignup(this.state.usernameTextBox, this.state.passwordTextbox);
    if(resp.status !== 200){
      if (resp.status === 504) {
        Alert.alert("Network Error", "Check your internet connection" )
      } else {
        Alert.alert("Error", "Password too short / User already exists")      
      }
    } else {
      this.setState({isLoggedIn:true})  
    }
  }
  
  render() {
	return (
	  <Container>
	    <Header>
          <Left>
          <Button transparent onPress={() => this.props.navigation.navigate("Startup")}>
            <Icon name="md-arrow-back" />
          </Button>
	      </Left>
	      <Body>
	       <Title>Sign up</Title>
	      </Body>
	      <Right />
	    </Header>
		<Content>
		  <Form>
		    <Item floatingLabel>
              <Label>Name:</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Username:</Label>
              <Input value={this.state.usernameTextBox} />
            </Item>
            <Item floatingLabel>
              <Label>Password:</Label>
              <Input value={this.state.passwordTextBox} />
            </Item>
			<Item floatingLabel>
              <Label>Confirm password:</Label>
              <Input />
            </Item>
          </Form>
		  <Button block onPress={this.handleSignupPressed} >
            <Text> Sign up </Text>
          </Button>
	    </Content>
	  </Container>
	);
  }
}


	
		