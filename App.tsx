import { SafeAreaView, StatusBar, Text, StyleSheet } from 'react-native';
import { Calculator } from './src/screens/Calculator';

const App = () => {
    return (
        <SafeAreaView style={ styles.container }>
            <StatusBar 
                backgroundColor="black" 
                barStyle="light-content"
            />
            <Text style={ styles.textMuted }>
                Dev. Jerson 😏
            </Text>
            <Calculator />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'flex-end',
        padding: 15
    },
    textMuted: {
        position: 'absolute',
        top: 25,
        left: 25,
        textAlign: 'center', 
        fontSize: 18, 
        color: '#9C9C9C'
    }
});

export default App;