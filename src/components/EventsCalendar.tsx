import {FC} from 'react';
import {Calendar} from "antd";
import {IEvent} from "../models/IEvent";

interface EventsCalendarProps {
  events: IEvent[]
}

const EventsCalendar: FC<EventsCalendarProps> = () => {
  return (
    <Calendar style={{margin: '0 100px', padding: '0 50px'}}/>
  );
}

export default EventsCalendar;
