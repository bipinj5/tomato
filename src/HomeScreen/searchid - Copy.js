import React from "react";
import { Statusbar, Alert, View, Image, StyleSheet, ActivityIndicator, ListView } from 'react-native';
import { Container, Header, Title, Left, Icon, Right, Button, Body, Text, Card, CardItem,
 Form, Item, Input } from 'native-base';
import { trySearch } from '../Login/Startup';
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import FeatherIcon from "react-native-vector-icons/Feather";

export default class RestaurantProfile extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
		data: [],
	  	searchTextBox : '',
		isLoading: true
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
  
  ListViewItemSeparator = () => {
   return (
     <View
       style={{
         height: .5,
         width: "100%",
         backgroundColor: "#000",
       }}
     />
   );
 }
 
componentDidMount() {
  fetch('https://app.butane33.hasura-app.io/getrestaurant/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
	  "restaurant_id": 4
	  })
  })
   .then((response) => response.json())
   .then((responseJson) => {
     let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
     this.setState({
        isLoading: false,
        dataSource: ds.cloneWithRows(responseJson.restaurant),
     }, function() {
          // do something with new state
     });
    })
    .catch((error) => {
      console.error(error);
    });
} 
  
  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }
	
	
  return (
    <View>
      <ListView
        dataSource={this.state.dataSource}
        renderSeparator= {this.ListViewItemSeparator}
        renderRow={(rowData) =>
	    <Card style={{flex:1, flexDirection: 'column'}}>
		  <Text>{rowData.cuisine.cuisine_name}</Text>
		  <Text note>{rowData.cuisine.restaurant_id}</Text>
		  <Text>{rowData.menu_count}</Text>
		  <Image source = {{ uri: rowData.menu.menu_url }} style={{width: 300, height: 350
	      }} />
		  <Text>{rowData.restaurant_details.address}</Text>
		  <Text note>{rowData.restaurant_details.country}</Text>
		  <Text>{rowData.restaurant_details.pincode}</Text>
		  <Text note>{rowData.restaurant_details.restaurant_name}</Text>
		  <Text>{rowData.restaurant_details.state}</Text>
		  <Image source = {{ uri: rowData.restaurant_view.view_image_url }} style={{width: 100, height: 100
	      }} />
		  <Text>{rowData.restaurant_view_count}</Text>
		  <Text note>{rowData.reviews.created}</Text>
		  <Text>{rowData.reviews.rating_stars}</Text>
		  <Text note>{rowData.reviews.review_text}</Text>
		  <Text>{rowData.reviews.user_id}</Text>
        </Card>
          }
      />
	</View>
  );
  }
}
