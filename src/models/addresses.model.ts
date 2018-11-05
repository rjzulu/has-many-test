import {Entity, model, property} from '@loopback/repository';

@model()
export class Addresses extends Entity {
  @property({
    type: 'number',
    id: true,
    required: true,
  })
  Id: number;

  @property({
    type: 'string',
    required: true,
  })
  Address: string;

  @property({
    type: 'string',
    required: true,
  })
  City: string;

  @property({
    type: 'number',
    required: true,
  })
  PersonId: number;

  constructor(data?: Partial<Addresses>) {
    super(data);
  }
}
