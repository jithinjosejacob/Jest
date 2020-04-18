const multiply = require('./multiply');

describe('Multiply positive scenarios',() =>{
    it('Multiply three and two', ()=>{
        expect(multiply(3,2)).toBe(6);
        expect(multiply(3,2)).toBeGreaterThan(5);
        expect(multiply(3,2)).toBeLessThan(7);
        expect(multiply(3,2)).toBeLessThanOrEqual(6);
    })
    it('Object example',()=>{
        const data = {first: 1};
        data['second'] = 2;
        expect(data).toEqual({first: 1, second: 2});
    })
    it('Multiply four and three', ()=>{
        expect(multiply(4,3)).not.toBe(11);
    })

})