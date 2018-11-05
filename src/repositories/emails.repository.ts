import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {Emails} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class EmailsRepository extends DefaultCrudRepository<
  Emails,
  typeof Emails.prototype.Id
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Emails, dataSource);
  }
}
