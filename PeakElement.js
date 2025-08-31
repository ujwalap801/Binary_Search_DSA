/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(arr) {
    let l =1;
    let r = arr.length;

    while(l<r)
    {
        let mid = l+Math.floor((r-l)/2);
        if(arr[mid] <arr[mid+1])
        {
            l =mid+1;
        }
        else{
            r=mid
        }
    }

    return r;
};