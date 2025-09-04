let nums = [5, 7, 7, 8, 8, 10];
let target = 8

// LINEAR SEARCH
function elementFind(nums,target)
{
    let start =-1;
    let end =-1;

    for(let i=0;i<nums.length;i++)
    {
        if(nums[i] === target)
        {
            start =i;
            break;
        }
    }

    if(start === -1) return [-1,-1];

    for(let j=nums.length-1; j>=0;j--)
    {
        if(nums[j] === target)
        {
            end=j;
            break;
        }
    }

    return [start, end];


}

// This runs in O(n) time and uses O(1) extra space.

console.log(elementFind([5,7,7,8,8,10], 8));

console.log(elementFind([1], -1));




// FIND SORTED ARRAY WITH TWO WHILE LOOPS MID

var searchRange = function(arr, target) {
    
   let l=0;
   let r= arr.length-1;
   let ans =[-1,-1]
   while(l<r)
   {
    let mid = l+Math.floor((r-l)/2);

    if(arr[mid] < target)
    {
        l=mid+1;
    }
    else{
        r=mid;
    }
   }

if(arr[l] === target)
{
    ans[0] = l;
}

l=0;
r= arr.length-1;

   while(l<r)
   {
    let mid = l+Math.ceil((r-l)/2);

    if(arr[mid] >target)
    {
        r= mid-1;
    }
    else{
        l=mid;
    }
   }


 if(arr[l] === target) ans[1] = l;

return ans;
}




// SECOND APPROACH
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(arr, target) {

    let l=0;
    let r = arr.length-1;
    let ans =[-1, -1];

    while(l<=r)
    {
        let mid = l+Math.floor((r-l)/2);

        if(arr[mid] === target)
        {
            ans[0] = mid;
            r =mid-1;
        }else if(arr[mid] < target)
        {
            l =mid+1;
        }else{
            r= mid-1;
        }
    }


    l=0;
    r=arr.length-1;
    while(l<=r)
    {
        let mid = l+Math.floor((r-l)/2);
        if(arr[mid] === target)
        {
            ans[1] =mid;
              l=mid+1
        }else if(arr[mid] > target)
        {
            r = mid-1;
        }else{
            l=mid+1
        }
    }

    return ans;

    
};

