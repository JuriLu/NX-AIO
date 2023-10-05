import {DriverModel, PassengerModel, VehicleModel} from "@NxAIO/Shared-Lib";


export class TravelDto {
  constructor(
    public driver: DriverModel,
    public vehicle: VehicleModel,
    public passenger: PassengerModel,
    public travelDistance: number
  ) {
  }
}

