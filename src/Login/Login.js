import React from "react";
import { AppRegistry, Alert, View, StyleSheet } from "react-native";
import { Container, Content, Header, Left, Body, Title, Card, CardItem, Right, Icon, Button, Text, Form, Item, Input, Label } from "native-base";
import { StackNavigator } from "react-navigation";
import { tryLogin } from './Startup';
export default class Profile extends React.Component {
  constructor(props){
    super(props);
    this.state = {
	  	isLoggedIn : false,
	  	usernameTextBox : '',
	  	passwordTextBox : '',
	  }
  }
  componentDidMount() {
	fetch('https://auth.butane33.hasura-app.io/v1/login', {
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
  
  handleLoginPressed = async () => {
    let resp = await tryLogin(this.state.usernameTextBox, this.state.passwordTextBox);
    if(resp.status !== 200){
      if (resp.status === 504) {
        Alert.alert("Network Error", "Check your internet connection" )
      } else {
        Alert.alert("Error", "Unauthorized, Invalid username or password")      
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
	       <Title>Log in</Title>
	      </Body>
	      <Right />
	    </Header>
		<Content>
		  <Form>
            <Item floatingLabel>
              <Label>Username:</Label>
              <Input value={this.state.usernameTextBox} />
            </Item>
            <Item floatingLabel last>
              <Label>Password:</Label>
              <Input value={this.state.passwordTextBox}/>
            </Item>
          </Form>
		  <Button block title="Log in" onPress={this.handleLoginPressed} >
            <Text> Log in </Text>
          </Button>
	    </Content>
	  </Container>
	);
  }
}


	
		