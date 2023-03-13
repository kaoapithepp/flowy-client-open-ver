import React, { useState }from "react";
import styled from "styled-components";

interface InputFieldPropsContext {
    callbackVal?: any;
    label?: string;
    placeholder?: string;
    type: string;
    maxChar?: number;
    required?: boolean;
}

export const InputField: React.FC<InputFieldPropsContext> = ({ 
    callbackVal,
    placeholder,
    label,
    maxChar, 
    type,
    required
}) => {

    const [value, setValue] = useState('');

    function onFieldChange(e: any) {
        callbackVal(e.target.value);
        setValue(e.target.value);
    }

    function maxLengthCheck(e: any) {
        if(e.target.value.length > e.target.maxLength){
            e.target.value = e.target.value.slice(0, e.target.maxLength);
        }
    }

    return (
        <FormWrapper>
            <h4>{label}</h4>
            <InputBox
                type={type}
                value={value}
                onChange={e => onFieldChange(e)}
                placeholder={placeholder}
                maxLength={maxChar}
                onInput={maxChar? maxLengthCheck : undefined}
                required={required}
            />
        </FormWrapper>
    );
}

const FormWrapper = styled.div`
    
`;

const InputBox = styled.input`
    width: 100%;
    padding: 8px 8px ;
    margin-bottom: 8px;
    display: inline-block;
    border-radius: 8px;
    border: 1px solid var(--grey-300);
    box-sizing: border-box;
    font-family: var(--brand-font);
    font-size: 16px;
    outline: none;
    caret-color: var(--grey-800);
    color: var(--grey-800);

    :focus {
        border-color: var(--secondary);
    }
`