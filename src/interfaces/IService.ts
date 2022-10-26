export interface IService<T> {
  create(obj: T):Promise<T>,
  // read(paramsRead: string):Promise<T[]>,
  // readOne(_id: string):Promise<T | null>,
}