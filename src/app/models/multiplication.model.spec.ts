import { Multiplication } from './multiplication.model';

describe('Multiplication', () => {
  it('should create an instance', () => {
    expect(new Multiplication(0,"")).toBeTruthy();
  });
});
