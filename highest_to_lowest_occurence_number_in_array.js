let arr = [2,3,5,6,2,4,5];

// [2,5,3,6,4]

{
    2: 2,
    3: 1,
    5: 2,
    6: 1,
    4: 1
}

function hToLelements(arr) {
    let obj = {};
    let results = [];
    arr.forEach((data)=>{
        if(obj[data]) {
            obj[data]++;
        } else {
            obj[data] = 1;
        }
    });

    const sortable = Object.fromEntries(Object.entries(maxSpeed).sort(([,a],[,b]) => a-b));
    return Object.keys(sortable)
}
hToLelements(arr);
