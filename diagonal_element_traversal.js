
function printDiagonalTraversal(nums)
{
    
    let v = [];                          
    let col = nums[0].length;
    let row = nums.length
    let x;
    for(let i = 0; i < col ; i++)
    {
        x = 0;
        for(let j = row - 1; j >=0 ; j--)
        {
            if(!v[i+x]) {
              v[i+x] = [];
            }
            v[i+x].push(nums[j][i]);
            x++;
        }
        
    }
    console.log(v)
}

let arr = [ [ 1, 2, 3, 11, 14 ],
            [ 4, 5, 6, 12, 15 ],
            [ 7, 8, 9, 13, 16 ] ];
       
printDiagonalTraversal(arr);
