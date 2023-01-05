import { Model } from 'mongoose';
import * as sinon from 'sinon';
import { expect } from 'chai';
import MotorcycleModel from '../../../models/MotorcycleModel';
import {
  motorcycleMockStatusNot,
  motorcycleMockWithIdStatusNot,
  invalidIdMotorcycleMock,
} from '../mocks/motorcyclesMocks';

describe('MotorcycleModel', () => {
  const motorcycleModel = new MotorcycleModel();

  before(async () => {
    sinon.stub(Model, 'create').resolves(motorcycleMockWithIdStatusNot);
    sinon.stub(Model, 'find').resolves([motorcycleMockWithIdStatusNot]);
    sinon.stub(Model, 'findOne')
    .onCall(0).resolves(motorcycleMockWithIdStatusNot)
    .onCall(1).resolves(null);
    sinon.stub(Model, 'findOneAndUpdate')
    .onCall(0).resolves(motorcycleMockWithIdStatusNot)
    .onCall(1).resolves(null);
    sinon.stub(Model, 'findOneAndDelete')
    .onCall(0).resolves(motorcycleMockWithIdStatusNot)
    .onCall(1).resolves(null);
  });

  after(()=>{
    sinon.restore();
  })

  describe('Método create', () => {
    it('Cria coleção Motorcycle com sucesso', async () => {
      const newCar = await motorcycleModel.create(motorcycleMockStatusNot);
  
      expect(newCar).to.be.deep.equal(motorcycleMockWithIdStatusNot);
    });
  })

  describe('Método read', () => {
    it('Lista todos os motorcycles registrados', async () => {
      const newCar = await motorcycleModel.read();
  
      expect(newCar).to.be.deep.equal([motorcycleMockWithIdStatusNot]);
    });
  })

  describe('Método readOne', () => {
    it('Lista um único motorcycles através do seu id', async () => {
      const newCar = await motorcycleModel.readOne(motorcycleMockWithIdStatusNot._id);
  
      expect(newCar).to.be.deep.equal(motorcycleMockWithIdStatusNot);
    });

    it('Retorna null caso o id seja inválido', async () => {
      const newCar = await motorcycleModel.readOne(invalidIdMotorcycleMock._id);
  
      expect(newCar).to.be.equal(null);
    });
  })

  describe('Método update', () => {
    it('Atualiza um motorcycles através do seu id', async () => {
      const newCar = await motorcycleModel.update(motorcycleMockWithIdStatusNot._id, motorcycleMockStatusNot);
  
      expect(newCar).to.be.deep.equal(motorcycleMockWithIdStatusNot);
    });

    it('Retorna null caso o id seja inválido', async () => {
      const newCar = await motorcycleModel.update(invalidIdMotorcycleMock._id, motorcycleMockStatusNot);
  
      expect(newCar).to.be.equal(null);
    });
  })

  describe('Método delete', () => {
    it('Exclui um motorcycles do db através do seu id', async () => {
      const newCar = await motorcycleModel.delete(motorcycleMockWithIdStatusNot._id);
  
      expect(newCar).to.be.deep.equal(motorcycleMockWithIdStatusNot);
    });

    it('Retorna null caso o id seja inválido', async () => {
      const newCar = await motorcycleModel.delete(invalidIdMotorcycleMock._id);
  
      expect(newCar).to.be.equal(null);
    });
  })
});