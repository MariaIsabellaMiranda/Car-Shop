import * as sinon from 'sinon';
import { expect } from 'chai';
import CarModel from '../../../models/CarModel';
import CarService from '../../../services/CarService';
import { Request, Response } from 'express';
import {
  carsMockStatusNot,
  carsMockWithIdStatusNot,
} from '../mocks/carsMocks';
import CarController from '../../../controllers/CarController';


describe('CarController', () => {
  const carModel = new CarModel();
  const carService = new CarService(carModel);
  const carController = new CarController(carService);

  const req = {} as Request;
  const res = {} as Response;

  before(async () => {
    sinon.stub(carService, 'create').resolves(carsMockWithIdStatusNot);
    sinon.stub(carService, 'read').resolves([carsMockWithIdStatusNot]);
    sinon.stub(carService, 'readOne').resolves(carsMockWithIdStatusNot);
    sinon.stub(carService, 'update').resolves(carsMockWithIdStatusNot);
    sinon.stub(carService, 'delete').resolves();

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  after(()=>{
    sinon.restore();
  })

  describe('Método create', () => {
    it('Passando um objeto válido, cadastra um carro com sucesso', async () => {
      req.body = carsMockStatusNot;
  
      await carController.create(req, res);
  
      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carsMockWithIdStatusNot)).to.be.true;
    });
  })

  describe('Método read', () => {
    it('Busca todos os carros cadastrados', async () => {
      await carController.read(req, res);
  
      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith([carsMockWithIdStatusNot])).to.be.true;
    });
  })

  describe('Método readOne', () => {
    it('Busca um único carro com id igual ao passado por params', async () => {
      req.params = { id: "4edd40c86762e0fb12000003" };
  
      await carController.readOne(req, res);
  
      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carsMockWithIdStatusNot)).to.be.true;
    });
  })

  describe('Método update', () => {
    it('Passando um objeto válido e um id, atualiza o carro do respectivo id', async () => {
      req.params = { id: "4edd40c86762e0fb12000003" };
      req.body = carsMockStatusNot;
  
      await carController.update(req, res);
  
      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carsMockWithIdStatusNot)).to.be.true;
    });
  })

  describe('Método delete', () => {
    it('Passando um id válido, exclui um carro com sucesso', async () => {
      req.params = { id: "4edd40c86762e0fb12000003" };
      res.end = () => {}
  
      await carController.delete(req, res);
  
      expect((res.status as sinon.SinonStub).calledWith(204)).to.be.true;
    });
  })
});