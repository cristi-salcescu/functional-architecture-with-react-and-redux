import { filterList } from './selectors';

test('filterList', function(){
    const list = [{
            "hexString": "#000000",
            "name": "Black"
        },
        {
            "hexString": "#800000",
            "name": "Maroon"
        }];
    
    const searchTerm = 'black';
    
    const expectOutput = [{
        "hexString": "#000000",
        "name": "Black"
    }];

    expect(filterList({list, searchTerm})).toEqual(expectOutput);
});