const order = { type: 'coffee' }
console.log(order)

// V const will allow mutate the order
order.type = 'tea'

// X const will prevent reassigning order
order = { type: 'tea' }


console.log(order)

// 參考以上結果之結論
// 結論: const 只是避免你去改動他本身的記憶體參考位置, 但並沒有阻止你改變記憶體參考位置中記憶體中的內容