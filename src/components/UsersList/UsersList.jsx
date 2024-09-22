import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchParticipants } from '../../api/api';
import UserCard from './UserCard/UserCard';
import css from './UsersList.module.css';

const UsersList = () => {
  const { id } = useParams();
  const [participants, setParticipants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getParticipants = async () => {
      const { users } = await fetchParticipants(id);
      setParticipants(users);
      setLoading(false);
    };
    getParticipants();
  }, [id]);

  if (loading) {
    return <p>Loading....</p>;
  }

  return (
    <ul className={css.list}>
      {participants.length ? (
        participants.map((elem) => <UserCard key={elem.fullName} {...elem} />)
      ) : (
        <p>No participants for this event</p>
      )}
    </ul>
  );
};

export default UsersList;
