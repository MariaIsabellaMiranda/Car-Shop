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

  public async read(paramsRead: string): Promise<ICar[]> {
    const cars = this._cars.read(paramsRead);

    if (!cars) throw new Error(ErrorTypes.EntityNotFound);

    return cars;
  }

  public async readOne(_id: string): Promise<ICar | null> {
    const car = await this._cars.readOne(_id);

    if (!car) throw new Error(ErrorTypes.EntityNotFound);

    return car;
  }
}

export default CarService;