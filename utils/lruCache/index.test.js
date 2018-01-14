const LRUCache = require('../lruCache')

test('empty cache has nothing in it', () => {
  let cache = new LRUCache(3)

  expect(cache.capacity).toEqual(3)
  expect(cache).toHaveLength(0)
  expect(cache.get('unknown')).toBeUndefined()
})

test('setting cache adds objects', () => {
  let cache = new LRUCache(3)

  cache.set(1, 'one')
  expect(cache).toHaveLength(1)

  cache.set(1, 'one')
  expect(cache).toHaveLength(1)

  cache.set(2, 'two')
  expect(cache).toHaveLength(2)

  cache.set(3, 'tres')
  expect(cache).toHaveLength(3)
})

test('cache does not exceed capacity', () => {
  let cache = new LRUCache(2)

  for (let i = 0; i < 100; i++) {
    cache.set(i, i * 11)
    expect(cache.length).toBeLessThanOrEqual(2)
  }
})

test('oldest item is evicted from the cache', () => {
  let cache = new LRUCache(3)
  cache.set(1, 'one')
  cache.set(2, 'two')
  cache.set(3, 'tres')

  // Access 1 and 2 to keep it in cache
  expect(cache.get(1)).toEqual('one')
  expect(cache.get(2)).toEqual('two')

  // Setting 4 should evict 3
  cache.set(4, 'four')
  expect(cache.get(3)).toBeUndefined()
})

test('flush removes everything from cache', () => {
  let cache = new LRUCache(3)
  cache.set(1, 'one')
  cache.set(2, 'two')
  cache.set(3, 'tres')

  expect(cache).toHaveLength(3)

  cache.flush()
  expect(cache).toHaveLength(0)
  expect(cache.get(3)).toBeUndefined()
})

test('json method serializes the cache', () => {
  let cache = new LRUCache(5)
  cache.set('userName', 'Me')
  cache.set('userId', 1)
  cache.set('loggedIn', true)
  cache.set('accounts', ['Mortgage', 'Credit Card', 'Checking Account'])
  cache.set('hobbies', {
    sports: ['Parkour', 'Weight Lifting'],
    politics: null
  })

  let expected = {
    userName: 'Me',
    userId: 1,
    loggedIn: true,
    accounts: ['Mortgage', 'Credit Card', 'Checking Account'],
    hobbies: {
      sports: ['Parkour', 'Weight Lifting'],
      politics: null
    }
  }

  expect(cache.json()).toEqual(expected)
})
