import Axios from 'axios';
import React, {Component} from 'react';
import {Dimensions, SafeAreaView, Text, View} from 'react-native';
import FitImage from 'react-native-fit-image';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {TitleDetail} from '../../components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {bg, textColor, textSize, textWeight, wrapper} from '../../styles';
import {connect} from 'react-redux';

const mapsStateToProps = (state) => ({
  dispatch: state.dispatch,
  FavoriteReducer: state.FavoriteReducer,
});

class Detail extends Component {
  state = {
    data: [],
    isLoading: true,
    isFav: false,
  };

  componentDidMount() {
    const {data} = this.props.route.params;
    const {FavoriteReducer} = this.props;
    console.log(data);
    for (let i = 0; i < FavoriteReducer.favs.length; i++) {
      if (data.id == FavoriteReducer.favs[i]) {
        this.setState({isFav: true});
      }
    }
    this.setState({data: data, isLoading: false});
  }

  handleFavClick = (fav) => {
    const {dispatch} = this.props;
    if (this.state.isFav) {
      console.log('remove');
      dispatch({
        type: 'REMOVE_FAV',
        fav: fav,
      });
      this.setState({isFav: false});
    } else {
      console.log('add');
      dispatch({
        type: 'ADD_FAV',
        fav: fav,
      });
      this.setState({isFav: true});
    }
  };

  render() {
    const {
      link_batik,
      nama_batik,
      makna_batik,
      daerah_batik,
      harga_rendah,
      harga_tinggi,
      id,
    } = this.state.data;
    return (
      <SafeAreaView
        style={
          (wrapper.container,
          {
            padding: 10,
          })
        }>
        {this.state.isLoading ? (
          <Text>Memuat data...</Text>
        ) : (
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={wrapper.detailImg}>
              <FitImage
                source={{
                  uri: `${link_batik}`,
                }}
              />
            </View>
            <View style={[wrapper.title, bg.light]}>
              <View>
                <Text style={[textSize.md, textWeight.bold]}>{nama_batik}</Text>
                <Text style={[textSize.sm, textWeight.light]}>
                  {daerah_batik}
                </Text>
              </View>
              <TouchableOpacity onPress={() => this.handleFavClick(id)}>
                <Icon
                  name={this.state.isFav ? 'heart' : 'heart-outline'}
                  size={30}
                  style={textColor.dark}
                />
              </TouchableOpacity>
            </View>
            <View style={wrapper.detail}>
              <TitleDetail icon="tag-outline" title="Range Harga" />
              <Text Text style={[textWeight.light, textSize.sm]}>
                Rp. {harga_rendah} - Rp.
                {harga_tinggi}
              </Text>
            </View>
            <View style={wrapper.detail}>
              <TitleDetail icon="text-box-outline" title="Makna" />
              <Text style={[textWeight.light, textSize.sm]}>{makna_batik}</Text>
            </View>
          </ScrollView>
        )}
      </SafeAreaView>
    );
  }
}

export default connect(mapsStateToProps)(Detail);
