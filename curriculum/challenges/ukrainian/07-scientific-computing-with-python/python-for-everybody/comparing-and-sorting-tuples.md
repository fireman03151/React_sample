---
id: 5e7b9f0b0b6c005b0e76f06d
title: Порівняння та сортування кортежів
challengeType: 11
videoId: dZXzBXUxxCs
bilibiliIds:
  aid: 931886163
  bvid: BV1HM4y1T7TK
  cid: 376533673
dashedName: comparing-and-sorting-tuples
---

# --description--

Додаткові ресурси:

\- <a href="https://www.youtube.com/watch?v=EhQxwzyT16E" target="_blank" rel="noopener noreferrer nofollow">Вправа</a>

# --question--

## --text--

Який код є аналогічним за результатом виконання до заданого нижче?:

```python
lst = []
for key, val in counts.items():
    newtup = (val, key)
    lst.append(newtup)
lst = sorted(lst, reverse=True)
print(lst)
```

## --answers--

```python
print( sorted( [ (v,k) for k,v in counts.items() ], reverse=True ) )
```

---

```python
print( [ (k,v) for k,v in counts.items().sorted() ] )
```

---

```python
print( sorted( [ (v,k) for k,v in counts.keys() ] ) )
```

---

```python
print( [ (k,v) for k,v in counts.values().sort() ] )
```

## --video-solution--

1

