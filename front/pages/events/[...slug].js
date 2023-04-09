import { getFilteredEvents } from '@/dummy-data';
import { useRouter } from 'next/router';

import EventList from '@/components/events/event-list';
import ResultsTitle from '@/components/events/results-title';
import { Fragment } from 'react';
import Button from '@/components/ui/button';
import ErrorAlert from '@/components/ui/error-alert';

const FilteredEventsPage = () => {
  const router = useRouter();

  const filterData = router.query.slug;

  if (!filterData) {
    return <p className='center'>Loading</p>;
  }

  console.log(filterData[1]);

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numMonth) ||
    isNaN(numYear) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <Fragment>
        <ErrorAlert>
          <p> 불가능한 필터입니다.입력값을 확인하세요</p>
        </ErrorAlert>
        <div className='center'>
          <Button link='/events'>Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const FilteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!FilteredEvents || FilteredEvents.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>입력한 필터에 대한 이벤트가 없습니다</p>
        </ErrorAlert>
        <div className='center'>
          <Button link='/events'>Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const date = new Date(numYear, numMonth - 1);

  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList items={FilteredEvents} />
    </Fragment>
  );
};

export default FilteredEventsPage;
