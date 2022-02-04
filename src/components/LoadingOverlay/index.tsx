import React, { useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import Theme from "../../assets/styles/Theme";
import loading from '../../assets/images/loading.gif';

export default function Button() {

  return (
    <View style={styles.container}>
        <Image source={loading} style={styles.image}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
      position:'absolute',
      width:'100vw',
      height:'100vh',
      backgroundColor:'rgba(0, 0, 0, 0.4)',
      alignItems:'center',
      justifyContent:'center'
  },
  image:{
    width:'10%',
    height:'10%'
  }
});
