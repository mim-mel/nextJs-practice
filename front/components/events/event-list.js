import EventItem from './event-item';
import classes from './event-list.module.css'

const EventList = props => {
  const { items } = props;

  return (
    <ul className={classes.list}>
      {items.map(item => (
        <EventItem
          key={item.id}
          title={item.title}
          id={item.id}
          date={item.date}
          location={item.location}
          image={item.image}
        />
      ))}
    </ul>
  );
};

export default EventList;
