/**
 * Tinf IoT-Project
 * Data provider for IoT data logging
 *
 * OpenAPI spec version: 1.0.2
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs/Observable';

import { Machine } from '../model/machine';
import { Sensor } from '../model/sensor';
import { SensorData } from '../model/sensorData';
import { SensorDataHistory } from '../model/sensorDataHistory';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class DefaultService {

    protected basePath = 'https://localhost/api';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * Adds a new sensor
     * 
     * @param body Sensor object that need to be added
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public addSensor(body: Sensor, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public addSensor(body: Sensor, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public addSensor(body: Sensor, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public addSensor(body: Sensor, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling addSensor.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application.json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<any>(`${this.basePath}/sensor`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Deletes a sensor by Id
     * 
     * @param sensorId Sensor id to delete
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteSensor(sensorId: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteSensor(sensorId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteSensor(sensorId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteSensor(sensorId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (sensorId === null || sensorId === undefined) {
            throw new Error('Required parameter sensorId was null or undefined when calling deleteSensor.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application.json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.delete<any>(`${this.basePath}/sensor/${encodeURIComponent(String(sensorId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get Service and Uptime
     * Return the date of last service and the uptime of the machine
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getMachine(observe?: 'body', reportProgress?: boolean): Observable<Machine>;
    public getMachine(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Machine>>;
    public getMachine(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Machine>>;
    public getMachine(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Machine>(`${this.basePath}/machine`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get all sensors
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getSensor(observe?: 'body', reportProgress?: boolean): Observable<Array<Sensor>>;
    public getSensor(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Sensor>>>;
    public getSensor(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Sensor>>>;
    public getSensor(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Array<Sensor>>(`${this.basePath}/sensor`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get current value from a sensor
     * 
     * @param sensorId ID of sensor
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getSensorById(sensorId: number, observe?: 'body', reportProgress?: boolean): Observable<SensorData>;
    public getSensorById(sensorId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SensorData>>;
    public getSensorById(sensorId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SensorData>>;
    public getSensorById(sensorId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (sensorId === null || sensorId === undefined) {
            throw new Error('Required parameter sensorId was null or undefined when calling getSensorById.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<SensorData>(`${this.basePath}/sensor/${encodeURIComponent(String(sensorId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get value history for single sensor
     * Returns history for single sensor
     * @param sensorId ID of sensor
     * @param from From timestamp
     * @param to To timestamp
     * @param since Since number of hours. Only evaluated if neither &#39;from&#39; nor &#39;to&#39; supplied.
     * @param quantizeTo Quantize to max. number of values. If less values measured, also less values will be returned, i.e. no server-size interpolation.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getSensorHistoryById(sensorId: number, from?: string, to?: string, since?: number, quantizeTo?: number, observe?: 'body', reportProgress?: boolean): Observable<SensorDataHistory>;
    public getSensorHistoryById(sensorId: number, from?: string, to?: string, since?: number, quantizeTo?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SensorDataHistory>>;
    public getSensorHistoryById(sensorId: number, from?: string, to?: string, since?: number, quantizeTo?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SensorDataHistory>>;
    public getSensorHistoryById(sensorId: number, from?: string, to?: string, since?: number, quantizeTo?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (sensorId === null || sensorId === undefined) {
            throw new Error('Required parameter sensorId was null or undefined when calling getSensorHistoryById.');
        }





        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (from !== undefined && from !== null) {
            queryParameters = queryParameters.set('from', <any>from);
        }
        if (to !== undefined && to !== null) {
            queryParameters = queryParameters.set('to', <any>to);
        }
        if (since !== undefined && since !== null) {
            queryParameters = queryParameters.set('since', <any>since);
        }
        if (quantizeTo !== undefined && quantizeTo !== null) {
            queryParameters = queryParameters.set('quantizeTo', <any>quantizeTo);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<SensorDataHistory>(`${this.basePath}/sensor/${encodeURIComponent(String(sensorId))}/history`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Updates an existing sensor
     * 
     * @param body Sensor object that need to be updated
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateSensor(body: Sensor, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public updateSensor(body: Sensor, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public updateSensor(body: Sensor, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public updateSensor(body: Sensor, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling updateSensor.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application.json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application.json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.put<any>(`${this.basePath}/sensor`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
