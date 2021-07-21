import React from 'react';
import { useSelector } from 'react-redux';

interface StoreProps {
    calculator: number;
}

const CalculatorResult:React.FC = () => {
    const result = useSelector((state: StoreProps) => {
        return state.calculator
    })
    return (
        <div>
            <h3>Result: {result}</h3>
        </div>
    );
}

export default CalculatorResult;
