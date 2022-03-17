import { View, Text, StyleSheet } from 'react-native';
import { Button } from '../components/Button';
import { useCalculator } from '../hooks/useCalculator';

export const Calculator = () => {

    const { currentNumber, previousNumber, handleInput } = useCalculator();

    return (
        <View>

            {
                previousNumber !== '0' &&
                <Text style={styles.operation}>
                    { previousNumber }
                </Text>
            }

            <Text style={styles.result} adjustsFontSizeToFit numberOfLines={ 1 }>
                { currentNumber }
            </Text>

            <View style={ styles.row }>
                <Button title="C"   color="#A5A5A5" action={ handleInput }/>
                <Button title="+/-" color="#A5A5A5" action={ handleInput }/>
                <Button title="del" color="#A5A5A5" action={ handleInput }/>
                <Button title="÷"   color="#FD9F17" action={ handleInput }/>
            </View>

            <View style={ styles.row }>
                <Button title="7" color="#333333" action={ handleInput }/>
                <Button title="8" color="#333333" action={ handleInput }/>
                <Button title="9" color="#333333" action={ handleInput }/>
                <Button title="x" color="#FD9F17" action={ handleInput }/>
            </View>

            <View style={ styles.row }>
                <Button title="4" color="#333333" action={ handleInput }/>
                <Button title="5" color="#333333" action={ handleInput }/>
                <Button title="6" color="#333333" action={ handleInput }/>
                <Button title="-" color="#FD9F17" action={ handleInput }/>
            </View>

            <View style={ styles.row }>
                <Button title="1" color="#333333" action={ handleInput }/>
                <Button title="2" color="#333333" action={ handleInput }/>
                <Button title="3" color="#333333" action={ handleInput }/>
                <Button title="+" color="#FD9F17" action={ handleInput }/>
            </View>

            <View style={ styles.row }>
                <Button title="0" color="#333333" action={ handleInput }/>
                <Button title="." color="#333333" action={ handleInput }/>
                <Button title="=" color="#FD9F17" action={ handleInput }/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    result: {
        color: 'white',
        fontSize: 100,
        alignSelf: 'flex-end',
    },
    operation: {
        fontSize: 40,
        color: 'rgba(255,255,255, 0.5)',
        alignSelf: 'flex-end',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10
    }
});