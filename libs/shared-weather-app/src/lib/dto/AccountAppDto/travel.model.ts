import {DriverModel, PassengerModel, VehicleModel} from "@nx-aio/shared-weather-app";


export class TravelDto {
  constructor(
    public driver: DriverModel,
    public vehicle: VehicleModel,
    public passenger: PassengerModel,
    public travelDistance: number
  ) {
  }
}

