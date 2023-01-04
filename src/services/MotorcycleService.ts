import { IModel } from '../interfaces/IModel';
import { IMotorcycle, MotorcycleZodSchema } from '../interfaces/IMotorcycle';
import { IService } from '../interfaces/IService';
import { ErrorTypes } from '../errors/catalog';

class MotorcycleService implements IService<IMotorcycle> {
  private _motorcycles:IModel<IMotorcycle>;

  constructor(model:IModel<IMotorcycle>) {
    this._motorcycles = model;
  }

  public async create(obj: IMotorcycle): Promise<IMotorcycle> {
    const parsed = MotorcycleZodSchema.safeParse(obj);
    if (!parsed.success) {
      throw parsed.error;
    }
    return this._motorcycles.create(obj);
  }

  public async read(): Promise<IMotorcycle[]> {
    return this._motorcycles.read();
  }

  public async readOne(_id: string): Promise<IMotorcycle | null> {
    if (_id.length < 24) throw new Error(ErrorTypes.InvalidMongoId);
    
    const car = await this._motorcycles.readOne(_id);

    if (!car) throw Error(ErrorTypes.EntityNotFound);

    return car;
  }

  public async update(_id: string, obj: IMotorcycle): Promise<IMotorcycle | null> {
    if (_id.length < 24) throw new Error(ErrorTypes.InvalidMongoId);
    if (!obj || JSON.stringify(obj) === '{}') throw Error(ErrorTypes.BodyNotFound);

    const car = await this._motorcycles.update(_id, obj);

    if (!car) throw Error(ErrorTypes.EntityNotFound);

    return car;
  }

  public async delete(_id: string): Promise<IMotorcycle | void> {
    if (_id.length < 24) throw new Error(ErrorTypes.InvalidMongoId);
    
    const carDeleted = await this._motorcycles.delete(_id);

    if (!carDeleted) throw Error(ErrorTypes.EntityNotFound);
  }
}

export default MotorcycleService;