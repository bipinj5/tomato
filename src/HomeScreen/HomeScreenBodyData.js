import React from "react";
import { Statusbar, View, StyleSheet } from 'react-native';
import { Container, Header, Title, Left, Icon, Right, Button, Body, Text, Card, Form, Item, Input } from 'native-base';
import HTMLView from "react-native-htmlview";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import FeatherIcon from "react-native-vector-icons/Feather";

export default class HomeScreenBodyData extends React.Component {
  render() {
    let restaurants = this.props.data.map(function(restaurantData, index){
	    return (
	      <Card>
		    <CardItem>
		      <Text>{this.restaurantData.restaurant_id}</Text>
		      <Text>{this.restaurantData.restaurant_name}</Text>
		      <Thumbnail source={this.restaurantData.restaurant_image_url} />
		      <Text>{this.restaurantData.state}</Text>
		    </CardItem>
	      </Card>
        );
    });
  }
}

module.export = HomeScreenBodyData;