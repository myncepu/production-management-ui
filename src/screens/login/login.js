/*
 * login.js
 * Copyright (C) 2018 yanpengqiang <yan2010@live.com>
 *
 * Distributed under terms of the MIT license.
 */
import React, { Component } from 'react'
import {
  SafeAreaView,
  View,
} from 'react-native'
import {
  Button,
  Item,
  Label,
  Input,
  Form,
  Text
} from 'native-base'

class FloatingLabel extends Component {
  render() {
    return (
      <SafeAreaView>
        <View>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input secureTextEntry />
            </Item>
          </Form>
          <Button block style={{ margin: 15, marginTop: 50 }}>
            <Text>Sign In</Text>
          </Button>
        </View>
      </SafeAreaView>
    )
  }
}

export default FloatingLabel
