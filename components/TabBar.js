import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {StackActions} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';

import HomeScreen from '../screens/HomeScreen';
import SavedScreen from '../screens/SavedScreen';
import SettingsScreen from '../screens/SettingsScreen';
import DetailsScreen from '../screens/DetailsScreen';
import Colors from '../constants/Colors';
import Styles from './Styles/TabBarStyle';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MyStack = ({navigation}) => {
  const theme = useSelector(state => state.theme);

  let Touchable = TouchableOpacity;

  if (Platform.OS === 'android') {
    Touchable = TouchableNativeFeedback;
  }

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{
          headerTitle: 'Article details',
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerTitleStyle: {
            fontSize: 17,
            fontWeight: 'bold',
            color: Colors.Inactive,
          },
          headerTintColor: Colors.Inactive,
          headerLeft: () => (
            <Touchable
              style={Styles.button}
              onPress={() => {
                navigation.dispatch(StackActions.popToTop());
              }}>
              <Image
                title="Back"
                source={require('../assets/left.png')}
                style={Styles.headerButton}
              />
            </Touchable>
          ),
        }}
      />
      <Stack.Screen
        name="Saved"
        component={SavedScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const TabBar = () => {
  const theme = useSelector(state => state.theme);

  return (
    <Tab.Navigator tabBarOptions={{showLabel: false}}>
      <Tab.Screen
        name="Home"
        component={MyStack}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={[
                Styles.image,
                {backgroundColor: focused ? theme.theme + 40 : 'white'},
              ]}>
              <Image
                source={require('../assets/home.png')}
                resizeMode="contain"
                style={{
                  width: 35,
                  height: 35,
                  tintColor: focused ? theme.theme : Colors.Inactive,
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Saved"
        component={SavedScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={[
                Styles.image,
                {backgroundColor: focused ? theme.theme + 40 : 'white'},
              ]}>
              <Image
                source={require('../assets/saved.png')}
                resizeMode="contain"
                style={{
                  width: 35,
                  height: 35,
                  tintColor: focused ? theme.theme : Colors.Inactive,
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={[
                Styles.image,
                {backgroundColor: focused ? theme.theme + 40 : 'white'},
              ]}>
              <Image
                source={require('../assets/settings.png')}
                resizeMode="contain"
                style={{
                  width: 35,
                  height: 35,
                  tintColor: focused ? theme.theme : Colors.Inactive,
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabBar;
