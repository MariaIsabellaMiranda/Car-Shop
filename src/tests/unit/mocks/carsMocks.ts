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

export const carsMockWithIdStatusNotArray:ICar[] & { _id: string }[]= [{
  _id: "4edd40c86762e0fb12000003",
  model: "Ferrari Maranello",
  year: 1963,
  color: "red",
  buyValue: 3500000,
  doorsQty: 2,
  seatsQty: 2,
}]

export const carsMockStatusTrue:ICar = {
  status: true,
  model: "Ferrari Maranello",
  year: 1963,
  color: "red",
  buyValue: 3500000,
  doorsQty: 2,
  seatsQty: 2,
}

export const carsMockStatusFalse:ICar = {
  status: false,
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
  seatsQty: 2,
}