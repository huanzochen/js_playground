/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {

  let memo = new Array(amount + 1)

  const dp = (coins, amount) => {
      // base case
      // 被扣完了，返回
      if (amount === 0) return 0;
      // 這個解法找不到解答！
      if (amount < 0) return -1

      let minAmountOfSubProblems = Number.MAX_SAFE_INTEGER
      if(memo[amount]) return memo[amount]

      for (let i = 0; i < coins.length; i++) {
          let coin = coins[i]
          let subProblems = dp(coins,  amount - coin)

          if (subProblems === -1) continue
          minAmountOfSubProblems = Math.min(1 + subProblems, minAmountOfSubProblems)
      }
      // console.log('minAmountOfSubProblems:', minAmountOfSubProblems)

      memo[amount] = minAmountOfSubProblems === Number.MAX_SAFE_INTEGER ? -1 : minAmountOfSubProblems
      return memo[amount]
  }

  return dp(coins, amount)
};