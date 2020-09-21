import {combineReducers} from 'redux';

const initLoginReducer = {
  isLogin: false,
  form: {
    username: '',
    passoword: '',
  },
};

const LoginReducer = (state = initLoginReducer, action) => {
  if (action.type === 'SET_FORM') {
    return {
      ...state,
      form: {
        ...state.form,
        [action.inputType]: action.inputValue,
      },
    };
  }
  return state;
};

const initRegisterReducer = {
  form: {
    nama: '',
    email: '',
    username: '',
    passowrd: '',
  },
};

const RegisterReducer = (state = initRegisterReducer, action) => {
  return state;
};

const initAboutReducer = {
  name: '',
  email: '',
  phone: '',
  username: '',
  password: '',
  profileImage: '',
};

const AboutReducer = (state = initAboutReducer, action) => {
  if (action.type === 'SET_DATA') {
    return {
      ...state,
      name: action.name,
      email: action.email,
      phone: action.phone,
      username: action.username,
      password: action.password,
      profileImage: action.profileImage,
    };
  }
  return state;
};

const initFavoriteReducer = {
  favs: [],
};

const FavoriteReducer = (state = initFavoriteReducer, action) => {
  const {type, fav} = action;
  if (type === 'ADD_FAV') {
    return {
      ...state,
      favs: [fav, ...state.favs],
    };
  }
  if (type === 'REMOVE_FAV') {
    return {
      ...state,
      favs: state.favs.filter((i) => i !== fav),
    };
  }
  return state;
};

const reducer = combineReducers({
  LoginReducer,
  RegisterReducer,
  AboutReducer,
  FavoriteReducer,
});

export default reducer;
