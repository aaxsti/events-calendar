import {FC, useEffect, useState} from 'react';
import {Button, Layout, Modal, Row} from "antd";
import EventsCalendar from "../components/EventsCalendar";
import EventForm from "../components/EventForm";
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";

const EventsPage: FC = () => {
  const [modalIsVisible, setModalIsVisible] = useState<boolean>(false)
  const {fetchGuests} = useActions();
  const {guests} = useTypedSelector(state => state.event)

  useEffect(() => {
    fetchGuests()
  }, [fetchGuests]);


  return (
    <Layout>
      <EventsCalendar events={[]}/>
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
        <EventForm guests={guests}/>
      </Modal>
    </Layout>
  );
}

export default EventsPage;
