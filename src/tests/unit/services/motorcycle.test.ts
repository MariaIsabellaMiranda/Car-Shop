import * as sinon from 'sinon';
import { expect } from 'chai';
import MotorcycleModel from '../../../models/MotorcycleModel';
import MotorcycleService from '../../../services/MotorcycleService';
import { ZodError } from 'zod';
import {
  motorcycleMockStatusNot,
  motorcycleMockWithIdStatusNot,
  errorBodyNotFound,
  errorMotorcycleMock,
  errorCharacters,
  errorObjectNotFound,
} from '../mocks/motorcyclesMocks';


describe('MotorcycleService', () => {
  const motorcycleModel = new MotorcycleModel();
  const motorcycleService = new MotorcycleService(motorcycleModel);

  before(async () => {
    sinon.stub(motorcycleModel, 'create').resolves(motorcycleMockWithIdStatusNot);
    sinon.stub(motorcycleModel, 'read').resolves([motorcycleMockWithIdStatusNot]);
    sinon.stub(motorcycleModel, 'readOne')
    .onCall(0).resolves(motorcycleMockWithIdStatusNot)
    .onCall(1).resolves(null);
    sinon.stub(motorcycleModel, 'update')
    .onCall(0).resolves(motorcycleMockWithIdStatusNot)
    .onCall(1).resolves(null);
    sinon.stub(motorcycleModel, 'delete')
    .onCall(0).resolves(motorcycleMockWithIdStatusNot)
    .onCall(1).resolves(null);
  });

  after(()=>{
    sinon.restore();
  })

  describe('Método create', () => {
    describe('Testa caso de sucesso', () => {
      it('Cria coleção de Motorcycles com sucesso', async () => {
        const newMotorcycle = await motorcycleService.create(motorcycleMockStatusNot);
    
        expect(newMotorcycle).to.be.deep.equal(motorcycleMockWithIdStatusNot);
      });
    })

    describe('Testa caso de erro', () => {
      it('Erro ao tentar criar coleção Motorcycles', async () => {
        let error;
      		try {
      			await motorcycleService.create(errorMotorcycleMock);
      		} catch (err) {
      			error = err
      		}
    
      		expect(error).to.be.instanceOf(ZodError);
      });
    });
  });

  describe('Método read', () => {
    describe('Testa caso de sucesso', () => {
      it('Busca lista com todos os motorcycles', async () => {
        const motorcycles = await motorcycleService.read();
    
        expect(motorcycles).to.be.deep.equal([motorcycleMockWithIdStatusNot]);
      });
    })
  });

  describe('Método readOne', () => {
    describe('Testa caso de sucesso', () => {
      it('Busca um motorcycles específico de acordo com id passado', async () => {
        const motorcycle = await motorcycleService.readOne(motorcycleMockWithIdStatusNot._id);
    
        expect(motorcycle).to.be.deep.equal(motorcycleMockWithIdStatusNot);
      });
    })

    describe('Testa caso de erro', () => {
      it('Erro ao passar um id com menos de 24 caracteres', async () => {
        let error;
      		try {
      			await motorcycleService.readOne("4edd40c86762e0fb120002");
      		} catch (err: any) {
      			error = err
      		}
    
      		expect(error.message).to.be.equal(errorCharacters);
      });

      it('Erro ao passar um id inválido', async () => {
        let error;
      		try {
      			await motorcycleService.readOne("4edd40c86762e0fb12000226");
      		} catch (err: any) {
      			error = err
      		}
    
      		expect(error.message).to.be.equal(errorObjectNotFound);
      });
    });
  });

  describe('Método update', () => {
    describe('Testa caso de sucesso', () => {
      it('Atualiza um motorcycles no db de acordo com id passado', async () => {
        const motorcycle = await motorcycleService.update(motorcycleMockWithIdStatusNot._id, motorcycleMockStatusNot);
    
        expect(motorcycle).to.be.deep.equal(motorcycleMockWithIdStatusNot);
      });
    })

    describe('Testa caso de erro', () => {
      it('Erro ao passar um id com menos de 24 caracteres', async () => {
        let error;
      		try {
      			await motorcycleService.update("4edd40c86762e0fb120002", motorcycleMockStatusNot);
      		} catch (err: any) {
      			error = err
      		}
    
      		expect(error.message).to.be.equal(errorCharacters);
      });

      it('Erro ao passar um body vazio', async () => {
        let error;
      		try {
      			await motorcycleService.update("4edd40c86762e0fb12000203", {} as typeof motorcycleMockStatusNot);
      		} catch (err: any) {
      			error = err
      		}
    
      		expect(error.message).to.be.equal(errorBodyNotFound);
      });

      it('Erro ao passar um id inválido', async () => {
        let error;
      		try {
      			await motorcycleService.update("4edd40c86762e0fb12000226", motorcycleMockStatusNot);
      		} catch (err: any) {
      			error = err
      		}
    
      		expect(error.message).to.be.equal(errorObjectNotFound);
      });
    });
  });

  describe('Método delete', () => {
    describe('Testa caso de sucesso', () => {
      it('Exclui um motorcycle com sucesso de acordo com id passado', async () => {
        let error;
      		try {
      			await motorcycleService.delete(motorcycleMockWithIdStatusNot._id);
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
      			await motorcycleService.delete("4edd40c86762e0fb120002");
      		} catch (err: any) {
      			error = err
      		}
    
      		expect(error.message).to.be.equal(errorCharacters);
      });

      it('Erro ao passar um id inválido', async () => {
        let error;
      		try {
      			await motorcycleService.delete("4edd40c86762e0fb12000226");
      		} catch (err: any) {
      			error = err
      		}
    
      		expect(error.message).to.be.equal(errorObjectNotFound);
      });
    });
  });
});