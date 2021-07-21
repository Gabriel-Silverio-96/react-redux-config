import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sum } from 'Store/Calculator/Calculator.actions';

//Components
import CalculatorResult from 'Components/CalculatorResult';
import Input from 'Components/Input';

//Style
import './style.css'

interface NumbersProps {
    number_a: number,
    number_b: number,
}

const Home:React.FC = () => {
    const dispatch = useDispatch();
    const [numbers, setNumbers] = useState<NumbersProps>({
        number_a: 0,
        number_b: 0,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name;
        const value = Number(e.target.value);

        setNumbers({
            ...numbers,
            [name]: value
        })
    }

    const handleClick = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        dispatch(sum(numbers.number_a, numbers.number_b))
    }

    return (
        <div>
            <form>
                <Input 
                    label="Add number"
                    name="number_a"
                    type="number"
                    onChange={handleChange}
                />

                <Input 
                    label="Add number"
                    name="number_b"
                    type="number"
                    onChange={handleChange}
                />

                <button onClick={handleClick}>Sum</button>
            </form>
            <CalculatorResult/>
        </div>
    );
}

export default Home;
