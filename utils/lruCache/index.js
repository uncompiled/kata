const LinkedList = require('../linkedList')

class CacheNode {
  constructor (key, value) {
    this.key = key
    this.value = value
  }
}

class LRUCache {
  constructor (capacity) {
    this.capacity = capacity
    this._initialize()
  }

  _initialize () {
    this.cache = new Map()
    this.recency = new LinkedList()
    this.length = 0
  }

  flush () {
    this._initialize()
  }

  evict () {
    if (this.recency.length > this.capacity) {
      let oldestCacheItem = this.recency.pop()
      this.cache.delete(oldestCacheItem.key)
      this.length--
    }
  }

  set (key, value) {
    if (!this.cache.has(key)) {
      let listNode = this.recency.push(new CacheNode(key, value), {
        prepend: true
      })
      this.cache.set(key, listNode)
      this.length++
    } else {
      let listNode = this.cache.get(key)
      let cacheNode = listNode.data
      cacheNode.value = value
      this.recency.promote(listNode)
    }

    this.evict()
  }

  get (key) {
    if (this.cache.has(key)) {
      let listNode = this.cache.get(key)
      let cacheNode = listNode.data
      this.recency.promote(listNode)
      return cacheNode.value
    }

    return undefined
  }

  json () {
    let response = {}
    this.cache.forEach((listNode, key) => {
      let cacheNode = listNode.data
      response[key] = cacheNode.value
    })
    return response
  }
}

module.exports = LRUCache
