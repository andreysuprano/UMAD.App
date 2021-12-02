import React from 'react';
import { TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native';

import Theme from '../../assets/styles/Theme';

type listItemProps = {
    data:any
}
const ListItem = ({ data }:listItemProps) => {
  return (
    <TouchableOpacity activeOpacity={0.6} style={styles.item}>
      <View style={styles.itemInfo}>
        <Text style={styles.itemNumero}>{data.id}</Text>
        <View style={styles.descriptionContainer}>
          <Text style={styles.itemIgrejas}>{data.igrejas}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    width:'100%',
    backgroundColor:'#FFF',
    borderRadius:5,
    flexDirection: 'row',
    marginBottom:5,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight:20
  },
  itemInfo: {
    marginLeft: 20,
    flexDirection:'row',
    alignItems:"center",
  },
  itemNumero: {
    fontSize: 44,
    fontFamily:'Montserrat_900Black',
    color: Theme.primary,
    marginBottom: 5,
    marginRight:20
  },
  itemIgrejas:{
    fontSize: 16,
    fontFamily:'Montserrat_400Regular',
    color: Theme.title,
    marginBottom: 5,
    marginRight:20
  },
  descriptionContainer:{
    width:'90%',
  }
});

export default ListItem;