import {Entity, model, property} from '@loopback/repository';

@model()
export class Emails extends Entity {
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
  Email: string;

  @property({
    type: 'number',
    required: true,
  })
  PersonId: number;

  constructor(data?: Partial<Emails>) {
    super(data);
  }
}
