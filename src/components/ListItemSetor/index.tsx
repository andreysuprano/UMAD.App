import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { useState } from 'react';
import { TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native';

import Theme from '../../assets/styles/Theme';
import Context from "../../context/auth";


const ListItem = ({data}:{data:any}) => {
  const [setor, setSetor] = useState(-1);
  const { user, setUser } = useContext(Context.UserContext);
  const navigation = useNavigation();

  const handlePressItem = (index:number) =>{
    setSetor(index);
    if(setor != -1){
      user.setor = setor;
      setUser(user);
      navigation.navigate("Senha")
      console.log(user)
    }
  }
  return (
    <TouchableOpacity activeOpacity={0.6} style={styles.item} onPress={()=>{handlePressItem(data.id)}}>
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