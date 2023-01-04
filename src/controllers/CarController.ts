import { Request, Response } from 'express';
import { IService } from '../interfaces/IService';
import { ICar } from '../interfaces/ICar';

class CarController {
  constructor(private _service: IService<ICar>) { }

  public async create(req: Request, res: Response<ICar>):Promise<Response> {
    const data = await this._service.create(req.body);

    return res.status(201).json(data);
  }

  public async read(_req: Request, res: Response<ICar[]>):Promise<Response> {
    const data = await this._service.read();

    return res.status(200).json(data);
  }

  public async readOne(req: Request, res: Response<ICar | null>):Promise<Response> {
    const { id } = req.params;

    const data = await this._service.readOne(id);

    return res.status(200).json(data);
  }

  public async update(req: Request, res: Response<ICar | null>):Promise<Response> {
    const { id } = req.params;

    const data = await this._service.update(id, req.body);

    return res.status(200).json(data);
  }

  public async delete(req: Request, res: Response<ICar | null>):Promise<Response | void> {
    const { id } = req.params;

    await this._service.delete(id);

    return res.status(204).end();
  }
}

export default CarController;