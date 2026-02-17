
export interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export interface ScheduleItem {
  time: string;
  event: string;
  description: string;
}

export interface Speaker {
  id: string;
  name: string;
  title: string;
  bio: string;
  imageUrl: string;
}

export interface Pillar {
  title: string;
  description: string;
  icon: string;
}
