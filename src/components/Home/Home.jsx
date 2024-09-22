import EventItem from './EventItem/EventItem';
import css from './Home.module.css';

const Home = ({ events }) => {
  return (
    <section className={css.wrapper}>
      <h3 className={css.title}>Events</h3>
      <ul className={css.list}>
        {events.length > 0 &&
          events.map((elem) => <EventItem key={elem.title} {...elem} />)}
      </ul>
    </section>
  );
};

export default Home;
