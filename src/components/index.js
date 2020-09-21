import React from 'react';
import {Text, View} from 'react-native';
import FitImage from 'react-native-fit-image';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  bg,
  btn,
  img,
  text,
  textColor,
  textSize,
  textWeight,
  wrapper,
} from '../styles';

export const Input = (props) => {
  const {hint, ...rest} = props;
  return (
    <TextInput placeholder={hint} style={[text.input, textSize.md]} {...rest} />
  );
};

export const ButtonCircle = (props) => {
  const {onPress} = props;
  return (
    <TouchableOpacity onPress={onPress} style={[bg.dark, btn.circle]}>
      <MCIcon name="chevron-right" size={50} style={textColor.light} />
    </TouchableOpacity>
  );
};

export const ButtonRound = (props) => {
  const {onPress, text} = props;
  return (
    <TouchableOpacity onPress={onPress} style={[bg.dark, btn.round]}>
      <Text style={[textWeight.light, textColor.light, textSize.md]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export const Card = (props) => {
  const {title, data, onPress, image} = props;
  return (
    <TouchableOpacity style={wrapper.card} onPress={onPress}>
      <FitImage
        source={{
          uri: `${data.link_batik}`,
        }}
        style={image}
      />
      {title ? (
        <View style={wrapper.text}>
          <Text style={[textWeight.bold, textSize.sm]}>{data.nama_batik}</Text>
          <Text style={[textWeight.light, textSize.sm]}>
            {data.daerah_batik}
          </Text>
        </View>
      ) : (
        <View />
      )}
    </TouchableOpacity>
  );
};

export const TitleDetail = (props) => {
  const {icon, title} = props;
  return (
    <View style={wrapper.titleDetail}>
      <View style={[wrapper.icon, bg.dark]}>
        <MCIcon name={icon} style={textColor.light} size={30} />
      </View>
      <Text
        style={[
          bg.light,
          textSize.md,
          textColor.dark,
          {
            padding: 5,
            borderRadius: 5,
          },
        ]}>
        {title}
      </Text>
    </View>
  );
};
