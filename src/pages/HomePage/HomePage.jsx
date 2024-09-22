import { useEffect, useState } from 'react';
import { fetchEvents } from '../../api/api';
import Home from '../../components/Home/Home';

const HomePage = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    const getEvents = async () => {
      const response = await fetchEvents();
      setEvents(response);
    };
    getEvents();
  }, []);
  return <Home events={events} />;
};

export default HomePage;
