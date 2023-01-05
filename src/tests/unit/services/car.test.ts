import * as sinon from 'sinon';
import { expect } from 'chai';
import CarModel from '../../../models/CarModel';
import CarService from '../../../services/CarService';
import { ZodError } from 'zod';
import {
  carsMockStatusNot,
  carsMockWithIdStatusNot,
  errorBodyNotFound,
  errorCarsMock,
  errorCharacters,
  errorObjectNotFound,
} from '../mocks/carsMocks';


describe('CarService', () => {
  const carModel = new CarModel();
  const carService = new CarService(carModel);

  before(async () => {
    sinon.stub(carModel, 'create').resolves(carsMockWithIdStatusNot);
    sinon.stub(carModel, 'read').resolves([carsMockWithIdStatusNot]);
    sinon.stub(carModel, 'readOne')
    .onCall(0).resolves(carsMockWithIdStatusNot)
    .onCall(1).resolves(null);
    sinon.stub(carModel, 'update')
    .onCall(0).resolves(carsMockWithIdStatusNot)
    .onCall(1).resolves(null);
    sinon.stub(carModel, 'delete')
    .onCall(0).resolves(carsMockWithIdStatusNot)
    .onCall(1).resolves(null);
  });

  after(()=>{
    sinon.restore();
  })

  describe('Método create', () => {
    describe('Testa caso de sucesso', () => {
      it('Cria coleção Cars com sucesso', async () => {
        const newCar = await carService.create(carsMockStatusNot);
    
        expect(newCar).to.be.deep.equal(carsMockWithIdStatusNot);
      });
    })

    describe('Testa caso de erro', () => {
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
  });

  describe('Método read', () => {
    describe('Testa caso de sucesso', () => {
      it('Busca lista com todos os carros', async () => {
        const cars = await carService.read();
    
        expect(cars).to.be.deep.equal([carsMockWithIdStatusNot]);
      });
    })
  });

  describe('Método readOne', () => {
    describe('Testa caso de sucesso', () => {
      it('Busca um carro específico de acordo com id passado', async () => {
        const car = await carService.readOne(carsMockWithIdStatusNot._id);
    
        expect(car).to.be.deep.equal(carsMockWithIdStatusNot);
      });
    })

    describe('Testa caso de erro', () => {
      it('Erro ao passar um id com menos de 24 caracteres', async () => {
        let error;
      		try {
      			await carService.readOne("4edd40c86762e0fb120002");
      		} catch (err: any) {
      			error = err
      		}
    
      		expect(error.message).to.be.equal(errorCharacters);
      });

      it('Erro ao passar um id inválido', async () => {
        let error;
      		try {
      			await carService.readOne("4edd40c86762e0fb12000226");
      		} catch (err: any) {
      			error = err
      		}
    
      		expect(error.message).to.be.equal(errorObjectNotFound);
      });
    });
  });

  describe('Método update', () => {
    describe('Testa caso de sucesso', () => {
      it('Atualiza um carro no db de acordo com id passado', async () => {
        const car = await carService.update(carsMockWithIdStatusNot._id, carsMockStatusNot);
    
        expect(car).to.be.deep.equal(carsMockWithIdStatusNot);
      });
    })

    describe('Testa caso de erro', () => {
      it('Erro ao passar um id com menos de 24 caracteres', async () => {
        let error;
      		try {
      			await carService.update("4edd40c86762e0fb120002", carsMockStatusNot);
      		} catch (err: any) {
      			error = err
      		}
    
      		expect(error.message).to.be.equal(errorCharacters);
      });

      it('Erro ao passar um body vazio', async () => {
        let error;
      		try {
      			await carService.update("4edd40c86762e0fb12000203", {} as typeof carsMockStatusNot);
      		} catch (err: any) {
      			error = err
      		}
    
      		expect(error.message).to.be.equal(errorBodyNotFound);
      });

      it('Erro ao passar um id inválido', async () => {
        let error;
      		try {
      			await carService.update("4edd40c86762e0fb12000226", carsMockStatusNot);
      		} catch (err: any) {
      			error = err
      		}
    
      		expect(error.message).to.be.equal(errorObjectNotFound);
      });
    });
  });

  describe('Método delete', () => {
    describe('Testa caso de sucesso', () => {
      it('Exclui um carro com sucesso de acordo com id passado', async () => {
        let error;
      		try {
      			await carService.delete(carsMockWithIdStatusNot._id);
      		} catch (err: any) {
      			error = err
      		}
    
      		expect(error).to.be.undefined;
      });
    });

    describe('Testa caso de erro', () => {
      it('Erro ao passar um id com menos de 24 caracteres', async () => {
        let error;
      		try {
      			await carService.delete("4edd40c86762e0fb120002");
      		} catch (err: any) {
      			error = err
      		}
    
      		expect(error.message).to.be.equal(errorCharacters);
      });

      it('Erro ao passar um id inválido', async () => {
        let error;
      		try {
      			await carService.delete("4edd40c86762e0fb12000226");
      		} catch (err: any) {
      			error = err
      		}
    
      		expect(error.message).to.be.equal(errorObjectNotFound);
      });
    });
  });
});