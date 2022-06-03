function printDiagonalTraversal(nums)
{
    
    // Store elements in desired order
    let v = [];                          
        
    // Store every element on the basis
    // of sum of index (i + j)
    let x;
    for(let i = 0; i < nums[0].length ; i++)
    {
        x = 0;
        for(let j = nums.length - 1; j >=0 ; j--)
        {
            if(!v[i+x]) {
              v[i+x] = [];
            }
            v[i+x].push(nums[j][i]);
            x++;
        }
        
    }
    
    // Print the stored result
    console.log(v)
}

// Given vector of vectors arr
let arr = [ [ 1, 2, 3, 11, 14 ],
            [ 4, 5, 6, 12, 15 ],
            [ 7, 8, 9, 13, 16 ] ];
       
// Function Call
printDiagonalTraversal(arr);
