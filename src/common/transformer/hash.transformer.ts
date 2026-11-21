import { Transform } from 'class-transformer';
import * as argon2 from 'argon2';
import { validateSync } from 'class-validator';

export function Hash() {
  return Transform(
    async ({ value }) => hash(value),
    { toClassOnly: true },
  );
}

export function hash(value: string) {
  if (typeof value !== 'string' || !value) {
    return value;
  }

  return argon2.hash(value, {
    type: argon2.argon2id,
  });
}