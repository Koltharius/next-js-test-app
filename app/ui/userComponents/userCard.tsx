import { User } from '@/app/lib/definitions';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

// UserCard component
export default function UserCard(User: User) {
  const { id, first_name, last_name, email, avatar } = User;

  return (
    <Card className="flex h-44 w-96 rounded-xl bg-gray-100 p-2 shadow-sm">
      <Box className="flex flex-col">
        <CardActionArea href={`/users/${id}`} className="flex w-auto flex-row">
          <CardMedia
            component="img"
            image={avatar}
            alt={`${first_name} ${last_name}`}
            className="h-40 w-40 rounded-xl"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {first_name} {last_name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {email}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Box>
    </Card>
  );
}
