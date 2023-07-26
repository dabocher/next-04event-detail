export interface Event {
  id: string;
  eventName: string;
  description: string;
  eventDay: string;
  simulator: string;
  track: string;
  car: string;
  category: string;
  community: string;
  price: number;
  image: string;
  slots: number;
}

export type Events = Event[];

export interface EventsStructure {
  events: Events;
  eventDetail: Event;
}
