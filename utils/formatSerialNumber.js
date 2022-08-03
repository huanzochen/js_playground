const formatSerialNumber = (num, len) => {
    console.log('(Array(len).join(0))', Array(len).join(0))

    if (String(num).length > len) return num
    return (Array(len).join(0) + num).slice(-len)
}

console.log(formatSerialNumber(3, 4))
