const setUpSuite = () => console.log('Before Test Suite')
const tearDownSuite = () => console.log('Test Suite Complete')

describe('New account creation checks',() =>{
    beforeAll(() =>setUpSuite());
    afterAll(() => tearDownSuite());

    it('New account 1 created',() =>{
        const account = 'account1'
        expect(account).toEqual('account1')
    })
    it('New account 2 created',() =>{
        const account = 'account2'
        expect(account).toEqual('account2')
    })
})