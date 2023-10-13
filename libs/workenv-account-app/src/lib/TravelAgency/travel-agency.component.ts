import {Component, OnInit} from '@angular/core';
import {DriverModel, PassengerModel, TravelDto, VehicleModel} from "@NxAIO/Shared-Lib";

@Component({
  selector: 'nx-aio-travel-agency',
  templateUrl: './travel-agency.component.html',
  styleUrls: ['./travel-agency.component.scss'],
})
export class TravelAgencyComponent {

  constructor() { }



  Vehicles: VehicleModel[] = [
    {model:'Mercedes',year:2022},
    {model:'Audi',year:2024},
    {model:'Volkswagen',year:2022},
    {model:'Bmw',year:2021},
    {model:'Tesla',year:2023},
    {model:'Hyndai',year:2019},

  ]

  Drivers: DriverModel[] = [
    {name:'Lando',licenseType:'D',licenseExpDate:'20-05-2030'},
    {name:'Jost',licenseType:'C',licenseExpDate:'16-09-2035'},
    {name:'Max',licenseType:'C',licenseExpDate:'28-02-2035'},
    {name:'Lewis',licenseType:'C',licenseExpDate:'28-02-2035'},
    {name:'Charles',licenseType:'C',licenseExpDate:'28-02-2035'},
  ]

  Passengers: PassengerModel[] = [
    {firstName:'Jonelle',lastName:'Ewart',age:24},
    {firstName:'Deborah',lastName:'Terry',age:26},
    {firstName:'Kimberley',lastName:'Hancock',age:35},
    {firstName:'Denis',lastName:'Carlson',age:44},
    {firstName:'Charlie',lastName:`O'Conor`,age:57},
    {firstName:'Sarah',lastName:'Cimmich',age:15},
  ]




  Travels : TravelDto[] = [

    {
      driver:this.Drivers[0],
      vehicle: this.Vehicles[0],
      passenger: this.Passengers[0],
      travelDistance:200
    },
    {
      driver:this.Drivers[0],
      vehicle: this.Vehicles[0],
      passenger: this.Passengers[0],
      travelDistance:200
    },
    {
      driver:this.Drivers[0],
      vehicle: this.Vehicles[0],
      passenger: this.Passengers[0],
      travelDistance:200
    },
    {
      driver: {
        name:'Brady',
        licenseType:'c',
        licenseExpDate:'07-11-2040'
      },
      vehicle: {
        model:'Volkswagen',
        year:2016
      },
      passenger: {
        firstName:'Jurgen',
        lastName:'Lubonja',
        age:24
      },
      travelDistance:100
    },
  ]


}
