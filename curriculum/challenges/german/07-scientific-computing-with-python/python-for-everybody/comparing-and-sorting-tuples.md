---
id: 5e7b9f0b0b6c005b0e76f06d
title: Tupel vergleichen und sortieren
challengeType: 11
videoId: dZXzBXUxxCs
bilibiliIds:
  aid: 931886163
  bvid: BV1HM4y1T7TK
  cid: 376533673
dashedName: comparing-and-sorting-tuples
---

# --description--

Weitere Ressourcen:

\- <a href="https://www.youtube.com/watch?v=EhQxwzyT16E" target="_blank" rel="noopener noreferrer nofollow">Aufgabe</a>

# --question--

## --text--

Was macht das gleiche wie der folgende Code?:

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

