import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {Addresses} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class AddressesRepository extends DefaultCrudRepository<
  Addresses,
  typeof Addresses.prototype.Id
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Addresses, dataSource);
  }
}
