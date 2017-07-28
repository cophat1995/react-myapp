import React from 'react';
import { StackNavigator,TabNavigator, DrawerNavigator } from 'react-navigation';
import Home from './Screens/Home.js';
import Details from './Screens/Details.js';
import Menu from './Screens/Menu.js';
import Users from './Screens/Users.js';
import Login from './components/login/login.js';

export const HomeStack = StackNavigator({
    ManHinh_Home:{
        screen: Home,
        navigationOptions:{
            title: 'Home',
        }
    },
    ManHinh_Detail:{
        screen: Details,
        navigationOptions:{
            title: 'Details'
        }
    },
})
export const UserStack = StackNavigator({
    ManHinh_Users:{
        screen: Users,
        navigationOptions:{
            title: 'Users'
        }
    }
})
export const LoginStack = StackNavigator({
    ManHinh_Login:{
        screen: Login,
        navigationOptions:{
            title: 'Login'
        }
    }
})
export const Tabbar = TabNavigator({
    Home: {
        screen: HomeStack,
        navigationOptions:{
            tabBarLabel: 'Home'
        }
    },
    User: {
        screen: UserStack,
        navigationOptions:{
            tabBarLabel: 'User'
        }
    },
    Login: {
        screen: LoginStack,
        navigationOptions:{
            tabBarLabel: 'Login'
        }
    },
},
    {
        tabBarPosition:'bottom',
        tabBarOptions:{
            style:{
                backgroundColor:'gray'
            },
            inactiveTintColor:'white',
            activeTintColor:'yellow'
        }
})
export const SideMenu = DrawerNavigator({
        TabInMenu:{
            screen:Tabbar
        },
    },
    {
        drawerWidth:300,
        drawerPosition:'left',
        contentComponent: props => <Menu {...props} />
    }
)