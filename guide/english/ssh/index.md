---
title: SSH
---
## SSH

Secure Shell (SSH) is a cryptographic network protocol intended for secure data transfer over insecure networks.

It is most commonly used for accessing remote servers. Usually these servers are Linux or BSD based, though other platforms may offer SSH access as well. Also it is worth noting that other computational appliances, particularly those for networking such as switches or routers, may have SSH as well. SSH is also used in distributed source code versioning software like git.

From a networking perspective SSH may, dependent on the server and client software, allow for more advanced features such as XServer forwarding for remote access of graphical applications or network tunneling to allow for what is effectively a Virtual Private Network (VPN).

While SSH has 'Secure' in its name, its prevalence makes it an attractive target to attackers. As such it is often configured to use more elaborate methods than simple passwords. Most commonly this is done with keys in a public and private key cryptography system. The exact cryptographic method can vary as well, with RSA being the most common.  The security of an SSH server's authentication method can be further augmented by employing a second (or third) authentication factor, such as a TOTP authentication code generated from a hardware or software based token, or utilizing a token generator app on a smartphone. In this way, should one's username and password be compromised, the SSH server cannot be accessed without this second (or third) factor of authenticaion be compromised too.

As with most network services SSH has a standard network port, 22; however, as SSH is an attractive target for those wishing to do harm, it is often moved to an arbitrary port as a very simple security measure.

It's important to note that SSHv1 is insecure, and allows for traffic to be decrypted using man-in-the-middle attacks.

Finally, it's worth mentioning that SSH is far from tolerant of network instability and there are options out there which can either improve this or replace SSH outright.

### How to Use SSH
If you're a Mac or Linux user, ssh support is built right into your terminal! Windows added built-in ssh support in the Windows 10 Creators update. If you're a Windows user and you have this update, great! If not, you'll need to install a SSH client like PuTTY. 
If connecting with a terminal, you can test if your connection is working by typing `ssh username@remote` into your terminal. Remote would be the IP address of the machine that you want to log into and username would be the user you want to login as. You should be prompted for a password. Once you enter the password, you should be logged in remotely!

### More information
- [Comparison of SSH clients (Wikipedia)](https://en.wikipedia.org/wiki/Comparison_of_SSH_clients)
- [How SSH Works (YouTube Video)](https://www.youtube.com/watch?v=zlv9dI-9g1U)
- [SSH (Wikipedia)](https://en.wikipedia.org/wiki/Secure_Shell)
- [How to Use SSH (Wikihow)](https://www.wikihow.com/Use-SSH)
- [OverTheWire Bandit Wargame (real-life SSH practice)](http://overthewire.org/wargames/bandit/bandit0.html)
