import {IUser} from "../../../models/IUser";
import {EventActionsEnum, SetEventsAction, SetGuestsAction} from "./types";
import {IEvent} from "../../../models/IEvent";
import {AppDispatch} from "../../index";
import UserService from "../../../api/UserService";

export const EventActionCreators = {
  setGuests: (payload: IUser[]): SetGuestsAction => ({type: EventActionsEnum.SET_GUESTS, payload}),
  setEvents: (payload: IEvent[]): SetEventsAction => ({type: EventActionsEnum.SET_EVENTS, payload}),
  fetchGuests: () => async (dispatch: AppDispatch) => {
    try {
      const response = await UserService.getUsers();
      dispatch(EventActionCreators.setGuests(response.data))
    } catch (error) {
      console.log(error)
    }
  },
  createEvent: (event: IEvent) => async (dispatch: AppDispatch) => {
    try {
      const events = localStorage.getItem('events') || '[]';
      const json = JSON.parse(events) as IEvent[];
      json.push(event);
      dispatch(EventActionCreators.setEvents(json))
      localStorage.setItem('events', JSON.stringify(json));
    } catch (error) {
      console.log(error)
    }
  },
  fetchEvents: (username: string) => async(dispatch: AppDispatch) => {
    try {
      const events = localStorage.getItem('events') || '[]';
      const json = JSON.parse(events) as IEvent[];
      const currentUserEvents = json.filter(event => event.author === username || event.guest === username)
      dispatch(EventActionCreators.setEvents(currentUserEvents))
    } catch (error) {
      console.log(error)
    }
  }
}
