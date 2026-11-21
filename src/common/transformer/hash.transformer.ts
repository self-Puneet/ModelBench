import { Transform } from 'class-transformer';
import * as argon2 from 'argon2';

export function Hash() {
  return Transform(
    async ({ value }) => {
      if (typeof value !== 'string' || !value) {
        return value;
      }

      return argon2.hash(value, {
        type: argon2.argon2id,
      });
    },
    { toClassOnly: true },
  );
}