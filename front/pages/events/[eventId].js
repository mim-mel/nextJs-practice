import { useRouter } from 'next/router';
import { Fragment } from 'react';

import EventSummary from '@/components/event-detail/event-summary';
import { getEventById } from '@/dummy-data';
import EventLogistics from '@/components/event-detail/event-logistics';
import EventContent from '@/components/event-detail/event-content';

const EventDetailPage = () => {
  const router = useRouter();

  const eventId = router.query.eventId;

  const event = getEventById(eventId);

  // function getEventById(id) {
  //   return DUMMY_EVENTS.find(event => event.id === id);
  // }

  if (!event) {
    return <p>해당 페이지를 찾을 수 없습니다.</p>;
  }

  return (
    <Fragment>
      <EventSummary title={event.title}/>
      <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title}/>
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
};

export default EventDetailPage;
