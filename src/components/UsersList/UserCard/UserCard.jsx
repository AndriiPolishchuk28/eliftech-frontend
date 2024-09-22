import { Box, Card, CardContent, Typography } from '@mui/material';
import css from './UserCard.module.css';

const UserCard = ({ fullName, email, birthDate, event }) => {
  return (
    <li>
      <Box sx={{ maxWidth: 275 }}>
        <Card variant="outlined" className={css.item}>
          <CardContent>
            <Typography
              variant="h2"
              gutterBottom
              sx={{ color: 'text.secondary', fontSize: 20, mb: 2 }}
            >
              {fullName}
            </Typography>
            <Typography
              variant="h5"
              component="div"
              sx={{ fontSize: 14, mb: 1 }}
            >
              {email}
            </Typography>
            <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
              {birthDate}
            </Typography>
            <Typography variant="body2">{event}</Typography>
          </CardContent>
        </Card>
      </Box>
    </li>
  );
};

export default UserCard;
