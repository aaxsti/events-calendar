import {IUser} from "../../../models/IUser";
import {IEvent} from "../../../models/IEvent";

export interface EventState {
  guests: IUser[],
  events: IEvent[];
}

export enum EventActionsEnum {
  SET_GUESTS = 'events/SET_GUESTS',
  SET_EVENTS = 'events/SET_EVENTS',
}

export interface SetGuestsAction {
  type: EventActionsEnum.SET_GUESTS,
  payload: IUser[]
}

export interface SetEventsAction {
  type: EventActionsEnum.SET_EVENTS,
  payload: IEvent[]
}

export type EventAction =
  SetGuestsAction |
  SetEventsAction;
