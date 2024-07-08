/**
 * Definition for knows()
 *
 * @param {integer} person a
 * @param {integer} person b
 * @return {boolean} whether a knows b
 * knows = function(a, b) {
 *     ...
 * };
 */

/**
 * @param {function} knows()
 * @return {function}
 */
var solution = function (knows) {
  /**
   * @param {integer} n Total people
   * @return {integer} The celebrity
   */
  return function (n) {
      let q = []

      // 先把所有的人都塞到一個 queue 裡
      for (let i = 0; i < n; i++) {
          q.push(i)
      }

      // 開始一個個比較這些 candidate, 然後把不符合的人篩掉
      // ? 符合的就塞回去？
      while (q.length >= 2) {
          const p1 = q.pop()
          const p2 = q.pop()

          p1KnowsP2 = knows(p1, p2)
          p2KnowsP1 = knows(p2, p1)

          // If neither of them know each other, they are both not celebrity
          if (!p1KnowsP2 && !p2KnowsP1) {
              continue
          }
          // if P1 knows somebody, it definetly should not be the celebrity
          if (p1KnowsP2) {
              // do nothing, it is a normal people
          } else {
              q.push(p1)
          }
          if (p2KnowsP1) {
              // do nothing, it is a normal people
          } else {
              q.push(p2)
          }
      }

      if (q.length === 0) return -1

      // At last, q will only last one person.
      // console.log('last q:', q)
      const lastCandidate = q.pop()

      // Check the last of it is celebrity or not
      for (let other = 0; other < n; other++) {
          if (other === lastCandidate) continue
          if (knows(lastCandidate, other) || !knows(other, lastCandidate)) return -1
      }
      return lastCandidate
  };
};