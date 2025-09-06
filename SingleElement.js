/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(arr) {

   let l = 0;
   let r =  arr.length-1;
   while(l<=r)
   {
    let mid = l + Math.floor((r-l) /2);
    if(arr[mid] === arr[mid-1])
    {
       let leftCount = mid-1-l;
        if(leftCount % 2 ===1)
        {
            r = mid-2;
        }else{
            l = mid +1;
        }
    }
    else if(arr[mid] === arr[mid+1])
    {
let rightCount  = r - (mid+1);
if(rightCount % 2===1)
{
    l = mid+2
}
else{
    r = mid -1;
}
                
   }
   else{
    return arr[mid];
   }


   }
};