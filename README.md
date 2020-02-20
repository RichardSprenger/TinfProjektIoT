/* --------------------------------
1. Topic Introduction


This Application shows Data given by machine sensors in a graphical way.
Therefore you can choose between differten options.

1. Dashboard
 - Show all Sensors and the Data in a Graph by a Timeframe or an amount of Datapoints
2.
 - 
 ... -> TODO continue list hear!

/* --------------------------------
2. Topic
This Documentation is Divided into three parts

1. Angular Project
2. Restful API
3. Data Generator


1. Angular Project

1.1 General Overview

    - The Sides are rendered into the dorm with Angular routing
    -   - The Main page is, after the app.component.ts where the router-outlet is placed, the app/components/sidebar/sidebar.component.ts
    - The other pages are rendered onto this component
    
    - The Sidebar Component
    - The Sidebar houses the important facts of the machine
    -   - The last inspection is displayed
    -   - The predicted failure is displayed
    -   - The uptime is Displayed
    -   - The last value of each sensor is displayed

    - The Dashboard Component
    -   - Shows a grid of all sensors.
    -   -   - Each grid has a graph with the individual data from the sensor displayed

    - The Detailview Component  
    -   -

    - The Adminview Component
    -   -

1.2 Services

1.3 Functions

2. Restful API

1.1 General Overview

1.2 