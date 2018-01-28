import React from "react";
import { Statusbar, View, StyleSheet } from 'react-native';
import { Container, Header, Title, Left, Icon, Right, Button, Body, Text, Card, Form, Item, Input } from 'native-base';
import { trySearch } from '../Login/Startup';
import HomeScreenBodyData from './HomeScreenBodyData.js';
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import FeatherIcon from "react-native-vector-icons/Feather";

export default class HomeScreen extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
		data: [],
	  	isLoggedIn : false,
	  	searchTextBox : '',
      	fontsAreLoaded: false,
	  }
  }	
  
  handleSearchPressed = async () => {
    let resp = await trySearch(this.state.searchTextBox);
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
  
  handleSearchChange = searchTextBox => {
  	this.setState({
  		...this.state,
  		searchTextBox: searchTextBox
  	})
  }
	
  getData(){
	async function trySearch(search) {
	  console.log('Making search query');
      let requestOptions = {
        "method": "POST",
        "headers": {
          "Content-Type":"application/json"
        }
      };

      let body = {
        "searchInput": search
      };

      requestOptions["body"] = JSON.stringify(body);
      console.log("Auth Response ---------------------");
  
      try {
        let resp = await fetch(searchUrl, requestOptions)
		.then((resp) => resp.json())
		.then((respJson) => {
	     this.setState({data: respJson.restaurantList})
		})
        console.log(resp);
      }
      catch(e) {
        console.log("Request Failed: " + e);
        return networkErrorObj;
      }
    }
  }
	
  componentDidMount() {
    this.getData();
  }
	
  render() {
    return (
	  <Container>
	    <Header style={{backgroundColor: "red"}}>
		  <Left>
		    <Button transparent
			  onPress={() => this.props.navigation.navigate("DrawerOpen")}>
			  <Icon name="list" />
			</Button>
		  </Left>
		    <Text>SELECTED LOCATION</Text>
		  <Right />
		</Header>
		<Card>
          <Form>
		    <Item>
		      <Input value={this.state.searchTextbox} onChangeText={this.handleSearchChange} placeholder="Search Here" />
			  <Button transparent onPress={this.handleSearchPressed}>
			    <Icon name="ios-search" />
			  </Button>
		    </Item>
		  </Form>
		</Card>
        <HomeScreenBodyData data = {this.state.data}/>
	  </Container>
    );
  }
}

module.export = HomeScreen;

const styles = StyleSheet.create({
  butt: {
	position: 'absolute',
	bottom: 50,
	backgroundColor: "#00aced"
  },
  tabIcons: {
	fontSize: 27, 
	color: "#00aced"
  }
});
	