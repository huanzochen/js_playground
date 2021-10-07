// 1.
/**
 * 寫一個迴圈, 將總和加起來.
 * 
 */
function sum(n) {
    let result = 0
    for (let i = 1; i <= n; i++) {
        result += i
    }
    return result
}

console.log(sum(10))

// 2.
/**
 * 遍歷 arr1, 並把小於 10 的值 篩選掉, 回傳 arr2.
 *
 */

function calcArray(arr1) {
    let arr2 = []
    for (const [i, num] of arr1.entries()) {
        let newNumber = num * 2
        if (newNumber >= 10) {
            arr2.push(newNumber)
        }
    }
    return arr2
}

console.log(calcArray([1, 2, 5, 7, 8, 11, 55, 4, 656, 3]))


// 3.
/**
 * var 是 function scope
 * cosnt 是 block scope, 且其值不能被重新指定.
 * let 同 const 是 block scope, 但其值可以被更改.
 */

// 4.
/**
 * RESTFUL 是 HTTP Method 的設計模式
 * GET(取得) POST(新增) PUT(修改) DELETE(刪除)
 * 強調用所規範之設計模式統一 API 的使用方式
 * 例如: GET 可以拿來新增資料, 但這就不符合 RESTFUL 的設計模式.
 *
 * AJAX 是用來 call HTTP Method 的 Library,
 * 其是 XmlHttpRequest 的實作之簡化版,
 * 可以用他來發出 GET(取得) POST(新增) PUT(修改) DELETE(刪除) 請求.
 */

// 5.
/**
 * webSocket 是持續的長連線,通常用於 通話, 交易所價格, 聊天室使用
 * RESTFUL API 屬於 HTTP Method, 是發送後立即取得結果.
 */

// 6.
/**
 * useCallBack 和 useMemo 兩者都是 React custom hook,
 * 可以製造 memoized 的 content, 不會因為重新 render 被重置.
 * 差別在於 useCallBack 傳 function, useMemo 傳值
 *
 * 當然, 要把 useMemo 裡面放外來 function 也是可以的.
 * 畢竟 useCallBack 規定其中的 function reference 要是 inline-function.
 */

// 7.
/**
 * 一個共用的 store, 存放所有需要共用的 react state,
 * 觸發一個動作, dispatch a action, reducer 收到之後做處理, 並且將結果寫入到 store.
 * redux 的功能可以用 react context 來實現.
 * 但是 redux 其規定之 action 運作流程, 可以宣告 pure function 和有 side effect 的function,
 * 因為此特性可以利用的 redux dev tool 工具, 十分方便 debug 使用.
 *
 */

// 8.
/**
 *  330px, 因為是 border-box,
 *  固 width + margin.
 *
 */

// 9.
/**
 * 10
 * 10
 * 10
 * 10
 * 10
 * 10
 * 10
 * 10
 * 10
 * 10
 *
 */
