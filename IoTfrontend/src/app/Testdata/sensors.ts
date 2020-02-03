export class Sensor {
    id: number;
    name: string;
    installationDate: Date;
}

export class SensorDisplay {
    id: number;
    name: string;
    lastvalue: number;
    unit: string;
    timeCreated: Date;
}

export class Sensordata {
    id: number;
    idSensor: number;
    value: number;
    idType: number;
    timeCreated: Date;
}

export class Machine {
    id: number;
    name: string;
    uptime: number;
    lastService: Date;
    nextBreakdown: Date;
}

export class User {
    id: number;
    name: string;
    pwd: string;
}

export class Type {
    id: number;
    name: string;
    unit: string;
}
