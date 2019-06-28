---
title: Mac OS Terminal
---


# Using the Terminal in Mac OS

Most of the time users interact through a Graphical User Interface (GUI) to interact with the computer. You use the mouse to point and click to open, move, or create new files or open applications. You can also use the Terminal Application to interact with your machine through written commands. When you use the terminal, it allows you to dig deeper and customize in a way not possible through the GUI. 

## Opening the Terminal and Navigating Directories

Your terminal exists in the Applications directory. Open your Terminal app. You should see a prompt in the terminal window. It should have the computer's name (ABC's Macbook), followed by the User name (ABC), and then a '$'. If you are in the root directory, the last character will be a '#'.

To see what directory you are working in, just type the command: 

```
pwd
```

`pwd` stands for "Print Working Directory". Directory is another word for folder. 

If you want to list the contents of your directory, use the command: 

```
ls
```

To switch to a new directory you, use the command: 

```
cd <directory_name>
```

`cd` stands for "Change Directory". ```cd``` is then followed by the directory's name you wish to switch into.

Typing only `cd` will move to the home directory works same as `cd ~`

Here is a list of common commands:

Command | Usage
------------ | -------------
pwd | Print Working Directory (Where Am I? )
ls | List contents of current directory
ls -a | List contents of current directory including hidden files
mkdir | Create a new directory
touch | Create a new file
cp| Copy a file 
rm | Remove a file 
cat | concatenate and print files
ps | list all running processes
find | find files and directories
rm -rf | Remove a directory recursively
sudo | Run command with the security privileges of the superuser
clear | Clear the screen
nano [file] | Opens the file using nano editor
vim [file] | Opens the file using vim editor
reset | resets the terminal display

### Usage Examples

Some of the aforementioned commands aren't clear without examples. Below are a few usage examples to help provide you with some context. 

#### Making a Directory

```
mkdir <your_new_folder_name>
```

#### Making a File 

```
touch file_name.js
```

You can make a file with any extension you choose. As long as it is in a format accepted by the folder or machine.

#### Copying a File 

Use the following syntax to copy a file from the terminal:

**cp _source_ _destination_**

For example, if we have a file, _'test.txt'_ that is stored in our _/Desktop_ directory and we want to copy it to the _/Documents_ folder, our command would look like this: 

```
cp ~/Desktop/test.txt ~/Documents
```

#### Deleting a File 

Use the following syntax to delete a file. 

**rm <path_to_file>**

For example, if you want to delete the test file you created above, your command line should like like this:

```
rm test.txt
```

**Note:** Removing files this way is permanent, deleted files will skip the trash completely, leaving you with few options for file recovery. Always be careful when using this command and back up your machine frequently! 

#### Detect which process is using the port you want to use
```
lsof -i :<port>
```

#### Terminate the process which uses the port you want to use
```
kill <pid>
```


#### Previewing file
If you would like to preview a file, type the command `cat <name of document>` and you would be able to preview a text document through the terminal.

### Customizing command prompt

If you'd like to you can change how your command prompt looks.  
For example, many developers find it useful to view their current version control branch right in the command prompt (we will be accomplishing this).

#### Changing your computer hostname
In short all you need to do is run the command below, replacing `<new host name>` with whatever you would want to name your computer.

```
sudo scutil --set HostName <new host name>
```

*Note*: This can be done natively through macOS settings `System Preferences -> Sharing -> Computer Name`

#### Your bash_profile

To accomplish this you need to alter your **bash profile**.  
This can be viewed with the following command `cat ~/.bash_profile`.

#### Altering bash_profile

Open `~/.bash_profile` with you favorite editor and add the following:

```
git_branch() {
  git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/(\1)/'
}

export PS1="[\u@\h \W]\$(git_branch)\$ "
```

Here `git_branch()` is a function to print out the name of the branch.

If you want you can add colors to the command prompt as well!

```
export PS1="\h \[\033[34m\]\W\[\033[32m\]\$(parse_git_branch)\[\033[00m\] $ "
```

#### Apply Changes without signing in/out of terminal

`source ~/.bashrc`

- [Change computer hostname](https://knowledge.autodesk.com/search-result/caas/sfdcarticles/sfdcarticles/Setting-the-Mac-hostname-or-computer-name-from-the-terminal.html)
- [Show git branch in terminal command prompt](https://www.shellhacks.com/show-git-branch-terminal-command-prompt/)
- [Bash prompt escape sequences](http://tldp.org/HOWTO/Bash-Prompt-HOWTO/bash-prompt-escape-sequences.html)
- [More bash configurations](https://gist.github.com/justintv/168835)

#### Search your command history as you type

```control+R```

Hold down `control` and press `R` to invoke "reverse-i-search." Type a letter - like s - and you'll get a match for the most recent command in your history that starts with s. Keep typing to narrow your match. When you hit the jackpot, press Enter to execute the suggested command.

## Alternative Terminals

### iTerm2

iTerm2 is an alternative to the legacy terminal in Mac OS. iTerm2 brings some new features such as:

* Split Panes
* Hotkey Window
* Search
* Autocomplete
* Paste history
* Configurability
* and many [more](https://www.iterm2.com/features.html)

Just download iTerm2 from the official [website](https://www.iterm2.com/downloads.html). Additional documentation can be found [here](https://www.iterm2.com/documentation.html).

#### iTerm2 Improvements and Customizations

This [guide](https://medium.com/the-code-review/make-your-terminal-more-colourful-and-productive-with-iterm2-and-zsh-11b91607b98c) shows you how you can improve terminal productivity, and have a bit more customization options.

### Hyper

Another alternative is Hyper, an Electron-based terminal

- Built in HTML/CSS/JS
- Fully extensible
- [Download](https://hyper.is/#installation)
- [Documentation](https://hyper.is/)
- [Awesome Hyper](https://github.com/bnb/awesome-hyper)

## Terminal Fun
[Bandit Wargame](http://overthewire.org/wargames/bandit/) can help you learn to use the terminal while also sharpening your white-hat hacking skills. It's a great way to get familiar with the Command Line Interface (CLI)  and continually hone your skills.
