import React from "react";
import InputMask from "react-input-mask";
import TextField from "ui/components/inputs/TextField";
import { OutlinedTextFieldProps } from "@mui/material";

interface TextFieldMaskedProps extends OutlinedTextFieldProps {
    mask: string;
}

const TextFieldMasked: React.FC<TextFieldMaskedProps> = ({
    mask,
    ...props
}) => {
    return (
        <InputMask mask={mask}>
            {() => {
                return <TextField {...props} />;
            }}
        </InputMask>
    );
};

export default TextFieldMasked;
