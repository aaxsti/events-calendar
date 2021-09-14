import {FC, useEffect, useState} from 'react';
import {Button, Layout, Modal, Row} from "antd";
import EventsCalendar from "../components/EventsCalendar";
import EventForm from "../components/EventForm";
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {IEvent} from "../models/IEvent";

const EventsPage: FC = () => {
  const [modalIsVisible, setModalIsVisible] = useState<boolean>(false)
  const {fetchGuests, createEvent, fetchEvents} = useActions();
  const {guests, events} = useTypedSelector(state => state.event)
  const {user} = useTypedSelector(state => state.auth)

  useEffect(() => {
    fetchGuests()
    fetchEvents(user.username)
  }, []);

  const addNewEvent = (event: IEvent) => {
    setModalIsVisible(false)
    createEvent(event)
  }

  return (
    <Layout>
      <EventsCalendar events={events}/>
      <Row justify="center" style={{margin: '30px 100px'}}>
        <Button
          size="large"
          onClick={() => setModalIsVisible(true)}
        >
          Add event
        </Button>
      </Row>
      <Modal
        title="Add event"
        visible={modalIsVisible}
        footer={null}
        onCancel={() => setModalIsVisible(false)}
      >
        <EventForm guests={guests} submit={addNewEvent}/>
      </Modal>
    </Layout>
  );
}

export default EventsPage;
