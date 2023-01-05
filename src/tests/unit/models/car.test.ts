import { Model } from 'mongoose';
import * as sinon from 'sinon';
import { expect } from 'chai';
import CarModel from '../../../models/CarModel';
import {
  carsMockStatusNot,
  carsMockWithIdStatusNot,
  invalidIdCarsMock,
} from '../mocks/carsMocks';

describe('CarModel', () => {
  const carModel = new CarModel();

  before(async () => {
    sinon.stub(Model, 'create').resolves(carsMockWithIdStatusNot);
    sinon.stub(Model, 'find').resolves([carsMockWithIdStatusNot]);
    sinon.stub(Model, 'findOne')
    .onCall(0).resolves(carsMockWithIdStatusNot)
    .onCall(1).resolves(null);
    sinon.stub(Model, 'findOneAndUpdate')
    .onCall(0).resolves(carsMockWithIdStatusNot)
    .onCall(1).resolves(null);
    sinon.stub(Model, 'findOneAndDelete')
    .onCall(0).resolves(carsMockWithIdStatusNot)
    .onCall(1).resolves(null);
  });

  after(()=>{
    sinon.restore();
  })

  describe('Método create', () => {
    it('Cria coleção Cars com sucesso', async () => {
      const newCar = await carModel.create(carsMockStatusNot);
  
      expect(newCar).to.be.deep.equal(carsMockWithIdStatusNot);
    });
  })

  describe('Método read', () => {
    it('Lista todos os carros registrados', async () => {
      const newCar = await carModel.read();
  
      expect(newCar).to.be.deep.equal([carsMockWithIdStatusNot]);
    });
  })

  describe('Método readOne', () => {
    it('Lista um único carro através do seu id', async () => {
      const newCar = await carModel.readOne(carsMockWithIdStatusNot._id);
  
      expect(newCar).to.be.deep.equal(carsMockWithIdStatusNot);
    });

    it('Retorna null caso o id seja inválido', async () => {
      const newCar = await carModel.readOne(invalidIdCarsMock._id);
  
      expect(newCar).to.be.equal(null);
    });
  })

  describe('Método update', () => {
    it('Atualiza um carro através do seu id', async () => {
      const newCar = await carModel.update(carsMockWithIdStatusNot._id, carsMockStatusNot);
  
      expect(newCar).to.be.deep.equal(carsMockWithIdStatusNot);
    });

    it('Retorna null caso o id seja inválido', async () => {
      const newCar = await carModel.update(invalidIdCarsMock._id, carsMockStatusNot);
  
      expect(newCar).to.be.equal(null);
    });
  })

  describe('Método delete', () => {
    it('Exclui um carro do db através do seu id', async () => {
      const newCar = await carModel.delete(carsMockWithIdStatusNot._id);
  
      expect(newCar).to.be.deep.equal(carsMockWithIdStatusNot);
    });

    it('Retorna null caso o id seja inválido', async () => {
      const newCar = await carModel.delete(invalidIdCarsMock._id);
  
      expect(newCar).to.be.equal(null);
    });
  })
});