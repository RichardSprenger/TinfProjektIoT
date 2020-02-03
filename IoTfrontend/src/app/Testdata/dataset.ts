import { Sensor, Sensordata } from './sensors';
import { Type } from './sensors';

const date = new Date();

export const SENSORS: Sensor[] = [
    { id: 1, name: 'Sensor 1', installationDate: new Date('2020-1-12')},
    { id: 2, name: 'Sensor 2', installationDate: date},
    { id: 3, name: 'Sensor 3', installationDate: date},
    { id: 4, name: 'Sensor 4', installationDate: date},
    { id: 5, name: 'Sensor 5', installationDate: date},
    { id: 6, name: 'Sensor 6', installationDate: date},
    { id: 7, name: 'Sensor 7', installationDate: date},
    { id: 8, name: 'Sensor 8', installationDate: date},
    { id: 9, name: 'Sensor 9', installationDate: date},
];

export const TYPES: Type[] = [
    { id: 1, name: 'Temperatur', unit: '°C' },
    { id: 2, name: 'Geschwindigkeit', unit: 'm/s' }
];

export const SENSORDATAS: Sensordata[] = [
    { id: 1, idSensor: 1, value: 23, idType: 1, timeCreated: date},
    { id: 3, idSensor: 2, value: 12, idType: 2, timeCreated: date},
    { id: 2, idSensor: 3, value: 21, idType: 1, timeCreated: date},
    { id: 4, idSensor: 4, value: 27, idType: 2, timeCreated: date},

    { id: 5, idSensor: 1, value: 27, idType: 1, timeCreated: date},
    { id: 6, idSensor: 2, value: 13, idType: 2, timeCreated: date},
    { id: 7, idSensor: 3, value: 25, idType: 1, timeCreated: date},
    { id: 8, idSensor: 4, value: 26, idType: 2, timeCreated: date},

    { id: 9, idSensor: 1, value: 25, idType: 1, timeCreated: date},
    { id: 10, idSensor: 2, value: 12, idType: 2, timeCreated: date},
    { id: 11, idSensor: 3, value: 23, idType: 1, timeCreated: date},
    { id: 12, idSensor: 4, value: 25, idType: 2, timeCreated: date}
];
