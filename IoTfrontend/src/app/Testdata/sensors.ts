export class Sensor {
    id: Number;
    name: String;
    installation_date: Date;
};

export class SensorDisplay {
    id: Number;
    name: String;
    lastvalue: Number;
    id_type: Number;
    timeCreated: Date;
}

export class Sensordata {
    id: Number;
    id_Sensor: Number;
    value: Number;
    id_type: Number;
    timeCreated: Date;
};

export class Machine {
    id: Number;
    name: String;
    uptime: Number;
    lastService: Date;
};

export class User {
    id: Number;
    name: String;
    pwd: String;
};

export class Type {
    id: Number;
    name: String;
    unit: String;
};