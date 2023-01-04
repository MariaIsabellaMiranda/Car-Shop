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
  errorCarsMock,
  carsMockWithIdStatusNotArray
} from '../mocks/carsMocks';

describe('CarModel', () => {
  const carModel = new CarModel();

  before(async () => {
    sinon
      .stub(Model, 'create')
      .resolves(carsMockWithIdStatusNot);
      sinon
      .stub(Model, 'find')
      .resolves(carsMockWithIdStatusNotArray);
      sinon
      .stub(Model, 'findOne')
      .resolves(carsMockWithIdStatusNot);
  });

  after(()=>{
    sinon.restore();
  })

  it('Cria coleção Cars com sucesso', async () => {
    const newCar = await carModel.create(carsMockStatusNot);

    expect(newCar).to.be.deep.equal(carsMockWithIdStatusNot);
  });

  it('Lista todos os carros registrados', async () => {
    const newCar = await carModel.read();

    expect(newCar).to.be.deep.equal(carsMockWithIdStatusNotArray);
  });

  it('Lista um único carro através do seu id', async () => {
    const newCar = await carModel.readOne(carsMockWithIdStatusNot._id);

    expect(newCar).to.be.deep.equal(carsMockWithIdStatusNot);
  });

  it('Erro ao passar um id com tamanho menor que 24', async () => {
    let error;
    try {
      const newCar = await carModel.readOne('abc');
    } catch (err) {
      error = err;
    }

    expect(error.message).to.be.eq('Id must have 24 hexadecimal characters');
  });
});