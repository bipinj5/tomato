import React, { Component } from 'react';
import Startup from '../Login/Startup.js';
import Signup from '../Login/Signup.js';
import Login from '../Login/Login.js';
import HomeScreen from './HomeScreen.js';
import { DrawerNavigator } from 'react-navigation';
import SideBar from '../SideBar/SideBar.js';
import Profile from '../ProfileScreen/index.js';
import About from '../About/index.js';
import Add from '../AddRestaurant/index.js';
const HomeScreenRouter = DrawerNavigator(
  {
	Startup: { screen: Startup },
	Signup: { screen: Signup },
	Login: { screen: Login },
	Home: { screen: HomeScreen },
	Profile: { screen: Profile },
	About: { screen: About },
	Add: { screen: Add }
  },
  {
	contentComponent: props => <SideBar {...props} />
  }
);
export default HomeScreenRouter;
	