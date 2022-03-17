import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

interface PButton {
    title: string;
    color: '#A5A5A5' | '#FD9F17' | '#333333';
    action: (value: string) => void;
}

export const Button = ({ title, color, action }:PButton) => {
    return (
        <TouchableOpacity activeOpacity={ 0.3 } onPress={ () => { action(title) } }>
            <View style={[styles.button, { backgroundColor: color, width: (title === "0") ? 180 : 80 }] }>
                <Text style={[styles.text, { color: (color === '#A5A5A5') ? 'black': 'white' }]}>
                    { title }
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        height: 80,
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10,
    },
    text: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        fontWeight: '300',
    }
});