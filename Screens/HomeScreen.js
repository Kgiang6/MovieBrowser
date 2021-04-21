import React from 'react';
import {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

const HomeScreen = props => {
  const [titleName, setTitleName] = useState('');

  return (
    <SafeAreaView style={styles.SafeAreaView}>

    {/* Text input for user input */}
      <TextInput
        style={styles.textInput}
        placeholder="Title of Movie"
        value={titleName}
        onChangeText={e => setTitleName(e)}></TextInput>

      <View style={styles.ButtonContainer}>

    {/* Button to naviagte to the results screen */}
        <View style={styles.viewFlex}>
          <TouchableOpacity
            style={styles.Button}
            onPress={() => props.navigation.navigate('Movies', {
                titleName: titleName,
                page: 1,})
            }>
            <Text style={{textAlign: 'center', fontSize:24}}>Search</Text>
          </TouchableOpacity>
        </View>

    {/* Button to clear the text input */}
        <View style={styles.viewFlex}>
          <TouchableOpacity
            style={styles.Button}
            onPress={() => setTitleName('')}>
            <Text style={{textAlign: 'center', fontSize:24}}>Clear</Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  ButtonContainer: {
    flexDirection: 'row',
  },
  viewFlex: {
    flex: 1,
  },
  Button: {
    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: '#00BCD4',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  SafeAreaView: {
    backgroundColor: '#c0b3ff',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  textInput: {
    textAlign: 'center',
    fontSize: 30,
    backgroundColor: '#FFFFFF',
  },
});
export default HomeScreen;
