const order = { type: 'coffee' }

console.log(order)

// const will allow changing the order type
order.type = 'tea'

console.log(order)

// const will prevent reassigning order
order = { type: 'tea' }

// 參考以上結果之結論
// 結論: const 只是避免你去改動他本身的記憶體參考位置, 但並沒有阻止你改變記憶體參考位置中記憶體中的內容