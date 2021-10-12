function solution(A) {
    var ans = 1100
    for (let i = 1; i < A.length; i++) {
        if (ans > A[i]) {
            ans = A[i]
        }
    }
    return ans
}


console.log(solution([100, 1, 2]))