---
id: 5e7b9f0a0b6c005b0e76f069
title: 辞書とループ
challengeType: 11
videoId: EEmekKiKG70
bilibiliIds:
  aid: 589401038
  bvid: BV1eq4y1X7xU
  cid: 376387132
dashedName: dictionaries-and-loops
---

# --description--

その他のリソース:

\- <a href="https://www.youtube.com/watch?v=PrhZ9qwBDD8" target="_blank" rel="noopener noreferrer nofollow">演習</a>

# --question--

## --text--

次のコードは何を表示しますか？

```python
counts = { 'chuck' : 1 , 'annie' : 42, 'jan': 100}
for key in counts:
    if counts[key] > 10:
        print(key, counts[key])
```

## --answers--

<pre>annie 42
jan 100</pre>

---

<pre>chuck 1
annie 42
jan 100</pre>

---

<pre>chuck 1</pre>

---

<pre>[エラー]</pre>

## --video-solution--

1
