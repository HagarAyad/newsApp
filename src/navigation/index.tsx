import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
//---
import ArticlesList from '~screens/ArticlesList';
import ArticleDetails from '~screens/ArticleDetails';
import Settings from '~screens/Settings';
//--
import i18n from '~locals';
//--
import {APP_SCREENS} from './appScreens.constant';
import {ArticlesStackParamList} from './types';

const Stack = createNativeStackNavigator<ArticlesStackParamList>();

const ArticlesStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={'Articles'}
      component={ArticlesList}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name={'ArticleDetails'}
      component={ArticleDetails}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

function AppNavigation() {
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name={'ArticlesStack'}
          component={ArticlesStack}
          options={{
            drawerLabel: i18n.t('articles'),
            headerTitle: i18n.t('articles'),
          }}
        />
        <Drawer.Screen
          name={APP_SCREENS.settings}
          component={Settings}
          options={{
            drawerLabel: i18n.t('setting'),
            headerTitle: i18n.t('setting'),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
