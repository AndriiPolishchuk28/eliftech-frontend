import { FormControl, InputLabel, Select, MenuItem, Box } from '@mui/material';
import { useState } from 'react';
import css from './Filters.module.css';

const Filters = ({ onFieldChange, onOrderChange }) => {
  const [field, setField] = useState('');
  const [order, setOrder] = useState('');

  const handleChangeField = (event) => {
    const value = event.target.value;
    setField(value);
    onFieldChange(value);
  };
  const handleChangeOrder = (event) => {
    const value = event.target.value;
    setOrder(value);
    onOrderChange(value);
  };

  return (
    <div className={css.select_wrapper}>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="simple-select-label">Sort by</InputLabel>
          <Select
            labelId="simple-select-label"
            id="simple-select"
            value={field}
            label="Age"
            onChange={handleChangeField}
          >
            <MenuItem value="title">Title</MenuItem>
            <MenuItem value="event_date">Event Date</MenuItem>
            <MenuItem value="organizer">Organizer</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="sort-order-label">Order</InputLabel>
          <Select
            labelId="sort-order-label"
            value={order}
            onChange={handleChangeOrder}
          >
            <MenuItem value="asc">Ascending</MenuItem>
            <MenuItem value="desc">Descending</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
};

export default Filters;
