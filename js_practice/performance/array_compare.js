const shopCarts = [
    {
        'shopId': '226e6ce9-045f-4d29-912c-3a94737d2be0',
        'orderTotal': 1524,
        'itemTotal': 100,
        'points': 10,
        'sections': [
            {
                'items': [
                    {
                        'itemId': 'itemId1',
                        'itemVariantId': 'itemVariantid1',
                        'purchaseQuantity': 0,
                        '__typename': 'ShopCartItem'
                    },
                    {
                        'itemId': 'itemId2',
                        'itemVariantId': 'itemVariantid2',
                        'purchaseQuantity': 2,
                        '__typename': 'ShopCartItem'
                    },
                    {
                        'itemId': 'itemId3',
                        'itemVariantId': 'itemVariantid3',
                        'purchaseQuantity': 4,
                        '__typename': 'ShopCartItem'
                    },
                    {
                        'itemId': 'itemId4',
                        'itemVariantId': 'itemVariantid4',
                        'purchaseQuantity': 3,
                        '__typename': 'ShopCartItem'
                    }
                ],
                '__typename': 'ShopCartSection'
            }
        ],
        '__typename': 'ShopCart'
    }
    ,
    {
        'shopId': '2fffdddd-045f-4d29-912c-3a94737d2be0',
        'orderTotal': 1524,
        'itemTotal': 100,
        'points': 10,
        'sections': [
            {
                'items': [
                    {
                        'itemId': 'itemId1',
                        'itemVariantId': 'itemVariantid1',
                        'purchaseQuantity': 0,
                        '__typename': 'ShopCartItem'
                    },
                    {
                        'itemId': 'itemId2',
                        'itemVariantId': 'itemVariantid2',
                        'purchaseQuantity': 2,
                        '__typename': 'ShopCartItem'
                    },
                    {
                        'itemId': 'itemId3',
                        'itemVariantId': 'itemVariantid3',
                        'purchaseQuantity': 4,
                        '__typename': 'ShopCartItem'
                    },
                    {
                        'itemId': 'itemId4',
                        'itemVariantId': 'itemVariantid4',
                        'purchaseQuantity': 3,
                        '__typename': 'ShopCartItem'
                    }
                ],
                '__typename': 'ShopCartSection'
            }
        ],
        '__typename': 'ShopCart'
    }
]
const prevCart = [
    {
        'shopId': '226e6ce9-045f-4d29-912c-3a94737d2be0',
        'orderTotal': 1524,
        'itemTotal': 100,
        'points': 10,
        'sections': [
            {
                'items': [
                    {
                        'itemId': 'itemId1',
                        'itemVariantId': 'itemVariantid1',
                        'purchaseQuantity': 9,
                        '__typename': 'ShopCartItem'
                    },
                    {
                        'itemId': 'itemId2',
                        'itemVariantId': 'itemVariantid2',
                        'purchaseQuantity': 9,
                        '__typename': 'ShopCartItem'
                    },
                    {
                        'itemId': 'itemId3',
                        'itemVariantId': 'itemVariantid3',
                        'purchaseQuantity': 9,
                        '__typename': 'ShopCartItem'
                    },
                    {
                        'itemId': 'itemId4',
                        'itemVariantId': 'itemVariantid4',
                        'purchaseQuantity': 9,
                        '__typename': 'ShopCartItem'
                    }
                ],
                '__typename': 'ShopCartSection'
            }
        ],
        '__typename': 'ShopCart'
    }
    ,
    {
        'shopId': '2fffdddd-045f-4d29-912c-3a94737d2be0',
        'orderTotal': 1524,
        'itemTotal': 100,
        'points': 10,
        'sections': [
            {
                'items': [
                    {
                        'itemId': 'itemId1',
                        'itemVariantId': 'itemVariantid1',
                        'purchaseQuantity': 8,
                        '__typename': 'ShopCartItem'
                    },
                    {
                        'itemId': 'itemId2',
                        'itemVariantId': 'itemVariantid2',
                        'purchaseQuantity': 8,
                        '__typename': 'ShopCartItem'
                    },
                    {
                        'itemId': 'itemId3',
                        'itemVariantId': 'itemVariantid3',
                        'purchaseQuantity': 8,
                        '__typename': 'ShopCartItem'
                    },
                    {
                        'itemId': 'itemId4',
                        'itemVariantId': 'itemVariantid4',
                        'purchaseQuantity': 8,
                        '__typename': 'ShopCartItem'
                    }
                ],
                '__typename': 'ShopCartSection'
            }
        ],
        '__typename': 'ShopCart'
    }
]

// let arr1Map = new Map([...array1.map((v, i) => [v, i])])

// array2.forEach((val) => arr1Map.has(val) && console.log(val))


const shopCartsMap = new Map(shopCarts.map((value) => [value.shopId, value]))

console.log('shopCartsMap.has(\'226e6ce9-045f-4d29-912c-3a94737d2be0\'):', shopCartsMap.has('226e6ce9-045f-4d29-912c-3a94737d2be0'))

shopCarts[0] = 'j99999'

console.log('after array mutation', shopCartsMap)
