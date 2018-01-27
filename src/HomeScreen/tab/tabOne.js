import React, { Component } from "react";
import { Statusbar, Image, StyleSheet } from 'react-native';
import { Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from "native-base";
import IonIcon from "react-native-vector-icons/Ionicons";
import EvilIcon from "react-native-vector-icons/EvilIcons";
import FeatherIcon from "react-native-vector-icons/Feather";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import OctiIcon from "react-native-vector-icons/Octicons";
export default class TabOne extends Component {
  render() {
    return (
      <Content padder>
        <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require('../react/Sarcasmtn.png')} />
			  </Left>
              <Text>  Sarcasm <OctiIcon name="verified" style={{ color: "#00aced" }} />
                <Text note> @Sarcasm 30m</Text>
			  </Text>
			  <Right>
                <IonIcon name="ios-arrow-down" style={{ fontSize: 24, color: "grey" }} />
              </Right>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('../react/Sarcasm.png')} style={{height: 336, width: 336}}/>
            </CardItem>
            <CardItem style={{ flex: 1, justifyContent: 'space-between'}}>
              <Button transparent>
                <FontAwesomeIcon active name="comment-o" style={{ fontSize: 26, color: "grey" }}/>
                <Text>450</Text>
              </Button>
			  <Button transparent>
                <EvilIcon name="retweet" style={{ fontSize: 40, color: "grey", fontWeight: "bold" }} />
                <Text>270</Text>
              </Button>
			  <Button transparent>
                <FontAwesomeIcon active name="heart-o" style={{ fontSize: 26, color: "grey" }} />
                <Text>500</Text>
              </Button>
			  <Button transparent>
                <FeatherIcon name="mail" style={{ fontSize: 26, color: "grey" }} />
              </Button>
            </CardItem>
          </Card>
		  <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require('../react/theidealist.png')} />
			  </Left>
              <Text>  Idealist <OctiIcon name="verified" style={{ color: "#00aced" }} />
                <Text note> @Idealist 1hr</Text>
			  </Text>
			  <Right>
                <IonIcon name="ios-arrow-down" style={{ fontSize: 24, color: "grey" }} />
              </Right>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('../react/Idealist.png')} style={{height: 330, width: 338}}/>
            </CardItem>
            <CardItem style={{ flex: 1, justifyContent: 'space-between'}}>
              <Button transparent>
                <FontAwesomeIcon active name="comment-o" style={styles.buttsty}/>
                <Text>653</Text>
              </Button>
			  <Button transparent>
                <EvilIcon name="retweet" style={{ fontSize: 40, color: "grey", fontWeight: "bold" }} />
                <Text>190</Text>
              </Button>
			  <Button transparent>
                <FontAwesomeIcon active name="heart-o" style={styles.buttsty} />
                <Text>337</Text>
              </Button>
			  <Button transparent>
                <FeatherIcon name="mail" style={{ fontSize: 26, color: "grey" }} />
              </Button>
            </CardItem>
          </Card>
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  buttsty: {
	fontSize: 26, 
	color: "grey"
  }
});
	
