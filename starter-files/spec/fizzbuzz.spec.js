// Should return a number, 
// divisible by 3: fizz, 
// divisible by 5: buzz,
// divisible by 3 and 5: fizzbuzz

describe('FizzBuzz', () => {
  it('Should return a number', ()=>{
    expect(typeof fizzBuzz).toBe('function');
  });

  it('Should return 1 for 1',()=>{
    expect(fizzBuzz(1)).toEqual(1);
  });

  it('Should return 2 for 2',()=>{
    expect(fizzBuzz(2)).toEqual(2);
  });

  it('Should return fizz for 3',()=>{
    expect(fizzBuzz(3)).toEqual('fizz');
  });

  it('Should return fizz for 6',()=>{
    expect(fizzBuzz(6)).toEqual('fizz');
  });

  it('Should return fizz for 5',()=>{
    expect(fizzBuzz(5)).toEqual('buzz');
  });

  it('Should return fizz for 5',()=>{
    expect(fizzBuzz(10)).toEqual('buzz');
  });

  it('Should return fizzbuzz for 15',()=>{
    expect(fizzBuzz(15)).toEqual('fizzbuzz');
  });

  it('Should return fizzbuzz for 30',()=>{
    expect(fizzBuzz(30)).toEqual('fizzbuzz');
  });

});
