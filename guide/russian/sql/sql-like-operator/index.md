---
title: SQL LIKE Operator
localeTitle: Оператор SQL LIKE
---
## Оператор SQL LIKE

### LIKE Определенный оператор

Оператор `LIKE` используется в `WHERE` или `HAVING` (как часть `GROUP BY` ), чтобы ограничить выбранные строки элементами, когда столбец имеет определенный шаблон символов, содержащихся в нем.

### Это руководство продемонстрирует:

*   Определение того, начинается или заканчивается строка с заданным шаблоном строки
*   Определение наличия шаблона в середине строки
*   Определение, если строка не содержится в строке

### Столбец начинается или заканчивается заданной строкой строки

Этот SQL будет выбирать студентов, у которых есть `FullName` начиная с «Monique» или заканчивая «Greene».

```sql
SELECT studentID, FullName, sat_score, rcd_updated 
 FROM student 
 WHERE 
 FullName LIKE 'Monique%' OR -- note the % at the end but not the beginning 
 FullName LIKE '%Greene'; -- note the % at the beginning but not the end 
```

```text
+-----------+---------------+-----------+---------------------+ 
 | studentID | FullName      | sat_score | rcd_updated         | 
 +-----------+---------------+-----------+---------------------+ 
 |         1 | Monique Davis |       400 | 2017-08-16 15:34:50 | 
 |         5 | Alvin Greene  |      1200 | 2017-08-16 15:34:50 | 
 +-----------+---------------+-----------+---------------------+ 
 2 rows in set (0.00 sec) 
```

### Строковый шаблон находится в середине столбца

Этот SQL будет выбирать студентов, которые имеют «ree» в любом месте в названии.

```sql
SELECT studentID, FullName, sat_score, rcd_updated 
 FROM student 
 WHERE FullName LIKE '%ree%'; -- note the % at the beginning AND at the end 
```

```text
+-----------+----------------+-----------+---------------------+ 
 | studentID | FullName       | sat_score | rcd_updated         | 
 +-----------+----------------+-----------+---------------------+ 
 |         5 | Alvin Greene   |      1200 | 2017-08-16 15:34:50 | 
 |         6 | Sophie Freeman |      1200 | 2017-08-16 15:34:50 | 
 +-----------+----------------+-----------+---------------------+ 
 2 rows in set (0.00 sec) 
```

### Строка не находится в столбце
Вы можете поместить «NOT» перед LIKE, чтобы исключить строки с шаблоном строки вместо их выбора. Этот SQL исключает записи, содержащие «cer Pau» и «Ted» в столбце FullName.

```sql
SELECT studentID, FullName, sat_score, rcd_updated 
 FROM student 
 WHERE FullName NOT LIKE '%cer Pau%' AND FullName NOT LIKE '%"Ted"%'; 
```

```text
+-----------+----------------------+-----------+---------------------+ 
 | studentID | FullName             | sat_score | rcd_updated         | 
 +-----------+----------------------+-----------+---------------------+ 
 |         1 | Monique Davis        |       400 | 2017-08-16 15:34:50 | 
 |         2 | Teri Gutierrez       |       800 | 2017-08-16 15:34:50 | 
 |         4 | Louis Ramsey         |      1200 | 2017-08-16 15:34:50 | 
 |         5 | Alvin Greene         |      1200 | 2017-08-16 15:34:50 | 
 |         6 | Sophie Freeman       |      1200 | 2017-08-16 15:34:50 | 
 |         8 | Donald D. Chamberlin |      2400 | 2017-08-16 15:35:33 | 
 |         9 | Raymond F. Boyce     |      2400 | 2017-08-16 15:35:33 | 
 +-----------+----------------------+-----------+---------------------+ 
 7 rows in set (0.00 sec) 
```

*Вот текущий полный список студентов для сравнения с приведенными выше результатами.*

```sql
SELECT studentID, FullName, sat_score, rcd_updated FROM student;
```

```text
+-----------+------------------------+-----------+---------------------+
| studentID | FullName               | sat_score | rcd_updated         |
+-----------+------------------------+-----------+---------------------+
|         1 | Monique Davis          |       400 | 2017-08-16 15:34:50 |
|         2 | Teri Gutierrez         |       800 | 2017-08-16 15:34:50 |
|         3 | Spencer Pautier        |      1000 | 2017-08-16 15:34:50 |
|         4 | Louis Ramsey           |      1200 | 2017-08-16 15:34:50 |
|         5 | Alvin Greene           |      1200 | 2017-08-16 15:34:50 |
|         6 | Sophie Freeman         |      1200 | 2017-08-16 15:34:50 |
|         7 | Edgar Frank "Ted" Codd |      2400 | 2017-08-16 15:35:33 |
|         8 | Donald D. Chamberlin   |      2400 | 2017-08-16 15:35:33 |
|         9 | Raymond F. Boyce       |      2400 | 2017-08-16 15:35:33 |
+-----------+------------------------+-----------+---------------------+
9 rows in set (0.00 sec)
