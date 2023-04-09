import EventList from '@/components/events/event-list';
import EventSearch from '@/components/events/events-search';
import { useRouter } from 'next/router';
import { getAllEvents } from '@/dummy-data';

const AllEventsPage = () => {
  const events = getAllEvents();
  const router = useRouter();

  const findEventsHandler = (year, month) => {
    //경로가 두개이상이기 때문에 슬러그 페이지로 넘어간다
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <div>
      <EventSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </div>
  );
};

export default AllEventsPage;
