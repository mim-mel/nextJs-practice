import EventList from "@/components/events/event-list";
import { getAllEvents } from "@/dummy-data";

const AllEventsPage = () => {

  const events = getAllEvents();

  // function getAllEvents() {
  //   return DUMMY_EVENTS;
  // }

  return (
    <div>
      <EventList items={events}/>
    </div>
  );
};

export default AllEventsPage;
