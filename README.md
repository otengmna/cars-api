# Cars-API


Cars-API is a REST API that serves information on cars from 2018 - 2021.
It can be used without any API token, membership, registration or payment.

base URL -  https://cars-hev.herokuapp.com/cars-api

Database currently only contains Electric Car information.  I am working to add other car information starting with Hybrids then to Internal Combustion Engines.

## API Methods for Electric Cars
```
Get All Electric Cars
/cars/evs/GetAllEvs

Get All Electric Cars by Make
/cars/evs/GetAllMakes

Get Electric Car Makes by Year
/all-makes-by-year/:carYear

Get All Electric Car Years Available in Database
/all-car-years

Get Electric Car Makes by Year
/cars/evs/all-makes-by-year/:carYear 


Get Electric Car Models by Make
/all-cars/all-makes/all-models-of/:carMake

Get Electric Car Models of year by Make
/all-cars/all-makes/all-models-of/:carYear/:carMake

```
