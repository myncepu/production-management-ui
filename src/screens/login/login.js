/*
 * login.js
 * Copyright (C) 2018 yanpengqiang <yan2010@live.com>
 *
 * Distributed under terms of the MIT license.
 */
import React, { Component } from 'react'
import {
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  View,
  Text,
  StyleSheet,
} from 'react-native'
import {
  Button,
} from 'native-base'
import colors from '../../theme/variables/commonColor'
import Icon from 'react-native-vector-icons/Ionicons'
import { CheckBox } from 'react-native-elements'

class Login extends Component {
  state = {
    phoneNumber: '',
  }

  setPhoneNumber = (phoneNumber) => {
    this.setState({ phoneNumber })
  }

  static navigationOptions = {
    headerTitle: (
      <Text style={{ fontSize: 20, color: 'white' }} >
        登陆
      </Text>
    ),
    headerRight: (
      <TouchableOpacity style={{ marginRight: 10, padding: 5, marginBottom: 10 }}>
        <Icon size={30} name="ios-more" style={{ color: 'white' }} />
      </TouchableOpacity>
    ),
    headerStyle: {
      backgroundColor: colors.brandPrimary,
    },
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ margin: 15 }}>

          <View style={{ marginTop: 20 }}>
            <Text style={styles.commonTitle}>登陆</Text>
          </View>

          <View style={styles.form}>

            <View style={styles.formItem}>
              <View style={styles.formSpanWrapper}>
                <Text style={styles.formSpan}>手机号码:</Text>
              </View>
              <View style={styles.formInputWrapper}>
                <TextInput
                  maxLength={13}
                  style={styles.formInput}
                  placeholder='请输入手机号码'
                  fontSize={20}
                  onChangeText={(text) => this.setPhoneNumber(text)}
                  value={this.state.phoneNumber}
                />
              </View>
            </View>

            <View style={styles.formItem}>
              <View style={styles.formSpanWrapper}>
                <Text style={styles.formSpan}>密码:</Text>
              </View>
              <View style={styles.formInputWrapper}>
                <TextInput
                  style={styles.formInput}
                  placeholder='请输入密码'
                  fontSize={20}
                />
              </View>
            </View>

          </View>

          <View style={styles.licence}>
            <CheckBox
              left
              size={15}
              containerStyle={styles.checkbox}
              textStyle={{ width: 0 }}
              checkedIcon='check-square-o'
              uncheckedIcon='square-o'
              checkedColor={colors.brandPrimary}
              checked={true}
              onPress={() => null}
            />
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ color: '#555' }}>已阅读并同意</Text>
              <TouchableOpacity>
                <Text
                  style={{ color: colors.brandPrimary }}
                  onPress={() => {
                    // TODO: navigate到协议页
                  }}
                >
                  《相关条款》
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <Button block style={{ marginTop: 10 }}>
            <Text style={{ color: 'white', fontSize: 20 }}>登陆</Text>
          </Button>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20 }}>
            <TouchableOpacity>
              <Text style={{ color: colors.brandPrimary, fontWeight: 'bold' }}>无法登陆?</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{ color: colors.brandPrimary, fontWeight: 'bold' }}>新用户注册</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={{ fontSize: 15, color: '#aaa' }}>{'\u00A9'} 2018 国网太原供电公司 变电检修室</Text>
        </View>

      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  commonTitle: {
    fontSize: 25,
    color: '#555',
  },
  form: {
    borderColor: '#888',
    borderWidth: 1,
    marginTop: 20,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  formItem: {
    flexDirection: 'row',
    height: 50,
    borderBottomColor: '#999',
    borderBottomWidth: 1,
    alignItems: 'center',
  },
  formSpanWrapper: {
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 10,
  },
  formSpan: {
    fontSize: 20,
    color: '#555',
  },
  formInputWrapper: {
    flex: 5,
    justifyContent: 'center',
  },
  formInput: {
    flex: 1,
    paddingHorizontal: 5,
  },
  licence: {
    paddingTop: 20,
    flexDirection: 'row',
  },
  checkbox: {
    marginHorizontal: 0,
    paddingHorizontal: 0,
    backgroundColor: 'transparent',
    width: 20,
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 10,
  },
})
export default Login
