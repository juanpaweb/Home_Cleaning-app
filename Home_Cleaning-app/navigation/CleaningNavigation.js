import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator, DrawerItems } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import  Colors from '../constants/Colors';

import AuthScreen from '../screens/AuthScreen';
import AdminCheckListScreen from '../screens/Admin/AdminChecklistScreen';
import AdminDashScreen from '../screens/Admin/AdminDashScreen';
import AdminPropertiesScreen from '../screens/Admin/AdminPropertiesScreen';
import AdminUsersScreen from '../screens/Admin/AdminUsersScreen';

//Platform.OS === 'android' ? Colors.secondary : ''
const defaultNavOptions = {
	headerStyle: {
		backgroundColor: Colors.primary
	},
	headerTintColor: Platform.OS === 'android' ? 'white' : Colors.secondary
};

const AdminDashNavigator = createStackNavigator(
	{
		Dashboard: AdminDashScreen
	},
	{
		navigationOptions: {
			tabBarIcon: (tabInfo) => (
				<Ionicons
					size={23}
					color={tabInfo.tintColor}
					name={Platform.OS === 'android' ? 'md-dashboard' : 'ios-speedometer'}
				/>
			)
		},
		defaultNavigationOptions: defaultNavOptions
	}
);

const AdminPropertiesNavigator = createStackNavigator(
	{
		Properties: AdminPropertiesScreen
	},
	{
		navigationOptions: {
			tabBarIcon: (tabInfo) => (
				<Ionicons
					size={23}
					color={tabInfo.tintColor}
					name={Platform.OS === 'android' ? 'md-home' : 'ios-home'}
				/>
			)
		},
		defaultNavigationOptions: defaultNavOptions
	}
);

const AdminChecklistNavigator = createStackNavigator(
	{
		Checklist: AdminCheckListScreen
	},
	{
		navigationOptions: {
			tabBarIcon: (tabInfo) => (
				<Ionicons
					size={23}
					color={tabInfo.tintColor}
					name={Platform.OS === 'android' ? 'md-list-box' : 'ios-list-box'}
				/>
			)
		},
		defaultNavigationOptions: defaultNavOptions
	}
);

const AdminUsersNavigator = createStackNavigator(
	{
		Users: AdminUsersScreen
	},
	{
		navigationOptions: {
			tabBarIcon: (tabInfo) => (
				<Ionicons
					size={23}
					color={tabInfo.tintColor}
					name={Platform.OS === 'android' ? 'md-person' : 'ios-person'}
				/>
			)
		},
		defaultNavigationOptions: defaultNavOptions
	}
);

const AdminMainNavigator = createBottomTabNavigator(
	{
		Dash: AdminDashNavigator,
		Properties: AdminPropertiesNavigator,
		Checklist: AdminChecklistNavigator,
		Users: AdminUsersNavigator
	},
	{
		tabBarOptions:{
			inactiveBackgroundColor:Colors.primary,
			inactiveTintColor: Colors.secondary,
			activeBackgroundColor:Colors.primaryDark,
			activeTintColor:Colors.secondary
		}
	}
);

const AuthNavigator = createStackNavigator(
	{
		Auth: AuthScreen
	},
	{
		defaultNavigationOptions: defaultNavOptions
	}
);

const MainNavigator = createSwitchNavigator({
	Auth: AuthNavigator,
	Admin: AdminMainNavigator
});

export default createAppContainer(AdminMainNavigator);
