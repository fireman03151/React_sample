---
id: 5e46f983ac417301a38fb933
title: SHA-1 Passwort-Cracker
challengeType: 10
forumTopicId: 462374
helpCategory: Python
dashedName: sha-1-password-cracker
---

# --description--

Du wirst <a href="https://replit.com/github/freeCodeCamp/boilerplate-SHA-1-password-cracker" target="_blank" rel="noopener noreferrer nofollow">mit unserem Replit-Startercode an diesem Projekt arbeiten</a>.

-   Beginne mit dem Importieren des Projekts in Replit.
-   Daraufhin wird ein `.replit`-Fenster angezeigt.
-   Wähle `Use run command` und klicke auf die `Done`-Schaltfläche.


Wir sind noch dabei, den interaktiven Teil des Python-Kurses zu entwickeln. For now, here are some videos on the freeCodeCamp.org YouTube channel that will teach you everything you need to know to complete this project:

- <a href="https://www.freecodecamp.org/news/python-for-everybody/" target="_blank" rel="noopener noreferrer nofollow">Python for Everybody Video Course</a> (14 hours)

- <a href="https://www.freecodecamp.org/news/learn-python-basics-in-depth-video-course/" target="_blank" rel="noopener noreferrer nofollow">Learn Python Basics in Depth</a> (4 hours)

- <a href="https://www.freecodecamp.org/news/intermediate-python-course/" target="_blank" rel="noopener noreferrer nofollow">Intermediate Python Course</a> (6 hours)

# --instructions--

Passwords should never be stored in plain text. They should be stored as hashes, just in case the password list is discovered. Allerdings werden nicht alle Hashwerte gleich erstellt.

For this project you will learn about the importance of good security by creating a password cracker to figure out passwords that were hashed using SHA-1.

Create a function that takes in a SHA-1 hash of a password and returns the password if it is one of the top 10,000 passwords used. If the SHA-1 hash is NOT of a password in the database, return "PASSWORD NOT IN DATABASE".

The function should hash each password from `top-10000-passwords.txt` and compare it to the hash passed into the function.

The function should take an optional second argument named `use_salts`. If set to true, each salt string from the file `known-salts.txt` should be appended AND prepended to each password from `top-10000-passwords.txt` before hashing and before comparing it to the hash passed into the function.

Hier sind ein paar gehashte Passwörter, mit denen die Funktion getestet werden kann:

- `b305921a3723cd5d70a375cd21a61e60aabb84ec` should return "sammy123"
- `c7ab388a5ebefbf4d550652f1eb4d833e5316e3e` should return "abacab"
- `5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8` sollte "Passwort" zurückgeben

Hier sind einige gehashte Passwörter, mit denen die Funktion getestet werden soll, wenn `use_salts` auf `True` gesetzt ist:

- `53d8b3dc9d39f0184144674e310185e41a87ffd5` should return "superman"
- `da5a4e8cf89539e66097acd2f8af128acae2f8ae` should return "q1w2e3r4t5"
- `ea3f62d498e3b98557f9f9cd0d905028b3b019e1` sollte "bubbles1" zurückgeben

The `hashlib` library has been imported for you. You should consider using it in your code. <a href="https://docs.python.org/3/library/hashlib.html" target="_blank" rel="noopener noreferrer nofollow">Learn more about "hashlib" here</a>.

## Entwicklung

Schreibe deinen Code in `password_cracker.py`. Für die Entwicklung kannst du `main.py` verwenden, um deinen Code zu testen. Klicke den "Run"-Button und `main.py` wird ausgeführt.

## Testen

The unit tests for this project are in `test_module.py`. We imported the tests from `test_module.py` to `main.py` for your convenience. Die Tests werden automatisch ausgeführt, wenn du auf den "Run"-Button klickst.

## Submitting

Kopiere die URL deines Projekts und übermittle sie an freeCodeCamp.

# --hints--

Es sollte alle Python-Tests bestehen.

```js

```

# --solutions--

```py
  # Python challenges don't need solutions,
  # because they would need to be tested against a full working project.
  # Please check our contributing guidelines to learn more.
```
