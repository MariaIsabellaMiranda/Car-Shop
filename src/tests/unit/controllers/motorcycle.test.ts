import * as sinon from 'sinon';
import { expect } from 'chai';
import MotorcycleModel from '../../../models/MotorcycleModel';
import MotorcycleService from '../../../services/MotorcycleService';
import MotorcycleController from '../../../controllers/MotorcycleController';
import { Request, Response } from 'express';
import {
  motorcycleMockStatusNot,
  motorcycleMockWithIdStatusNot,
} from '../mocks/motorcyclesMocks';


describe('MotorcycleController', () => {
  const motorcycleModel = new MotorcycleModel();
  const motorcycleService = new MotorcycleService(motorcycleModel);
  const motorcycleController = new MotorcycleController(motorcycleService);

  const req = {} as Request;
  const res = {} as Response;

  before(async () => {
    sinon.stub(motorcycleService, 'create').resolves(motorcycleMockWithIdStatusNot);
    sinon.stub(motorcycleService, 'read').resolves([motorcycleMockWithIdStatusNot]);
    sinon.stub(motorcycleService, 'readOne').resolves(motorcycleMockWithIdStatusNot);
    sinon.stub(motorcycleService, 'update').resolves(motorcycleMockWithIdStatusNot);
    sinon.stub(motorcycleService, 'delete').resolves();

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  after(()=>{
    sinon.restore();
  })

  describe('Método create', () => {
    it('Passando um objeto válido, cadastra um motorcycle com sucesso', async () => {
      req.body = motorcycleMockStatusNot;
  
      await motorcycleController.create(req, res);
  
      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(motorcycleMockWithIdStatusNot)).to.be.true;
    });
  })

  describe('Método read', () => {
    it('Busca todos os motorcycle cadastrados', async () => {
      await motorcycleController.read(req, res);
  
      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith([motorcycleMockWithIdStatusNot])).to.be.true;
    });
  })

  describe('Método readOne', () => {
    it('Busca um único motorcycle com id igual ao passado por params', async () => {
      req.params = { id: "4edd40c86762e0fb12000003" };
  
      await motorcycleController.readOne(req, res);
  
      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(motorcycleMockWithIdStatusNot)).to.be.true;
    });
  })

  describe('Método update', () => {
    it('Passando um objeto válido e um id, atualiza o motorcycle do respectivo id', async () => {
      req.params = { id: "4edd40c86762e0fb12000003" };
      req.body = motorcycleMockStatusNot;
  
      await motorcycleController.update(req, res);
  
      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(motorcycleMockWithIdStatusNot)).to.be.true;
    });
  })

  describe('Método delete', () => {
    it('Passando um id válido, exclui um motorcycle com sucesso', async () => {
      req.params = { id: "4edd40c86762e0fb12000003" };
      res.end = () => {}
  
      await motorcycleController.delete(req, res);
  
      expect((res.status as sinon.SinonStub).calledWith(204)).to.be.true;
    });
  })
});