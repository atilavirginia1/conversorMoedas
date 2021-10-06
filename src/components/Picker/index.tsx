import React from "react";
import RNPickerSelect from 'react-native-picker-select';

export function Picker(props){
    const placeholder = {
        label: 'Selecione uma moeda...',
        value: null,
        color: '#000'
    }
  return (
    <RNPickerSelect
        placeholder={placeholder}
        items={props.moedas}
        onValueChange={ (valor) => props.onChange(valor)}
        style={{
            inputIOS:{
                paddingLeft: 5,
                marginVertical: 10,
                fontSize: 15,
                color: '#000'
            },

            inputAndroid:{
                paddingLeft: 5,
                marginVertical: 10,
                fontSize: 15,
                color: '#000'          
            }
        }}
    />
  );
};
