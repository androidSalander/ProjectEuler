// if we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6, and 9. The sum of these multiples is 23.
// find the sum of all the multiples of 3 or 5 below 1000

function one(n) {
    let answer = 0
    for (let i = 1; i < n; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            answer += i
        }
    } return answer
}

one(10) //23
one(1000) //233168