describe('Hello Ironhack function', ()=>{
  it('Should have function called \'helloIronhack\'.',()=>{
    expect(typeof helloIronhack).toEqual('function');
  });
  it('Should return a string \'Hello Ironhack\'.',()=>{
    expect(helloIronhack()).toEqual('Hello Ironhack');
  });
});