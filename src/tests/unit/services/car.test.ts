import * as sinon from 'sinon';
import { expect } from 'chai';
import CarModel from '../../../models/CarModel';
import CarService from '../../../services/CarService';
import { ZodError } from 'zod';
import {
  carsMockStatusNot,
  carsMockWithIdStatusNot,
  carsMockStatusTrue,
  carsMockStatusFalse,
  errorCarsMock
} from '../mocks/carsMocks';


describe('CarService', () => {
  const carModel = new CarModel();
  const carService = new CarService(carModel);

  before(async () => {
    sinon
      .stub(carModel, 'create')
      .resolves(carsMockWithIdStatusNot);
  });

  after(()=>{
    sinon.restore();
  })

  it('Cria coleção Cars com sucesso', async () => {
    const newCar = await carService.create(carsMockStatusNot);

    expect(newCar).to.be.deep.equal(carsMockWithIdStatusNot);
  });

  it('Erro ao tentar criar coleção Car', async () => {
    let error;
			try {
				await carService.create(errorCarsMock);
			} catch (err) {
				error = err
			}

			expect(error).to.be.instanceOf(ZodError);
  });
});