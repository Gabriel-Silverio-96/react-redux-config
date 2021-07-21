import React, { InputHTMLAttributes } from 'react';

//Style
import './style.css';

type TypeProps = 'number';
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    name: string;
    type: TypeProps;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ label, name, type, value, onChange }) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input type={type} name={name} id={name} defaultValue={value} onChange={onChange} />
        </div>
    );
}

export default Input;
