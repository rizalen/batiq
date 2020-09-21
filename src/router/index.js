import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import {About, Detail, Favorit, Home, Login, Register, Splash} from '../pages';
import {colors} from '../utils';

const AboutStack = createStackNavigator();
const AboutStackScreen = () => (
  <AboutStack.Navigator headerMode="none">
    <AboutStack.Screen component={About} name={'About'} />
    <AboutStack.Screen component={Favorit} name={'Favorit'} />
    <AboutStack.Screen component={Detail} name={'Detail'} />
  </AboutStack.Navigator>
);

const HomeStack = createStackNavigator();
const HomeStackScreen = () => (
  <HomeStack.Navigator headerMode="none">
    <HomeStack.Screen component={Home} name={'Home'} />
    <HomeStack.Screen component={Detail} name={'Detail'} />
  </HomeStack.Navigator>
);

const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator headerMode="none">
    <AuthStack.Screen component={Login} name={'Login'} />
    <AuthStack.Screen component={Register} name={'Register'} />
  </AuthStack.Navigator>
);

const Tabs = createBottomTabNavigator();
const TabsScreen = () => (
  <Tabs.Navigator
    tabBarOptions={{
      activeTintColor: colors.dark,
    }}>
    <Tabs.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({color, focused}) => (
          <Icon
            name={focused ? 'home-circle' : 'home-circle-outline'}
            color={color}
            size={26}
          />
        ),
      }}
    />
    <Tabs.Screen
      name="About"
      component={AboutStackScreen}
      options={{
        tabBarLabel: 'About',
        tabBarIcon: ({color, focused}) => (
          <Icon
            name={focused ? 'account-circle' : 'account-circle-outline'}
            color={color}
            size={26}
          />
        ),
      }}
    />
  </Tabs.Navigator>
);

const RootStack = createStackNavigator();
const RootStackScreen = () => (
  <RootStack.Navigator headerMode="none">
    <RootStack.Screen name="Auth" component={AuthStackScreen} />
    <RootStack.Screen name="Tabs" component={TabsScreen} />
  </RootStack.Navigator>
);

const Router = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  if (isLoading) {
    return <Splash />;
  }
  return <RootStackScreen />;
};

export default Router;
