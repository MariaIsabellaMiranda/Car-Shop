import { Model } from 'mongoose';
import * as sinon from 'sinon';
import chai from 'chai';
import { expect } from 'chai';
import CarModel from '../../../models/CarModel';
import {
  carsMockStatusNot,
  carsMockWithIdStatusNot,
  carsMockStatusTrue,
  carsMockStatusFalse,
  errorCarsMock
} from '../mocks/carsMocks';

describe('CarModel', () => {
  const carModel = new CarModel();

  before(async () => {
    sinon
      .stub(Model, 'create')
      .resolves(carsMockWithIdStatusNot);
  });

  after(()=>{
    sinon.restore();
  })

  it('Cria coleção Cars com sucesso', async () => {
    const newCar = await carModel.create(carsMockStatusNot);

    expect(newCar).to.be.deep.equal(carsMockWithIdStatusNot);
  });
});