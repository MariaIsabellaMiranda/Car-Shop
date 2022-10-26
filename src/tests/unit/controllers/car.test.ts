import * as sinon from 'sinon';
import { expect } from 'chai';
import CarModel from '../../../models/CarModel';
import CarService from '../../../services/CarService';
import { ZodError } from 'zod';
import { NextFunction, Request, Response } from 'express';
import {
  carsMockStatusNot,
  carsMockWithIdStatusNot,
  carsMockStatusTrue,
  carsMockStatusFalse,
  errorCarsMock
} from '../mocks/carsMocks';
import CarController from '../../../controllers/CarController';


describe('CarController', () => {
  const carModel = new CarModel();
  const carService = new CarService(carModel);
  const carController = new CarController(carService);

  const req = {} as Request;
  const res = {} as Response;

  before(async () => {
    sinon
      .stub(carService, 'create')
      .resolves(carsMockWithIdStatusNot);

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  after(()=>{
    sinon.restore();
  })

  it('Cria coleção Cars com sucesso', async () => {
    req.body = carsMockStatusNot;

    await carController.create(req, res);

    expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
    expect((res.json as sinon.SinonStub).calledWith(carsMockWithIdStatusNot)).to.be.true;
  });
});