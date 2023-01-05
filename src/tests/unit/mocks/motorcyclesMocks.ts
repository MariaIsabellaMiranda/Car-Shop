import { IMotorcycle } from '../../../interfaces/IMotorcycle';

export const motorcycleMockStatusNot:IMotorcycle = {
  model: "Honda CG Titan 125",
  year: 1963,
  color: "red",
  buyValue: 3500,
  category: "Street",
  engineCapacity: 125
}

export const motorcycleMockWithIdStatusNot:IMotorcycle & { _id: string }= {
  _id: "4edd40c86762e0fb12000003",
  model: "Honda CG Titan 125",
  year: 1963,
  color: "red",
  buyValue: 3500,
  category: "Street",
  engineCapacity: 125
}


export const errorMotorcycleMock:IMotorcycle = {
  model: "Honda CG Titan 125",
  year: 1963,
  color: "red",
  buyValue: 3500,
  category: "Street",
  engineCapacity: 0
}

export const invalidIdMotorcycleMock:IMotorcycle & { _id: string }= {
  _id: "4edd40c86762e0fb12000256",
  model: "Honda CG Titan 125",
  year: 1963,
  color: "red",
  buyValue: 3500,
  category: "Street",
  engineCapacity: 125
}

export const errorCharacters: String = 'InvalidMongoId';
export const errorBodyNotFound: String = 'BodyNotFound';
export const errorObjectNotFound: String = 'EntityNotFound';
