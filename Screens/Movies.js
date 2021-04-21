import React from 'react';
import {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  LogBox 
} from 'react-native';


const Movies = props => {
//Ignore all log notifications
LogBox.ignoreAllLogs();
  const [title, setTitle] = useState([]);
  const [totalResult, setResult] = useState(0);

  useEffect(() => {


    //searchByTitle is given a title name and a page number
    const searchByTitle = async (titleName, page) => {
      try {
        const search = await fetch(`http://www.omdbapi.com/?apikey=ca50dec&s=${titleName}&page=${page}`);
        const data = await search.json();

        //if the Response from the api returns 'true' then save the data
        //otherwise no results shown
        if (data.Response) {
          setTitle(data.Search);
          setResult(data.totalResults);
        } 
        else {
          setTitle(data.Response);
        }
      } 
      catch (error) {
        console.log(error);
      }
    };
    //searchByTitle is given a title name and a page number by the HomeScreen screen
    searchByTitle(props.route.params.titleName, props.route.params.page);
  }, []);


  const renderMovie = flatListItem => {
    return (
      <View>
        {/* Encapsulating text inside a TouchableOpacity to make the text touchable
            and shows each movie based on unique imdbID.
            Each clickable text will navigate to the Additional Info Screen
        */}
        <TouchableOpacity
          style={styles.FlatListRender}
          onPress={() =>
            props.navigation.navigate('Additional Info', {
              movieTitle: flatListItem.item.Title,
              movieIMDb: flatListItem.item.imdbID,
            })
          }>
          <Text style={styles.FlatListRender}>
            Title: {flatListItem.item.Title}
          </Text>

          <Text style={styles.MovieYear}>Year: {flatListItem.item.Year}</Text>
          <View style={{ 
              borderBottomColor: 'black',
              borderBottomWidth: 1
              }}>
            </View>
        </TouchableOpacity>
      </View>
    );
  };

  
  return (
    <SafeAreaView style={{backgroundColor: '#c0b3ff', flex: 1}}>
    <View style={{backgroundColor: '#808080' }}>
      <Text style={styles.Header}>
        [{props.route.params.titleName}] Search Results Page {props.route.params.page}/{Math.ceil(totalResult / 10)}
      </Text>
   
      {title ? (
        <Text style={styles.Result}>Result Found!</Text>
      ) : (
        <Text style={styles.Result}>Result not Found!</Text>
      )}
       </View>
    {/* Flatlist which will contain all of the touchable text */}
      <FlatList
        data={title}
        renderItem={renderMovie}
        keyExtractor={item => item.imdbID}
      />

    {/* Button to go back in the stack */}
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1}}>
          <Button title="Back" onPress={() => props.navigation.goBack()} />
        </View>

    {/* Button to go back to the search screen */}
        <View style={{flex: 1}}>
          <Button title="Home" onPress={() => props.navigation.popToTop()} />
        </View>

    {/* Button to go to the next page of the results */}
        <View style={{flex: 1}}>
          <Button
            title="Next"
            onPress={() => props.navigation.push('Movies', {
                titleName: props.route.params.titleName,
                page: props.route.params.page + 1,
              })} 
            disabled={props.route.params.page == Math.ceil(totalResult / 10)? true: false}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  Header: {
    fontWeight: 'bold',
    fontSize: 22,
    marginBottom: 10,
    marginHorizontal: 5,
  },
  FlatListRender: {
    fontWeight: 'bold',
    fontSize: 18,
    justifyContent: 'space-evenly',
    marginHorizontal: 5,
  },
  MovieYear: {
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 14,
    justifyContent: 'space-evenly',
    marginHorizontal: 5,
  },
  Result: {
    fontWeight: 'bold',
    fontSize: 16,
    marginHorizontal: 5,
  },

});
export default Movies;
