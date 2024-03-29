import { z } from 'zod';
import { VehicleZodSchema } from './IVehicle';

const MotorcycleZodSchema = VehicleZodSchema.extend({
  category: z.enum([
    'Street',
    'Custom',
    'Trail',
  ]),
  engineCapacity: z.number().int().positive().max(2500),
});

type IMotorcycle = z.infer<typeof MotorcycleZodSchema>;

export { MotorcycleZodSchema, IMotorcycle };