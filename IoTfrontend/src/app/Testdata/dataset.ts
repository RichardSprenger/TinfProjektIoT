import { Sensor, Sensordata } from './sensors';
import { Type } from './sensors';

const date = new Date();

export const TYPES: Type[] = [
    { id: 1, name: "Temperatur", unit: "°C" },
    { id: 2, name: "Geschwindigkeit", unit: "m/s" }
];

export const SENSORDATAS: Sensordata[] = [
    { id: 1, id_Sensor: 1, value: 23, id_type: 1, timeCreated: date},
    { id: 3, id_Sensor: 2, value: 12, id_type: 2, timeCreated: date},
    { id: 2, id_Sensor: 3, value: 21, id_type: 1, timeCreated: date},
    { id: 4, id_Sensor: 4, value: 27, id_type: 2, timeCreated: date},

    { id: 5, id_Sensor: 1, value: 27, id_type: 1, timeCreated: date},
    { id: 6, id_Sensor: 2, value: 13, id_type: 2, timeCreated: date},
    { id: 7, id_Sensor: 3, value: 25, id_type: 1, timeCreated: date},
    { id: 8, id_Sensor: 4, value: 26, id_type: 2, timeCreated: date},

    { id: 9, id_Sensor: 1, value: 25, id_type: 1, timeCreated: date},
    { id: 10, id_Sensor: 2, value: 12, id_type: 2, timeCreated: date},
    { id: 11, id_Sensor: 3, value: 23, id_type: 1, timeCreated: date},
    { id: 12, id_Sensor: 4, value: 25, id_type: 2, timeCreated: date}
];
