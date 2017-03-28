import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text,
  ListView,
  StyleSheet
} from 'react-native';
import GetMovies from './GetMovies.js';

class ListViewBasics extends Component {
  // first we start with hardcoded data
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        'Jimmy', 'Jack', 'Jennifer', 'Jane'
      ])
    };

    this.getMovies(ds);
  }

  // function to set data source state
  async getMovies(ds) {

    try {
      let movies = await GetMovies.retrieveMovies();
      this.setState({
        dataSource: ds.cloneWithRows(movies)
      });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return(
      <View style={styles.container}>
        <ListView
          style={styles.list}
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text style={styles.listItem}>{rowData.title} {rowData.releaseYear}</Text>}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'cornsilk',
    alignItems: 'center',
  },
  list: {
    borderColor: 'darkred',
  },
  listItem: {
    color: 'black',
  }
});

AppRegistry.registerComponent('NetworkingStuff', () => ListViewBasics);
