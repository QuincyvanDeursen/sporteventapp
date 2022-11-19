import { SportEventType } from './SportEventType';

export interface SportEvent {
  id: string;
  title: string;
  description: string;
  price: number;
  date: Date;
  durationInMin: number;
  type?: SportEventType;
}
