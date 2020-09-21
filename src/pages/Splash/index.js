import React, {Component} from 'react';
import {Image, View} from 'react-native';
import {bg, img, wrapper} from '../../styles';

export default class Splash extends Component {
  render() {
    return (
      <View style={[wrapper.splash, bg.light]}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={img.splash}
        />
      </View>
    );
  }
}
