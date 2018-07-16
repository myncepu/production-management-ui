/*
 * App.js
 * Copyright (C) 2018 yanpengqiang <yan2010@live.com>
 *
 * Distributed under terms of the MIT license.
 */
import React from 'react'
import { Root } from 'native-base'
import { createStackNavigator } from 'react-navigation'

import Login from './screens/login/login'

const AppNavigator = createStackNavigator({
  Login: { screen: Login },
})

export default () =>
  <Root>
    <AppNavigator />
  </Root>
