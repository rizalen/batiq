import React, {Component} from 'react';
import {Image, RefreshControl, ScrollView, Text, View} from 'react-native';
import {ButtonCircle, ButtonRound, Input} from '../../components';
import {connect} from 'react-redux';
import Axios from 'axios';
import Dialog from 'react-native-dialog';
import {
  bg,
  img,
  text,
  textColor,
  textSize,
  textWeight,
  wrapper,
} from '../../styles';

const mapStateToProps = (state) => ({
  LoginReducer: state.LoginReducer,
  AboutReducer: state.AboutReducer,
  dispatch: state.dispatch,
});

class Login extends Component {
  state = {
    data: [],
    isLoading: true,
    dialogVisible: true,
    refreshing: false,
  };
  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    try {
      const response = await Axios.get(
        'https://randomuser.me/api/?gender=male&nat=us',
      );
      this.setState({
        data: response.data.results[0],
        isLoading: false,
        refreshing: false,
      });
      const {data} = this.state;
      const {dispatch} = this.props;

      dispatch({
        type: 'SET_DATA',
        name: `${data.name.first} ${data.name.last}`,
        email: data.email,
        phone: data.phone,
        username: data.login.username,
        password: data.login.password,
        profileImage: data.picture.medium,
      });
    } catch (error) {
      console.log(error);
      this.setState({
        data: [],
      });
    }
  };

  onInputChange = (value, input) => {
    const {dispatch} = this.props;
    dispatch({
      type: 'SET_FORM',
      inputType: input,
      inputValue: value,
    });
  };

  handleLogin = (navigation) => {
    const {AboutReducer, LoginReducer} = this.props;
    if (
      AboutReducer.username == LoginReducer.form.username &&
      AboutReducer.password == LoginReducer.form.password
    ) {
      navigation.navigate('Tabs');
    } else {
      alert('username/password tidak sesuai!');
    }
  };

  handleOk = () => {
    this.setState({dialogVisible: false});
  };

  _onRefresh() {
    this.setState({
      isLoading: true,
      refreshing: true,
      dialogVisible: true,
    });
    this.fetchData();
  }

  render() {
    const {navigation, LoginReducer, AboutReducer} = this.props;
    if (this.state.isLoading) {
      return <Text>Memuat data...</Text>;
    }

    return (
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh.bind(this)}
          />
        }
        style={[wrapper.container, bg.light]}>
        <Dialog.Container visible={this.state.dialogVisible}>
          <Dialog.Title>Username dan Password</Dialog.Title>
          <Dialog.Description>
            {`Username : ${AboutReducer.username}\nPassword : ${AboutReducer.password}`}
          </Dialog.Description>
          <Dialog.Button label="Ok" onPress={this.handleOk} />
        </Dialog.Container>
        <View style={wrapper.logo}>
          <Image
            source={require('../../assets/images/logo.png')}
            style={img.logo}
          />
        </View>
        <Text
          style={[textColor.dark, textSize.xl, textWeight.bold, text.title]}>
          Login
        </Text>
        <View style={wrapper.form}>
          <View style={[wrapper.input, bg.white]}>
            <Input
              hint="username"
              value={LoginReducer.username}
              onChangeText={(value) => this.onInputChange(value, 'username')}
            />
            <Input
              hint="password"
              value={LoginReducer.password}
              onChangeText={(value) => this.onInputChange(value, 'password')}
              secureTextEntry={true}
            />
          </View>
          <View style={wrapper.btn}>
            <ButtonCircle onPress={() => this.handleLogin(navigation)} />
          </View>
        </View>
        <Text
          style={[
            textColor.dark,
            {
              alignSelf: 'center',
              marginTop: 20,
            },
          ]}>
          Forgot Password ?
        </Text>
        <ButtonRound
          text="Register"
          onPress={() => navigation.navigate('Register')}
        />
      </ScrollView>
    );
  }
}

export default connect(mapStateToProps)(Login);
