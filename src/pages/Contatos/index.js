import React from "react";
import {View, Text} from 'react-native';

export default function Contatos ({navigation}){
    return(
        <View style={{margin: 100}}>
            <Text>Contatos</Text>
            <Text
            onPress={() => navigation.navigate('Informações')}
            >Informações de Equipe</Text>
        </View>
    )
}