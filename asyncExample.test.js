const fetchData = require('./fetchData')

describe('Test async await',()=>{

    it.skip('Non async example',()=>{
        const data = fetchData()
        expect(data).toBe('John')
    })

    it('Async example',async ()=>{
        const data = await fetchData()
        expect(data).toBe('John')
    })

})