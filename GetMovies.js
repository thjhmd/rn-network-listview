import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text,
} from 'react-native';

export default class GetMovies {

  static async retrieveMovies() {

    try {
      let response = await fetch('https://facebook.github.io/react-native/movies.json');
      let responseJson = await response.json();
      return responseJson.movies;
    } catch (error) {
      console.error(error);
    }
  }
}
