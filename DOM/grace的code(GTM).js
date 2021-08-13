function () {
var total = ''
var cost = document.querySelectorAll('#SITE_PAGES')[0].getElementsByClassName('font_8')[0].getElementsByTagName('span')[3].getElementsByTagName('span')[0].innerText.split('$')[1].split(',')
for(var i = 0 ; i < cost.length; i++) {
total = total + cost[i]
}
return Number(total)


function(){
var spanArray = document.querySelectorAll('span')
var price 
for (var [index, span] of spanArray.entries()) {
    if(span.innerText.includes('特惠') && spanArray[index + 1].innerText.includes('$')){
        // 價格會是"特惠價" 的下一個元素
        price = spanArray[index + 1].innerText
    }
}
// price = '$2680'
var priceArray = price.split('$')[1].split(',')
var total = ''
for(var i = 0 ; i < priceArray.length; i++) {
    total = total.concat(priceArray[i])
}
// total = 2680
return Number(total)
}
