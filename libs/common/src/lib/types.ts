/**
 * Exclude properties from the type
 * @example
 * interface User {
 *   id: string;
 *   name: string;
 *   age: number;
 * }
 *
 * type UserWithoutId = Omit<User, 'id'>;
 *
 * type UserWithoutId {
 *   name: string;
 *   age: number;
 * }
 *
 * type UserWithoutIdAge = Omit<User, 'id' | 'age'>;
 *
 * type UserWithoutIdAge {
 *   name: string;
 * }
 */
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

/**
 * Represent a Class
 */
export interface Constructor<T> extends Function {
  new (...args: any[]): T;
}
