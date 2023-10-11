//case 1 let nums = [3,0,1];
//case 2 let nums = [9,6,4,2,3,5,7,0,1];
//case 3 let nums  = [0,1];
function distnictNumber (nums)
{
    
    let sumArray = (nums.length *(nums.length +1 )) / 2;//n*(n-1)/2
    let mySum = 0;
    for (let i = 0 ;i < nums.length ; i++ )
    {
        mySum+=nums[i];
    }
    
    return sumArray-mySum;
}
console.log(distnictNumber(nums));