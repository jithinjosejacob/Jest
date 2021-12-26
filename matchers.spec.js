const multipy = require('./multiply')
const carStock = [
    'BMW',
    'Tata',
    'Volvo',
];

describe('Suite containing matchers',()=>{

    it('Using to match as string matchers',()=>{
        expect('Liverpool').toMatch(/pool/);
        process.env.ZMATCH_NEW = 'pool';
    })

    it('Using truthiness matchers',()=>{
        const n = null;
        expect(n).toBeNull();
        expect(n).toBeDefined();
        expect(n).not.toBeUndefined();
        expect(n).not.toBeTruthy();
        expect(n).toBeFalsy();
    })
    
    it('Car stock using toContain matcher',() =>{
        expect(carStock).toContain('Volvo');
    })
})