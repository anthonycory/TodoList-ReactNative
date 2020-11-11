import React,{useState} from 'react'
import  {View, Text, StyleSheet, TextInput, Button} from 'react-native'

export default function Addtodo({submittab}) {
const [text, setText] = useState('')

const Addtab = (val) => {
    setText(val)
}

    return (
        <View>
            <TextInput style={style.Textinput}
            placeholder="Name.."
            onChangeText={Addtab}
            />
            <Button color="#663ab3" title="Ajouter" onPress={() => submittab(text) }/>
        </View>
    )
}

const style = StyleSheet.create({
    Textinput: {
        padding: 10,
        color: 'white'
    },
    button: {
        color: '#424242'
    }
})