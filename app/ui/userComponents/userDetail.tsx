import { fetchUserById } from '@/app/lib/data';
import { User } from '@/app/lib/definitions';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import UserDetailsSkeleton from '../skeleton/userDetailsSkeleton';

// UserDetails component
export default async function UserDetails({ id }: { id: number }) {
  const user = await fetchUserById(id);
  const { first_name, last_name, email, avatar } = (user as User) || {};

  return (
    <>
      {!user ? (
        <UserDetailsSkeleton />
      ) : (
        <>
          <Avatar
            alt={`${first_name} ${last_name}`}
            src={avatar}
            className="m-4 h-40 w-40"
          />
          <Box className="flex flex-col items-center">
            <Box className="flex h-8 flex-row items-baseline">
              <b>First Name:</b>
              <p className="ml-2">{first_name}</p>
            </Box>
            <Box className="flex h-8 flex-row items-baseline">
              <b>Last Name:</b>
              <p className="ml-2">{last_name}</p>
            </Box>
            <Box className="mb-8 flex h-8 flex-row items-baseline">
              <b>Email:</b>
              <p className="ml-2">{email}</p>
            </Box>
          </Box>
        </>
      )}
    </>
  );
}
