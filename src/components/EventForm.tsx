import {FC, useState} from 'react';
import {Button, DatePicker, Form, Input, Row, Select} from "antd";
import {rules} from "../utils/rules";
import {IUser} from "../models/IUser";
import {IEvent} from "../models/IEvent";
import {Moment} from "moment";
import {formatDate} from "../utils/date";

interface EventFormProps {
  guests: IUser[]
}

const EventForm: FC<EventFormProps> = ({guests}) => {
  const [event, setEvent] = useState<IEvent>({
    author: '',
    date: '',
    guest: '',
    description: ''
  } as IEvent)

  const selectDate = (date: Moment | null) => {
    if (date) {
      setEvent({...event, date: formatDate(date?.toDate())})
    }
  }

  const submitForm = () => {
    // setEvent({...event, author: })
    console.log(event)
  }

  return (
    <Form onFinish={submitForm}>
      <Form.Item
        label="Event description"
        name="description"
        rules={[rules.required()]}
      >
        <Input
          onChange={e => setEvent({...event, description: e.target.value})}
          value={event.description}
        />
      </Form.Item>

      <Form.Item
        label="Event date"
        name="date"
        rules={[rules.required()]}
      >
        <DatePicker onChange={(date) => selectDate(date)}/>
      </Form.Item>

      <Form.Item
        label="Choose guest"
        name="guest"
        rules={[rules.required()]}
      >
        <Select onChange={(guest: string) => setEvent({...event, guest})}>
          {guests.map(guest =>
            <Select.Option key={guest.username} value={guest.username}>
              {guest.username}
            </Select.Option>)}
        </Select>
      </Form.Item>

      <Row justify="end">
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Create
          </Button>
        </Form.Item>
      </Row>

    </Form>
  );
}

export default EventForm;
