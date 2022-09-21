export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0
    let high = haystack.length

    do {
        let med = Math.floor(low + (high-low)/2)
        let value = haystack[med]

        if(value === needle){
            return true
        }
        if(value > needle){
            high = med
        } else {
            low = med+1
        }
    } while (low < high)
    return false
}

// search a sorted list (haystack) for (needle) return true or false
// depending on if number is in the list