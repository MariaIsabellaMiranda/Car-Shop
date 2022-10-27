export interface IModel<T> {
  create(obj: T):Promise<T>,
  read():Promise<T[]>,
  readOne(_id: string):Promise<T | null>,
  // update(paramsUpdate: string, obj: T):Promise<T | null>,
  // delete(paramsDelete: string):Promise<T | null>,
}