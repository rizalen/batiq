import {StyleSheet} from 'react-native';
import {colors, fonts} from '../utils';

export const textWeight = StyleSheet.create({
  bold: {
    fontFamily: fonts.bold,
  },
  normal: {
    fontFamily: fonts.regular,
  },
  light: {
    fontFamily: fonts.light,
  },
  thin: {
    fontFamily: fonts.thin,
  },
});

export const textSize = StyleSheet.create({
  xl: {
    fontSize: 26,
  },
  lg: {
    fontSize: 24,
  },
  md: {
    fontSize: 20,
  },
  sm: {
    fontSize: 18,
  },
  xs: {
    fontSize: 16,
  },
});

export const textColor = StyleSheet.create({
  light: {
    color: colors.light,
  },
  dark: {
    color: colors.dark,
  },
});

export const text = StyleSheet.create({
  title: {
    marginVertical: 24,
    alignSelf: 'center',
  },
  input: {
    borderBottomColor: colors.dark,
    borderBottomWidth: 2,
  },
});

export const wrapper = StyleSheet.create({
  container: {
    flex: 1,
  },
  splash: {
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    backgroundColor: '#E39E5450',
    height: 200,
    borderBottomLeftRadius: 200,
    borderBottomRightRadius: 200,
    justifyContent: 'flex-end',
    paddingBottom: 10,
  },

  input: {
    borderTopRightRadius: 70,
    borderBottomRightRadius: 70,
    paddingStart: 10,
    paddingVertical: 30,
    paddingEnd: 70,
    width: 300,
    flex: 3,
  },
  form: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btn: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: -30,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  search: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 20,
    borderColor: '#4d4d4d',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  card: {
    marginTop: 10,
    marginHorizontal: 5,
    borderRadius: 5,
    padding: 3,
    elevation: 3,
    overflow: 'hidden',
  },
  img: {
    marginTop: 10,
    borderBottomLeftRadius: 100,
    borderTopRightRadius: 100,
    overflow: 'hidden',
  },

  text: {
    marginTop: 20,
    padding: 10,
  },

  title: {
    marginHorizontal: 20,
    marginTop: -50,
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
    elevation: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -30,
    marginLeft: -30,
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detail: {
    marginTop: 20,
    marginBottom: 10,
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 5,
    elevation: 3,
  },
  detailImg: {
    borderBottomLeftRadius: 80,
    borderTopRightRadius: 80,
    overflow: 'hidden',
  },

  about: {
    alignItems: 'center',
    paddingVertical: 80,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  profile: {
    marginTop: -30,
    marginHorizontal: 20,
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },
  fav: {
    borderBottomRightRadius: 100,
    padding: 20,
  },
});

export const img = StyleSheet.create({
  splash: {
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
  logo: {
    width: 130,
    height: 130,
    alignSelf: 'center',
  },
  fit: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  fitFav: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: 200,
    height: 100,
  },
  about: {
    width: 100,
    height: 100,
    borderRadius: 100,
    overflow: 'hidden',
  },
});

export const bg = StyleSheet.create({
  light: {
    backgroundColor: colors.light,
  },
  dark: {
    backgroundColor: colors.dark,
  },
  white: {
    backgroundColor: 'white',
  },
});

export const btn = StyleSheet.create({
  circle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },

  round: {
    marginTop: 40,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
  },
});
