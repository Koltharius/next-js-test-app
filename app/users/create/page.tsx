import CreateUserForm from '@/app/ui/createUserForm/createUserForm';
import { roboto } from '@/app/ui/fonts';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create Users',
};

export default function Page() {
  return (
    <main>
      <Box>
        <Typography
          variant="h1"
          component="h1"
          className={`${roboto.className} mb-4 text-xl font-semibold md:text-2xl`}
        >
          Create User
        </Typography>
        <CreateUserForm />
      </Box>
    </main>
  );
}
