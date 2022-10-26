import { Request, Response } from 'express';
import { IService } from '../interfaces/IService';
import { ICar } from '../interfaces/ICar';

class CarController {
  constructor(private _service: IService<ICar>) { }

  public async create(req: Request, res: Response) {
    const data = await this._service.create(req.body);

    return res.status(201).json(data);
  }
}

export default CarController;