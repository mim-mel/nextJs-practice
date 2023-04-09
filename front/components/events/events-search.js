import Button from '@/components/ui/button';
import classes from './event-search.module.css';

const EventSearch = props => {
  return (
    <form className={classes.form}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor='year'>Year</label>
          <select id='year'>
            <option>2022</option>
            <option>2023</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor='month'>Month</label>
          <select id='month'>
            <option value='1'>January</option>
            <option value='2'>Febuary</option>
            <option value='3'>March</option>
            <option value='4'>April</option>
            <option value='5'>May</option>
            <option value='6'>June</option>
            <option value='7'>July</option>
            <option value='8'>August</option>
            <option value='9'>September</option>
            <option value='10'>October</option>
            <option value='11'>November</option>
            <option value='12'>December</option>
          </select>
        </div>
        <Button>Find Events</Button>
      </div>
    </form>
  );
};

export default EventSearch;
