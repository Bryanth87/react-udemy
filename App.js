import {StatusBar, statusbar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainStackNavigator from './navigation/MainNavigator';

const Tab = createBottomTabNavigator();

export default function App() {
    return (
      <MainStackNavigator />
    )
  }