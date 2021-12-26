var itemStock =[
 {'Id':'1', 'ItemName':'Razors', 'Stock':'10' },
 {'Id':'2', 'ItemName':'Socks', 'Stock':'1'  },
 {'Id':'3', 'ItemName':'Lungi', 'Stock':'5' },
 {'Id':'4', 'ItemName':'Socks', 'Stock':'2'  },
];

function filterItemStock(arr, key, term){
    return arr.filter(function(obj){
        return obj[key] === term
    });
}

describe('SnapShot Testing',()=>{

    it('Nonsnapshot - Return all item with matching id',()=>{
        expect (filterItemStock(itemStock, 'Id' ,'1')).toEqual([
            {'Id':'1', 'ItemName':'Razors', 'Stock':'10' }
        ])
    })
    it('Nonsnapshot - all items with matching Name',()=>{
        expect (filterItemStock(itemStock, 'ItemName' ,'Socks')).toEqual([
            {'Id':'2', 'ItemName':'Socks', 'Stock':'1' },
            {'Id':'4', 'ItemName':'Socks', 'Stock':'2' }
        ])
    })

    it('Snapshot - Return all item with matching id',()=>{
        expect (filterItemStock(itemStock, 'Id' ,'1')).toMatchSnapshot()
    })
    
    it('Snapshot - Return all items with matching Name',()=>{
        expect (filterItemStock(itemStock, 'ItemName' ,'Socks')).toMatchSnapshot()
    })

})
