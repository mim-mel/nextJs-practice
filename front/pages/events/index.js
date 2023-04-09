import EventList from '@/components/events/event-list';
import EventSearch from '@/components/events/events-search';
import { getAllEvents } from '@/dummy-data';

const AllEventsPage = () => {
  const events = getAllEvents();

  // function getAllEvents() {
  //   return DUMMY_EVENTS;
  // }

  return (
    <div>
      <EventSearch />
      <EventList items={events} />
    </div>
  );
};

export default AllEventsPage;
