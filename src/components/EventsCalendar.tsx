import {FC} from 'react';
import {Calendar} from "antd";
import {IEvent} from "../models/IEvent";
import {Moment} from "moment";
import {formatDate} from "../utils/date";

interface EventsCalendarProps {
  events: IEvent[]
}

const EventsCalendar: FC<EventsCalendarProps> = ({events}) => {
  const dateCellRender = (value: Moment) => {
    const formattedDate = formatDate(value.toDate());
    const currentDayEvents = events.filter(event => event.date === formattedDate)
    return (
      <div>
        {currentDayEvents.map((event, index) =>
          <div key={index}>
            {event.description}
          </div>
        )}
      </div>
    )
  }

  return (
    <Calendar
      dateCellRender={dateCellRender}
      style={{margin: '0 100px', padding: '0 50px'}}/>
  );
}

export default EventsCalendar;
