const expect=require('chai').expect;
//const Command=require('../command');
//const commands=require('../commands');
const pipeline=require('../pipeline');

describe('math pipeline', ()=> {
  // describe('set 2 ', ()=> {
  //   it('returns 2', ()=> {
  //     const setCommand= new Command({fn:commands.set,args:2});
  //     setCommand.process('whatever',(err,result)=>{
  //       expect(result).to.equal(2);
  //     })
  //   });
  // });
  describe('set 2 | add 3 | multiply 10', ()=> {
    it('returns 50', ()=> {
      var result = pipeline('set 2 | add 3 | multiply 10');
      expect(result).to.equal(50);
    });
  });
  describe('set 2 | add 3 | multiply 10 | negate', ()=> {
    it('returns -50', ()=> {
      var result = pipeline('set 2 | add 3 | multiply 10 | negate');
      expect(result).to.equal(-50);
    });
  });
  describe('set 2 | add 3 | multiply 10 | negate | divide 25 | negate', ()=> {
    it('returns 2', ()=> {
      var result = pipeline('set 2 | add 3 | multiply 10 | negate | divide 25 | negate');
      expect(result).to.equal(2);
    });
  });
});
