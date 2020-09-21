import Axios from 'axios';
import React, {Component} from 'react';
import {Text, TextInput, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import {Card} from '../../components';
import {img, textColor, wrapper} from '../../styles';

export default class Home extends Component {
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
      this.setState({
        data: response.data.hasil,
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
  render() {
    const {navigation} = this.props;
    const renderItem = (hasil) => (
      <Card
        title={true}
        onPress={() => navigation.navigate('Detail', {data: hasil.item})}
        data={hasil.item}
        image={img.fit}
      />
    );

    return (
      <View
        style={[
          wrapper.container,
          {
            padding: 10,
          },
        ]}>
        <View style={wrapper.searchBar}>
          <View style={wrapper.search}>
            <TextInput placeholder="Search" style={wrapper.container} />
            <Icon name="search-outline" size={20} style={textColor.dark} />
          </View>
        </View>
        {!this.state.isLoading ? (
          <FlatList
            data={this.state.data}
            renderItem={renderItem}
            keyExtractor={(hasil) => hasil.id.toString()}
            showsVerticalScrollIndicator={false}
          />
        ) : (
          <Text>Memuat data...</Text>
        )}
      </View>
    );
  }
}
