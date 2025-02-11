import { randomUUID } from 'crypto';
import { EntityProps } from './props';
import { ApiProperty } from '@nestjs/swagger';

export abstract class Entity<T extends EntityProps> {
  @ApiProperty()
  protected uuid: string;
  protected props: T = {} as T;

  protected create(props: T, uuid?: string) {
    Object.assign(this.props, props);

    if (!uuid) {
      this.uuid = randomUUID();
      return;
    }
    this.uuid = uuid;
  }

  public toValue() {
    return {
      ...this.props,
      uuid: this.uuid,
    };
  }
}
