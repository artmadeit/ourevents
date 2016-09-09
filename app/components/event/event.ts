export interface Event{
    id?: string;
    name: string;
    description?: string;
    location: Location;
}

export interface Location {
  name: string;
  latitude?: number;
  longitude?: number;
}