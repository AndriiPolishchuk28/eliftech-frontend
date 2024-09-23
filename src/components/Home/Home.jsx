import { useState, useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Filters from '../Filters/Filters';
import EventItem from './EventItem/EventItem';
import css from './Home.module.css';
import { fetchEvents } from '../../api/api';

const Home = () => {
  const [events, setEvents] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [field, setField] = useState('');
  const [order, setOrder] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getEvents = async () => {
      const { result, totalPages } = await fetchEvents(page, field, order);
      setEvents(result);
      setTotalPages(Number(totalPages));
      setLoading(false);
    };
    getEvents();
  }, [page, field, order]);

  const handleChange = (event, value) => {
    setPage(value);
  };
  if (loading) {
    return <p>Loading.....</p>;
  }
  return (
    <section className={css.wrapper}>
      <h3 className={css.title}>Events</h3>
      <Filters onFieldChange={setField} onOrderChange={setOrder} />
      <ul className={css.list}>
        {events.length &&
          events.map((elem) => <EventItem key={elem.title} {...elem} />)}
      </ul>
      <Stack className={css.pagination} spacing={2}>
        <Pagination
          page={page}
          onChange={handleChange}
          count={totalPages}
          color="primary"
        />
      </Stack>
    </section>
  );
};

export default Home;
