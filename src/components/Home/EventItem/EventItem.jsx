import { NavLink } from 'react-router-dom';
import { Box, Card, CardActions, CardContent, Typography } from '@mui/material';
import css from './EventItem.module.css';

const EventItem = ({ title, description, event_date, organizer, _id: id }) => {
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
              {title}
            </Typography>
            <Typography
              variant="h5"
              component="div"
              sx={{ fontSize: 14, mb: 1 }}
            >
              {description}
            </Typography>
            <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
              Organizer: {organizer}
            </Typography>
            <Typography variant="body2">Date: {event_date}</Typography>
          </CardContent>
          <CardActions className={css.links}>
            <NavLink className={css.link} to={`/register/${id}`}>
              Register
            </NavLink>
            <NavLink className={css.link} to={`/participants/${id}`}>
              View
            </NavLink>
          </CardActions>
        </Card>
      </Box>
    </li>
  );
};

export default EventItem;
