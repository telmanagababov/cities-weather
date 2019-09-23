# CitiesWeather

## About

An application that presents a current weather situation for 5 predefined cities and provides ability to check detailed weather for a selected city.

## How to use

### Install

Run `npm run i` to install all the required dependencies

### Start

Run `npm run start` to start the application

### Lint

Run `npm run lint` to lint the code

### Test

Run `npm run test` to run project tests

## About the solution

### Libraries / Technologies

The application is developed with Angular 8 and Bootstrap on the client side.

It uses Open Weather Data as weather data provider.

Icons are taken from flaticon resource.

### Decisions

We use 2 modules, one for weather and one for forecast

Each module contains `services`, `components`, `configs`, `models`, `api` sections.

Shared model has the same structure, and can be used by both modules.

Cities configuration as well as communication parameters are set in `environments.ts`
