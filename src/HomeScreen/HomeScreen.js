import React from "react";
import { Statusbar, View, StyleSheet } from 'react-native';
import { Container, Header, Title, Left, Icon, Right, Button, Body, Text, Thumbnail, Tab, Tabs, TabHeading, ScrollableTab } from 'native-base';
import Tab1 from './tab/tabOne';
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import FeatherIcon from "react-native-vector-icons/Feather";
export default class HomeScreen extends React.Component {
  render() {
    return (
      <Container style={{paddingTop: 20}}>
	    <Header hasTabs style={{backgroundColor: "red"}}>
		  <Left>
		    <Button transparent
			  onPress={() => this.props.navigation.navigate("SideBar")}>
			  <Icon name="list" />
			</Button>
		  </Left>
		  <Text>SELECTED LOCATION</Text>
		  <Right>
		    <Button transparent>
			  <Icon name="search" />
			</Button>
	      </Right>
		</Header>
        <Tabs renderTabBar={()=> <ScrollableTab />}>
          <Tab heading={<TabHeading style={{backgroundColor: "white"}}><Icon name="pizza" /><Text style={{fontSize: 14, color: "green"}}>Delivery</Text></TabHeading>}>
			<Tab1 />
		  </Tab>
		  <Tab heading={<TabHeading style={{backgroundColor: "white"}}><Icon name="beer" /><Text style={{color: "green"}}>Cafes & More</Text></TabHeading>}>
	        <Tab1 />
		  </Tab>
		  <Tab heading={<TabHeading style={{backgroundColor: "white"}}><Icon name="beer" /><Text style={{color: "green"}}>Desserts & Bakes</Text></TabHeading>}>
	        <Tab1 />
		  </Tab>
		  <Tab heading={<TabHeading style={{backgroundColor: "white"}}><Icon name="moon" /><Text style={{color: "green"}}>Dining Out</Text></TabHeading>}>
		    <Tab1 />
		  </Tab>
		  <Tab heading={<TabHeading style={{backgroundColor: "white"}}><Icon name="beer" /><Text style={{color: "green"}}>Drinks & Nightlife</Text></TabHeading>}>
	        <Tab1 />
		  </Tab>
		  <Tab heading={<TabHeading style={{backgroundColor: "white"}}><Icon name="beer" /><Text style={{color: "green"}}>Collection</Text></TabHeading>}>
	        <Tab1 />
		  </Tab>
		</Tabs>
      </Container>
    );
  }
}

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
	