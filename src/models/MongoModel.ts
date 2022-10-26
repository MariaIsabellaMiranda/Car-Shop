import { Model } from 'mongoose';
import { IModel } from '../interfaces/IModel';

abstract class MongoModel<T> implements IModel<T> {
  protected _model: Model<T>;

  constructor(model: Model<T>) {
    this._model = model;
  }

  public async create(obj: T): Promise<T> {
    return this._model.create(obj);
  }

  // public async read(paramsRead: string): Promise<T[]> {
  //   return this._model.find({ paramsRead });
  // }

  // public async readOne(_id: string): Promise<T | null> {
  //   return this._model.findOne({ _id });
  // }

  // public update(paramsUpdate: string, obj: T): Promise<T | null> {
  //   return this._model.findOneAndUpdate(paramsUpdate, obj);
  // }

  // public delete(paramsDelete: string): Promise<T | null> {
  //   return this._model.findOneAndDelete({ paramsDelete });
  // }
}

export default MongoModel;