import React, { Component } from 'react';
import { ActivityIndicator, ListView, Text, View } from 'react-native';

export default class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  let requestOptions = {
    "method": "POST",
    "headers": {
      "Content-Type":"application/json"
    }
  };

  let body = {
    "searchInput" : "Mumbai"
  };

  requestOptions["body"] = JSON.stringify(body);
  componentDidMount() {
    return fetch('https://app.butane33.hasura-app.io/search/', requestOptions)
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson.restaurantList),
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
      <View style={{flex: 1, paddingTop: 20}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData.restaurant_name}</Text>}
        />
      </View>
    );
  }
}