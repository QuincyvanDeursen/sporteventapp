export enum Type {
  Workshop = 'Workshop',
  Groepsles = 'Groepsles',
  Wedstrijd = 'Wedstrijd',
  Seminar = 'Seminar',
  TechniekSessie = 'Techniek Sessie',
  Expo = 'Expo',
  Lezing = 'Lezing',
  Anders = 'anders',
}

export interface Event {
  id: string;
  title: string;
  description: string;
  price: number;
  date: Date;
  durationInMin: number;
  type?: Type;
}
