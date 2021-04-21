import React from 'react';
import {useEffect, useState} from 'react';
import {Text, SafeAreaView, StyleSheet, View,Button, TouchableOpacity} from 'react-native';

const AdditionalInfo = props => {
  const [movie, setMovieTitle] = useState([]);

  useEffect(() => {

    const searchTitle = async movieIMDb => {

    // get additional information by searching by the movie imdbID
      const search = await fetch(`http://www.omdbapi.com/?apikey=ca50dec&i=${movieIMDb}`);
      const data = await search.json();

      setMovieTitle(data);
    };

    searchTitle(props.route.params.movieIMDb);
  }, []);

  return (

    //   Printing out additional information
    <SafeAreaView style={styles.SafeAreaView}>
      <Text style={styles.Header}>{props.route.params.movieTitle}</Text>
      <Text style={styles.SubHeading}>
        Year Released: {movie.Year} | Rating: {movie.imdbRating} | Rated: {movie.Rated}
      </Text>
      <Text style={styles.Other}>Awards: {movie.Awards}</Text>
      <Text style={styles.Other}>Actors: {movie.Actors}</Text>
      <Text style={styles.Other}>Director: {movie.Director}</Text>
      <Text style={styles.Plot}>PLOT</Text>
      <Text style={styles.Plot}>{movie.Plot}</Text>

      {/* Button to go back in the stack */}
      <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={styles.Button}
            onPress={() => props.navigation.goBack()}>
            <Text style={{textAlign: 'center', fontSize: 24}}>Back</Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    justifyContent: 'space-evenly',
    backgroundColor: '#c0b3ff',
  },
  Header: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 10,
  },
  SubHeading: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
  Plot: {
    fontSize: 20,
    marginBottom: 10,
  },
  Other: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  Button: {
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: '#00BCD4',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#fff',
    flex:1
  }
});
export default AdditionalInfo;
