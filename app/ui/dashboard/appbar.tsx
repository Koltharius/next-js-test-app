import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function PageAppBar() {
  return (
    <Box className="flex flex-grow">
      <CssBaseline />
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" component="div" className="flex-grow-1">
            Users Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
