// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B, C) {

    console.log('A:', A, 'B:', B, 'C:', C)

    let pairsA = Math.floor(A / 2) + A % 2
    const pairsB = Math.floor(B / 2) + B % 2
    const pairsC = Math.floor(C / 2) + C % 2

    const pairs = [{ v:A,
        pairs: pairsA,
        key:'A' }, { v: B,
        pairs: pairsB,
        key: 'B' }, { v:C,
        pairs: pairsC,
        key:'C' }]
    const biggestPair = (() => {
        let biggest = { pairs: 0,
            key: 'none' }
        pairs.forEach((current) => {
            // console.log('current', current)
            if (current.pairs > biggest.pairs) biggest = current
        })
        // console.log('biggest:',biggest)
        return biggest
    })()

    console.log('pairsA,pairsB,pairsC:', pairsA, pairsB, pairsC)
    console.log('biggestPair:', biggestPair)

    const getBiggestPairIndex = pairs.findIndex((v) => v.pairs === biggestPair.pairs)
    pairs.splice(getBiggestPairIndex, 1)

    console.log('pairs:', pairs)

    const getOtherPairsTotal = () => {
        let result = 0
        pairs.forEach((v) => {
            result += v.pairs
        })
        return result
    }
    const getBiggestPair = () => {
        return biggestPair.pairs
    }

    // const minusSpecificPair = (key) =>{
    //     pair.find

    // }

    console.log('getOtherPairsTotal():', getOtherPairsTotal())

    const otherPairsInitTotal = getOtherPairsTotal()



    let result = ''

    if (biggestPair.pairs < otherPairsInitTotal) {
        while (getBiggestPair() > 0) {
            if (Math.floor(biggestPair.v / 2) > 0) {
                result = result.concat(biggestPair.key, biggestPair.key)
                biggestPair = {
                    ...biggestPair,
                    v: v - 2,
                    pairs: pairs - 1
                }
            }
            else result = result.concat(biggestPair.key)
            pairs.every((current) => {
                if (Math.floor(current.v / 2) > 0) {
                    result = result.concat(current.key, current.key)
                    return false
                }
                else if (current.v % 2 > 0) {
                    result = result.concat(current.key, current.key)
                    return false
                }
            })
        }
    }
    else if (biggestPair.pairs === otherPairsInitTotal) {}
    else if (biggestPair.pairs > otherPairsInitTotal) {}








    // if(biggestPair =)






}
