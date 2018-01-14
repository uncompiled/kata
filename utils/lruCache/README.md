# LRU Cache

A Cache is a lot like a Map or an Object, but it holds a limited number of
values.  This is useful because computers have limited amounts of memory.
In fact, this is so useful that many programming languages or platforms
have an LRU cache built-in!

- In Python 3, [`functools.lru_cache`](https://docs.python.org/3/library/functools.html#functools.lru_cache)
gives access to a decorator function that memoizes the callable
- In Android, [`LruCache`](https://developer.android.com/reference/android/util/LruCache.html)
is available for developers to use

When the cache reaches it's limit, the next request to store a value will
throw out something.  What it throws out is determined by the cache
replacement policy.

[Least-Recently-Used]((https://en.wikipedia.org/wiki/Cache_replacement_policies#Least_Recently_Used_(LRU)))
is one of the most common cache replacement policies because it keeps the
most recent items in memory.  An example of this could be a news website
where an older article is no longer viewed anymore -- as users access
articles, they're cached in memory, but if the cache runs out of memory,
it can safely throw out that older article.

## Example

Let's say that we create an LRU cache with a maximum capacity of 2 entries.

```javascript
let cache = new LruCache(2)
cache.put("user-1", "some data about user 1")
cache.put("user-2", "some data about user 2")
```

At this point, the cache is full.  If we retrieve either of these keys,
we should receive the stored value.

```javascript
console.log(cache.get("user-1"))
// "some data about user-1"
```

If we try to access a key that doesn't exist, we'd probably expect to see
something like `undefined`.

```javascript
console.log(cache.get("user-3"))
// undefined
```

Now, remember that we called `cache.get` on `user-1`, which means we
used it more recently than `user-2`.

If we add a new item to the cache, `user-2` would get evicted (deleted)
because it was the least recently used item.

```javascript
cache.put("user-3", "some data about user 3")
console.log(cache.get("user-2"))
// undefined
```

## Thoughts

This is fun exercise because this composite data structure is so common
that it's easy to take for granted.

The first intuition is to use a Map or even a plain old JS Object to store
the key/value pairs.  The part that gets tricky is how to store and detect
that an item is most recently used.

It might be tempting to start by adding a timestamp to the cached object.
You could create a CacheNode class that wraps the stored value and adds a
timestamp. This approach _could_ work, but the primary goal of a cache is to
offer very fast (constant time) lookup.  If you have to compare timestamps
for cached items, then what we have is a data structure that is very fast to
write (i.e., just store the key/value pair with the timestamp of the write),
but has slow read/lookup time.  Slow lookup defeats the purpose of a cache.

Another approach could be to used a doubly-linked list to keep track
of accesses to items.  We actually don't care about the timestamp, just
the order that items have been accessed.  A doubly-linked list contains
pointers to the `previous` and `next` item in the list, which means that
when we access an item in the cache, we can move it to the front of the
list in constant `O(1)` time:

- For the currently accessed item, "delete" it from its position in the
  list by pointing `previous.next` -> `next` and pointing
  `next.previous` -> `previous`
- Make the currently accessed item the head of the list
- Set the `head` node reference to the current item

To provide constant time lookup, you'll want to store a reference to the
cache node in the Map.

Invalidation is fast because we can just remove the item at the end of
the list (constant time) and delete it from the Map (also constant time).

At this point, all of the following are done in constant time:

- read (get)
- write (put)
- invalidation (delete)

Since the list and the Map contain pointers to the same cache node
objects, the storage space is in `O(n)` where `n` is the capacity
of the cache (plus a constant factor for record keeping metadata)
