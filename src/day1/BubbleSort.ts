export default function bubble_sort(arr: number[]): void {
// take in array and sort it
// start at element 0, go through entire array, comparing current element to next
// if current element is larger, swap with next. Largest element will end up at
// the end of the array. Start at 0 again, and go to the end-1
// eventually there is one element left. Array is sorted.
    for(let end = arr.length-1; end>0; end--){
        for(let i=0; i<end; i++){
            if(arr[i]>arr[i+1]){
                const temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
            }
        }
    }
}