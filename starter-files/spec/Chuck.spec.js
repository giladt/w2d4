describe('Chuck', ()=>{
  let chuck;
  const joke = 'Chuck Norris can divide by zero';

  const mockMath = Object.create(window.Math);
  mockMath.random = () => {
    return 0.5;
  };

  window.Math = mockMath;

  beforeEach(()=>{
    chuck = new Chuck();
  });

  describe('Add Joke', ()=>{
    it('Should add a joke',()=>{
      chuck.addJoke(joke);
      expect(chuck.jokes).toContain(joke);
    });
  });

  //mocking a random number for the test of getRandomJoke
  describe('get a random Joke', () => {
    it('Should return 0.5',() => {
      expect(Math.random()).toEqual(0.5);
    });
    
    it('Should get a random joke', () => {
      expect(chuck.getRandomJoke()).toEqual('Chuck Norris is the only man to ever defeat a brick wall in a game of tennis');
    });
    
  });

});