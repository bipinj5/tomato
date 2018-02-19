for handling text:
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
  
current code for making request(it just returns response based on a fixed input and shows it in app):
componentDidMount() {
  fetch('https://app.butane33.hasura-app.io/search/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
	  "searchInput": "Kalyan"
	  })
  })
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

optional code for making requets(it returns respective response in console based on the input but not able to render anything in view):
trySearch(search) {
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
    let resp = await fetch(searchUrl, requestOptions);
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
  }
  catch(e) {
    console.log("Request Failed: " + e);
    return networkErrorObj;
  }
}