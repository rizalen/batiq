import React, {Component} from 'react';
import {Text, Image, View} from 'react-native';

import {
  bg,
  img,
  text,
  textColor,
  textSize,
  textWeight,
  wrapper,
} from '../../styles';
import {ButtonCircle, ButtonRound, Input} from '../../components';

export default class Register extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={[wrapper.container, bg.light]}>
        <View style={wrapper.logo}>
          <Image
            source={require('../../assets/images/logo.png')}
            style={img.logo}
          />
        </View>
        <Text
          style={[textColor.dark, textSize.xl, textWeight.bold, text.title]}>
          Register
        </Text>
        <View style={wrapper.form}>
          <View style={[wrapper.input, bg.white]}>
            <Input hint="full name" />
            <Input hint="email" />
            <Input hint="username" />
            <Input hint="password" />
            <Input hint="retype password" />
          </View>
          <View style={wrapper.btn}>
            <ButtonCircle onPress={() => alert('todo')} />
          </View>
        </View>
        <ButtonRound text="Login" onPress={() => navigation.goBack()} />
      </View>
    );
  }
}
