import { Sensor, Sensordata } from '../services/dataTypes';
import { Type } from '../services/dataTypes';

const date = new Date();

export const SENSORS: Sensor[] = [
    { id: 1, name: 'Sensor 1', installationDate: new Date('2020-1-12')},
    { id: 2, name: 'Sensor 2', installationDate: new Date('2020-1-12')},
    { id: 3, name: 'Sensor 3', installationDate: new Date('2020-1-12')},
    { id: 4, name: 'Sensor 4', installationDate: new Date('2020-1-12')},
    { id: 5, name: 'Sensor 5', installationDate: new Date('2020-1-12')},
    { id: 6, name: 'Sensor 6', installationDate: new Date('2020-1-12')},
    { id: 7, name: 'Sensor 7', installationDate: new Date('2020-1-12')},
    { id: 8, name: 'Sensor 8', installationDate: new Date('2020-1-12')},
    { id: 9, name: 'Sensor 9', installationDate: new Date('2020-1-12')},
];

export const TYPES: Type[] = [
    { id: 1, name: 'Temperatur', unit: '°C' },
    { id: 2, name: 'Geschwindigkeit', unit: 'm/s' }
];

export const SENSORDATAS: Sensordata[] = [
    { id: 1, idSensor: 1, value: 23, idType: 1, timeCreated: new Date('2020-1-12')},
    { id: 3, idSensor: 2, value: 12, idType: 2, timeCreated: new Date('2020-1-12')},
    { id: 2, idSensor: 3, value: 21, idType: 1, timeCreated: new Date('2020-1-12')},
    { id: 4, idSensor: 4, value: 27, idType: 2, timeCreated: new Date('2020-1-12')},

    { id: 5, idSensor: 1, value: 27, idType: 1, timeCreated: new Date('2020-1-12')},
    { id: 6, idSensor: 2, value: 13, idType: 2, timeCreated: new Date('2020-1-12')},
    { id: 7, idSensor: 3, value: 25, idType: 1, timeCreated: new Date('2020-1-12')},
    { id: 8, idSensor: 4, value: 26, idType: 2, timeCreated: new Date('2020-1-12')},

    { id: 9, idSensor: 1, value: 25, idType: 1, timeCreated: new Date('2020-1-12')},
    { id: 10, idSensor: 2, value: 12, idType: 2, timeCreated: new Date('2020-1-12')},
    { id: 11, idSensor: 3, value: 23, idType: 1, timeCreated: new Date('2020-1-12')},
    { id: 12, idSensor: 4, value: 25, idType: 2, timeCreated: new Date('2020-1-12')},

    { id: 13, idSensor: 1, value: 22, idType: 1, timeCreated: new Date('2020-1-12')},
    { id: 14, idSensor: 1, value: 25, idType: 1, timeCreated: new Date('2020-1-12')},
    { id: 15, idSensor: 1, value: 24, idType: 1, timeCreated: new Date('2020-1-12')},
    { id: 16, idSensor: 1, value: 23, idType: 1, timeCreated: new Date('2020-1-12')},

    { id: 17, idSensor: 1, value: 22, idType: 1, timeCreated: new Date('2020-1-12')},
    { id: 18, idSensor: 1, value: 25, idType: 1, timeCreated: new Date('2020-1-12')},
    { id: 19, idSensor: 1, value: 24, idType: 1, timeCreated: new Date('2020-1-12')},
    { id: 20, idSensor: 1, value: 23, idType: 1, timeCreated: new Date('2020-1-12')},
    { id: 21, idSensor: 1, value: 22, idType: 1, timeCreated: new Date('2020-1-12')},
    { id: 22, idSensor: 1, value: 25, idType: 1, timeCreated: new Date('2020-1-12')},
    { id: 23, idSensor: 1, value: 24, idType: 1, timeCreated: new Date('2020-1-12')},
    { id: 24, idSensor: 1, value: 23, idType: 1, timeCreated: new Date('2020-1-12')},
];
