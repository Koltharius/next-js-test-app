'use client';

import Box from '@mui/material/Box';
import { useForm, SubmitHandler } from 'react-hook-form';
import Button from '@mui/material/Button';
import { UserCreate } from '@/app/lib/definitions';
import { FormInputText } from '@/app/ui/createUserForm/formComponents/formInputText';
import { createUser } from '@/app/lib/data';
import bcrypt from 'bcryptjs';

// Default values for the form
const defaultValues = {
  firstName: '',
  lastName: '',
  username: '',
  email: '',
  password: '',
};

const salt = bcrypt.genSaltSync(10); // generate salt for hashing

// CreateUserForm component
// This component is used to create a form to create a new user
// It uses the useForm hook from react-hook-form to manage the form state
export default function CreateUserForm() {
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors, isValid },
    register,
    trigger,
  } = useForm<UserCreate>({
    defaultValues: defaultValues,
    mode: 'onChange',
  });

  // Submit handler
  const onSubmit: SubmitHandler<UserCreate> = async (data) => {
    data.password = bcrypt.hashSync(data.password, salt); // hash password
    try {
      await createUser(data);
      reset();
      console.log('User created successfully');
    } catch (error) {
      console.error('Error creating user', error);
    }
  };

  return (
    <Box
      component="form"
      noValidate
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      className="grid gap-x-5 rounded-xl bg-gray-100 p-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* first name input field */}
      <Box className="flex flex-row items-center">
        <FormInputText name="firstName" control={control} label="First Name" />
      </Box>

      {/* last name input field */}
      <Box className="flex flex-row items-center">
        <FormInputText name="lastName" control={control} label="Last Name" />
      </Box>

      {/* username input field */}
      <Box className="flex flex-row items-center">
        <FormInputText
          name="username"
          control={control}
          label="Username"
          required
          inputProps={register('username', {
            required: true,
          })}
        />
        {errors.username && (
          <span className="text-red-600">This field is required</span>
        )}
      </Box>

      {/* password input field */}
      <Box className="flex flex-row items-center">
        <FormInputText
          name="password"
          control={control}
          label="Password"
          type="password"
          required
          inputProps={register('password', {
            required: true,
            minLength: 6,
          })}
        />
        {errors.password && (
          <span className="text-red-600">
            Password must be at least 6 characters long
          </span>
        )}
      </Box>

      {/* email input field */}
      <Box className="flex flex-row items-center">
        <FormInputText
          name="email"
          control={control}
          label="Email"
          required
          inputProps={register('email', {
            required: true,
            pattern: /\S+@\S+\.\S+/,
          })}
        />
        {errors.email && <span className="text-red-600">Invalid email</span>}
      </Box>

      {/* reset button */}
      <Box className="flex flex-row justify-center space-x-3">
        <Button variant="outlined" type="reset" onClick={() => reset()}>
          Reset
        </Button>

        {/* submit button */}
        <Button
          variant="contained"
          type="submit"
          onClick={handleSubmit(onSubmit)}
          disabled={!isValid}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
}
