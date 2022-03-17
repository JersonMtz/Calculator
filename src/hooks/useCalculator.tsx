import { useRef, useState } from 'react';

// enum Sign { init, multiply, divide, sum, rest };
type Sign = 'DIV' | 'MUL' | 'RES' | 'SUM';

export const useCalculator = () => {
    
    const [currentNumber, setCurrentNumber] = useState('0');
    const [previousNumber, setPreviousNumber] = useState('0');
    const sign = useRef<Sign>();
    const result = useRef(false);

    const cleanCalculator = () => {
        setCurrentNumber('0');
        setPreviousNumber('0');
    }

    const changeSign = () => {
        const temp = Number(currentNumber) * -1;
        setCurrentNumber(`${ temp }`);
    }

    const deleteNumber = () => {
        const size = currentNumber.length;
        const temp = currentNumber.substring(0, size - 1) || '0';
        if (temp === '-') {
            setCurrentNumber('0');
        } else {
            setCurrentNumber(temp);
        }
    }

    const addPoint = () => {
        if(!currentNumber.includes('.')) {
            setCurrentNumber(`${ currentNumber }.`);
        }
    }

    const resultOperation = () => {
        switch(sign.current) {
            case 'MUL':
                setCurrentNumber(`${ Number(previousNumber) * Number(currentNumber) }`);
                break;
                
            case 'DIV':
                setCurrentNumber(`${ Number(previousNumber) / Number(currentNumber) }`);
                break;

            case 'SUM':
                setCurrentNumber(`${ Number(previousNumber) + Number(currentNumber) }`);
                break;

            case 'RES':
                setCurrentNumber(`${ Number(previousNumber) - Number(currentNumber) }`);
                break;
        }
        setPreviousNumber('0');
        result.current = true;
    }


    const handleInput = (value: string) => {
        switch(value) {
            case 'C': 
                cleanCalculator();
                break;
            
            case '+/-':
                changeSign();
                break;

            case 'del':
                deleteNumber();
                break;
            
            case '.':
                addPoint();
                break;

            case 'x':
                sign.current = 'MUL';
                setPreviousNumber(currentNumber);
                setCurrentNumber('0');
                break;

            case '÷':
                sign.current = 'DIV';
                setPreviousNumber(currentNumber);
                setCurrentNumber('0');
                break;

            case '+':
                sign.current = 'SUM';
                setPreviousNumber(currentNumber);
                setCurrentNumber('0');
                break;
            
            case '-':
                sign.current = 'RES';
                setPreviousNumber(currentNumber);
                setCurrentNumber('0');
                break;

            case '=':
                resultOperation();
                break;
            default:
                if (currentNumber === '0') {
                    setCurrentNumber(value);
                } else if (result.current) {
                    result.current = false;
                    setCurrentNumber(value);
                } else {
                    setCurrentNumber(`${ currentNumber }${ value }`);
                    result.current = false;
                }
        }
    }

    return {
        currentNumber,
        previousNumber,
        handleInput,
    }
}
