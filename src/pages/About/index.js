import React, {Component} from 'react';
import {
  Image,
  View,
  Text,
  SafeAreaView,
  FlatList,
  RefreshControl,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Axios from 'axios';
import {Card} from '../../components';
import {bg, img, textSize, textWeight, wrapper} from '../../styles';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {colors} from '../../utils';
import {connect} from 'react-redux';

const mapStateToProps = (state) => ({
  AboutReducer: state.AboutReducer,
  FavoriteReducer: state.FavoriteReducer,
  dispatch: state.dispatch,
});

class About extends Component {
  state = {
    isLoading: true,
    dataFav: [],
    refreshing: false,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    try {
      const response = await Axios.get(
        'http://batikita.herokuapp.com/index.php/batik/all',
      );
      const dataBatik = response.data.hasil;
      const favId = this.props.FavoriteReducer.favs;
      this.setState({
        dataFav: this.filterFav(dataBatik, favId),
        isLoading: false,
        refreshing: false,
      });
      console.log(favId);
    } catch (error) {
      console.log(error);
      this.setState({
        data: [],
        dataFav: [],
      });
    }
  };

  filterFav = (fav, favId) => {
    const result = [];
    for (let i = 0; i < fav.length; i++) {
      for (let j = 0; j < 4; j++) {
        if (fav[i].id == favId[j]) {
          result.push(fav[i]);
        }
      }
    }
    return result;
  };
  _onRefresh = () => {
    this.setState({
      isLoading: true,
      refreshing: true,
    });
    this.fetchData();
  };
  render() {
    const {navigation, AboutReducer} = this.props;
    const {dataFav, refreshing} = this.state;
    const renderItem = (hasil) => (
      <View
        style={{
          width: 200,
          height: 220,
          padding: 5,
          justifyContent: 'center',
        }}>
        <Card
          title={true}
          onPress={() => navigation.navigate('Detail', {data: hasil.item})}
          data={hasil.item}
          image={img.fitFav}
        />
      </View>
    );
    return (
      <SafeAreaView>
        {this.state.isLoading ? (
          <Text> Memuat data... </Text>
        ) : (
          <ScrollView
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={this._onRefresh.bind(this)}
              />
            }>
            <View style={[wrapper.about, bg.light]}>
              <View style={img.about}>
                <Image
                  source={{
                    uri: `${AboutReducer.profileImage}`,
                  }}
                  style={{
                    width: 100,
                    height: 100,
                  }}
                />
              </View>
              <Text style={[textSize.md, textWeight.light]}>
                {AboutReducer.name}
              </Text>
              <Text style={[textSize.sm, textWeight.bold]}>
                {AboutReducer.username}
              </Text>
            </View>
            <View style={[wrapper.profile, bg.white]}>
              <Text style={[textSize.md, textWeight.bold]}> Profile </Text>
              <Text style={[textSize.sm, textWeight.light]}>
                <Icon name="email-outline" size={20} /> {AboutReducer.email}
              </Text>
              <Text style={[textSize.sm, textWeight.light]}>
                <Icon name="phone-outline" size={20} /> {AboutReducer.phone}
              </Text>
            </View>
            <View>
              <View
                style={[
                  wrapper.text,
                  {
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                  },
                ]}>
                <Text style={[textSize.lg, textWeight.light]}> Favorit </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Favorit')}>
                  <Text>
                    More <Icon name="chevron-right" size={16} />
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            {dataFav.length == 0 ? (
              <Text style={{alignSelf: 'center'}}>Data Favorit Kosong!</Text>
            ) : (
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled={true}
                data={dataFav}
                renderItem={renderItem}
                keyExtractor={(hasil) => hasil.id.toString()}
              />
            )}
          </ScrollView>
        )}
      </SafeAreaView>
    );
  }
}

export default connect(mapStateToProps)(About);
