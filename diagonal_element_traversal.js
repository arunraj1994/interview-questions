function printDiagonalTraversal(nums)
{
     
    // Stores the maximum size of vector
    // from all row of matrix nums[][]
    let max_size = nums[0].length;
    
    // Store elements in desired order
    let v = [];
                                  
    for(let i = 0; i < 2 * max_size - 1; i++)
    {
        v.push([]);
    }
    
    // Store every element on the basis
    // of sum of index (i + j)
    let x;
    for(let i = 0; i < nums[0].length ; i++)
    {
        x = 0;
        for(let j = nums.length - 1; j >=0 ; j--)
        {
            v[i+x].push(nums[j][i]);
            x++;
        }
        
    }
    
    // Print the stored result
    console.log(v)
}

// Given vector of vectors arr
let arr = [ [ 1, 2, 3 ],
            [ 4, 5, 6 ],
            [ 7, 8, 9 ] ];
       
// Function Call
printDiagonalTraversal(arr);
