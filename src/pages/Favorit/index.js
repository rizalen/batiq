import Axios from 'axios';
import React, {Component} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {Card} from '../../components';
import {bg, textColor, textSize, textWeight, wrapper} from '../../styles';

const mapStateToProps = (state) => ({
  FavoriteReducer: state.FavoriteReducer,
  dispatch: state.dispatch,
});

class Favorit extends Component {
  state = {
    data: [],
    isLoading: true,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    try {
      const response = await Axios.get(
        'http://batikita.herokuapp.com/index.php/batik/all',
      );
      const favId = this.props.FavoriteReducer.favs;

      this.setState({
        data: this.filterFav(response.data.hasil, favId),
        isLoading: false,
      });
      console.log('ok');
    } catch (error) {
      console.log(error);
      this.setState({
        data: [],
      });
    }
  };
  filterFav = (fav, favId) => {
    const result = [];
    for (let i = 0; i < fav.length; i++) {
      for (let j = 0; j < favId.length; j++) {
        if (fav[i].id == favId[j]) {
          result.push(fav[i]);
        }
      }
    }
    return result;
  };
  render() {
    const {navigation} = this.props;
    const renderItem = (hasil) => (
      <Card
        title={true}
        onPress={() => navigation.navigate('Detail', {data: hasil.item})}
        data={hasil.item}
      />
    );
    const {isLoading, data} = this.state;
    return (
      <SafeAreaView style={wrapper.container}>
        <View style={[wrapper.fav, bg.light]}>
          <Text style={[textSize.xl, textWeight.light, textColor.dark]}>
            Favorit
          </Text>
        </View>
        {!isLoading ? (
          data.length == 0 ? (
            <Text style={[textSize.sm, {alignSelf: 'center'}]}>
              Data Favorit Kosong!
            </Text>
          ) : (
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(hasil) => hasil.id.toString()}
            />
          )
        ) : (
          <Text>Memuat data...</Text>
        )}
      </SafeAreaView>
    );
  }
}

export default connect(mapStateToProps)(Favorit);
