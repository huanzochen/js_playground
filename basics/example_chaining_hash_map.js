class KVNode {
    constructor(key, value) {
        this.key = key
        this.value = value
    }
}

class ExampleChainingHashMap {
    constructor(capacity) {
        this.capacity = capacity
        // 底層的 table 數組中每個元素都是一個練表
        this.table = new Array(capacity)
    }

    hash(key) {
        return key % this.table.length
    }

    get(key) {
        const index = this.hash(key)

        if (this.table[index] == null) {
            // 鏈表為空，說明 key 不存在
            return -1
        }

        // debug
        console.log('this.table[index]:', this.table[index])

        const list = this.table[index]
        // 遍歷鏈表，嘗試尋找目標 key，回應對應 value
        for (let i = 0; i < list.length; i++) {
            if (list[i].key === key) return list[i].value
        }

        // 鏈表中沒有目標 key
        return -1
    }

    put(key, value) {
        const index = this.hash(key)

        // 鏈表為空，從來沒有類似的 key, 添加一個新節點
        if (this.table[index] == null) {
            this.table[index] = []
            this.table[index].push(new KVNode(key, value))
        }

        // 鏈表不為空，要試一次看看 key 是不是存在
        // 存在的話 更新 value
        // 不存在就插入新節點
        const list = this.table[index]
        for (let i = 0; i < list.length; i++) {
            if (list[i].key === key) {
                list[i].value = value
                return 
            }
        }
        
        // 鏈表中沒有目標 key， 只有其他可能重複的，就添加新節點
        list.push(new KVNode(key, value))
    }

    remove(key) {
        if (this.get(key) === -1) {
            return
        }
        
        const index = this.hash(key)
        const list = this.table[index]
        for (let i = 0; i < list.length; i++) {
            if (list[i].key === key) {
                list.splice(i, 1) 
                return 
            }
        }
    }

    getIndexList(key) {
        const index = this.hash(key)
        if (this.table[index] == null) return -1
        return this.table[index]
    }
}

const map = new ExampleChainingHashMap(10)

map.put(2, '2')
map.put(22, '22')
console.log(map.get(22, '22'))
map.remove(22)
map.getIndexList(22)