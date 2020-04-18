const setUpFirst = () => console.log('Before Test Case')
const tearDown = () => console.log('Test Case Complete')

describe('New account creation checks',() =>{
    beforeEach(() =>setUpFirst());
    afterEach(() => tearDown());

    it('New account 1 created',() =>{
        const account = 'account1'
        expect(account).toEqual('account1')
    })
    it('New account 2 created',() =>{
        const account = 'account2'
        expect(account).toEqual('account2')
    })
})