import { Constructor } from './types';

function create<T>(t: Constructor<T>): T {
  return new t() as T;
}

const fakeFn = () => {
  console.log('fakeFn called');
};

test('should create new object from Constructor', function() {
  const instance = create(Date);
  const target = new Date();
  expect(instance).toBeDefined();
  expect(instance.getDate()).toEqual(target.getDate());
});
