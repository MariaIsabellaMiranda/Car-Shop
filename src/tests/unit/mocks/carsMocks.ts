import { ICar } from '../../../interfaces/ICar';

export const carsMockStatusNot:ICar = {
  model: "Ferrari Maranello",
  year: 1963,
  color: "red",
  buyValue: 3500000,
  doorsQty: 2,
  seatsQty: 2,
}

export const carsMockWithIdStatusNot:ICar & { _id: string }= {
  _id: "4edd40c86762e0fb12000003",
  model: "Ferrari Maranello",
  year: 1963,
  color: "red",
  buyValue: 3500000,
  doorsQty: 2,
  seatsQty: 2,
}


export const errorCarsMock:ICar = {
  model: "Ferrari Maranello",
  year: 1963,
  color: "red",
  buyValue: 3500000,
  doorsQty: 0,
  seatsQty: 1,
}

export const invalidIdCarsMock:ICar & { _id: string }= {
  _id: "4edd40c86762e0fb12000203",
  model: "Ferrari Maranello",
  year: 1963,
  color: "red",
  buyValue: 3500000,
  doorsQty: 2,
  seatsQty: 2,
}

export const errorCharacters: String = 'InvalidMongoId';
export const errorBodyNotFound: String = 'BodyNotFound';
export const errorObjectNotFound: String = 'EntityNotFound';
