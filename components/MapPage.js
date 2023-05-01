import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,TouchableOpacity,Image ,Pressable,requireNativeComponent } from 'react-native';
 import MapView,{PROVIDER_GOOGLE} from 'react-native-maps';
 import { COLORS, FONT, SIZES,icons } from '../constants';
 import { Searchbar } from 'react-native-paper';
 import React,{ useState } from "react";



const MapPage = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
      <Searchbar style={styles.searchBar}
       inputStyle={{height: '35',fontSize:'14px',textAlign:'center'}}
      placeholder="Enter your Location"
      inputContainerStyle={{height: '35'}}
      onChangeText={onChangeSearch}
      value={searchQuery}
      icon="magnify" 
    />
    <TouchableOpacity style={styles.searchBtn} >
          <Image
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
    </View>
    <Pressable style={styles.button}>
      <Text style={styles.text}>Select from Map</Text>
    </Pressable>
      <MapView style={styles.map} provider={PROVIDER_GOOGLE} showsUserLocation={true} />
      <StatusBar style="auto" />
      {/* <Image
        source={require("./assets/images/my-iocn.png")}
        style={{ width: 375, height: 320 }}
      /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    width:'95%',
    margin:"auto",
  },
    map: {
      width: '95%',
      height: '60%',
      margin:'auto'
    },
    searchContainer: {
      display:'flex',
      flexDirection: "row",
      justifyContent: "center",
      alignItems:'center',
      alignContent:'center',
      height: 40,
      width:'75%',
      marginLeft:'auto',
      marginRight:'auto',
      marginTop:'25px',
      marginBottom:'25px',
    },
    searchBar: {
      height: "35",
      width:"100%",
  display:'flex',
  flexDirection:'row',
  alignItems:'center',
  textAlign:'center',
  alignContent:'center'

    },
    searchBtn: {
      width: 45,
      height: "100%",
      backgroundColor: COLORS.tertiary,
      borderRadius: SIZES.medium,
      justifyContent: "center",
      alignItems: "center",
      marginLeft:10
    },
    searchBtnImage: {
      width: "40%",
      height: "40%",
      tintColor: COLORS.white,
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 8,
      paddingHorizontal: 25,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: '#6100FF',
      marginBottom:10
    },
    text: {
      fontSize: 14,
      lineHeight: 15,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
      width:'60%',
      textAlign:'center'
    }
});


export default MapPage