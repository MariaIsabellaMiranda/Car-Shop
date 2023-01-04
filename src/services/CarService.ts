import { IModel } from '../interfaces/IModel';
import { CarZodSchema, ICar } from '../interfaces/ICar';
import { IService } from '../interfaces/IService';
import { ErrorTypes } from '../errors/catalog';

class CarService implements IService<ICar> {
  private _cars:IModel<ICar>;

  constructor(model:IModel<ICar>) {
    this._cars = model;
  }

  public async create(obj: ICar): Promise<ICar> {
    const parsed = CarZodSchema.safeParse(obj);
    if (!parsed.success) {
      throw parsed.error;
    }
    return this._cars.create(obj);
  }

  public async read(): Promise<ICar[]> {
    return this._cars.read();
  }

  public async readOne(_id: string): Promise<ICar | null> {
    if (_id.length < 24) throw new Error(ErrorTypes.InvalidMongoId);
    
    const car = await this._cars.readOne(_id);

    if (!car) throw Error(ErrorTypes.EntityNotFound);

    return car;
  }

  public async update(_id: string, obj: ICar): Promise<ICar | null> {
    if (_id.length < 24) throw new Error(ErrorTypes.InvalidMongoId);
    if (!obj || JSON.stringify(obj) === '{}') throw Error(ErrorTypes.BodyNotFound);

    const car = await this._cars.update(_id, obj);

    if (!car) throw Error(ErrorTypes.EntityNotFound);

    return car;
  }
}

export default CarService;