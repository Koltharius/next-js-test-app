import { Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { FormInputProps } from '@/app/lib/definitions';

// FormInputText component
// This component is used to create a text input field in a form
// It uses the Controller component from react-hook-form to manage the input field
export const FormInputText = ({
  name,
  control,
  label,
  type,
  required,
  inputProps,
}: FormInputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value },
        fieldState: { error },
        formState,
      }) => (
        <TextField
          helperText={error ? error.message : null}
          size="small"
          error={!!error}
          onChange={onChange}
          value={value}
          fullWidth
          label={label}
          variant="outlined"
          type={type || 'text'}
          required={required || false}
          inputProps={inputProps}
          className="rounded-lg bg-white shadow-sm"
        />
      )}
    />
  );
};
