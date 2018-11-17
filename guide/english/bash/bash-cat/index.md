---
title: Bash Cat
---

## Bash Cat

`cat` is one of the most frequently used commands in Unix operating systems.

`cat` is used to read a file sequentially and print it to the standard output.
The name is derived from its function to con**cat**enate files.

Cat can also be used to create a text file.

### Usage

```bash
cat [options] [file_names]
```

Most used options:

* `-b`, number non-blank output lines
* `-n`, number all output lines
* `-s`, squeeze multiple adjacent blank lines
* `-v`, display non-printing characters, except for tabs and the end of line character

### Example

Print in terminal the content of file.txt:
```bash
cat file.txt
```

Concatenate the content of the two files and display the result in terminal:
```bash
cat file1.txt file2.txt
```

**Tip**: Using `cat` on a directory will cause error, so make sure it's a readable file.

Creating a new text file:
```bash
cat > yourfile.txt
```
After pressing Enter, the cursor will be placed on the next line. You can start entering your desired text directly into your file. Press Ctrl+D or Ctrl+C to exit the file.

#### More Information:
* Wikipedia: https://en.wikipedia.org/wiki/Cat_(Unix)


