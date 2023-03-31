import EventItem from './event-item';

const EventList = props => {
  const { items } = props;

  return (
    <ul>
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
