function ListNode(val, next) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
}

let l1Content = [1, 3, 4]

let l1 = new ListNode(0)

let i = 0

while (i < l1Content.length) {
    console.log('while')
    i++

    l1.val = l1Content[i]
    l1.next = {
        val:0,
        next:null
    }
    l1 = l1.next
}


var mergeTwoList = function(l1, l2) {
    console.log(l1)
    // console.log(l2)
}

mergeTwoList()