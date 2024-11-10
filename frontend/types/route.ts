export default interface Route {
  name: number;
  type: string;
  departure: string;
  arrival: string;
  departure_delay: number;
  arrival_delay: number;
  departure_actual: string;
  arrival_actual: string;
  bicycle: number;
  occupancy: number;
  departure_stop: string;
  arrival_stop: string;
}
