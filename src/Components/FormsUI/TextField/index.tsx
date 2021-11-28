import { TextField, TextFieldProps, StandardTextFieldProps, FilledTextFieldProps, OutlinedTextFieldProps } from '@mui/material';
import { useField } from 'formik';

interface StandardTextFieldWrapperProps extends StandardTextFieldProps
{
    name: string;
}

interface FilledTextFieldWrapperProps extends FilledTextFieldProps
{
    name: string;
}

interface OutlinedTextFieldWrapperProps extends OutlinedTextFieldProps
{
    name: string;
}

type TextFieldWrapperProps = StandardTextFieldWrapperProps | FilledTextFieldWrapperProps | OutlinedTextFieldWrapperProps;

export default function TextFieldWrapper(props: TextFieldWrapperProps)
{
    const [ field, meta ] = useField(props.name);

    const defaults: TextFieldProps = {
        fullWidth: true,
        variant: "outlined"
    };

    const configTextField: TextFieldProps = {
        ...defaults,
        ...props,
        ...field,
        error: false,
        helperText: ""
    };

    if (meta && meta.touched && meta.error)
    {
        configTextField.error = true;
        configTextField.helperText = meta.error;
    }

    return (
        <TextField {...configTextField} />
    );
}
