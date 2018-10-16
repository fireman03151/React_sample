---
title: SSH
---
## SSH

Secure Shell (SSH) is a cryptographic network protocol intended for secure data transfer over insecure networks.

It is most commonly used for accessing remote servers. Usually these servers are Linux or BSD based, though other platforms may offer SSH access as well. Also it is worth noting that other computational appliances, particularly those for networking such as switches or routers, may have SSH as well. SSH is also used in distributed source code versioning software like git.

From a networking perspective SSH may, dependent on the server and client software, allow for more advanced features such as XServer forwarding for remote access of graphical applications or network tunneling to allow for what is effectively a Virtual Private Network (VPN).

While SSH has 'Secure' in its name, its prevalence makes it an attractive target to attackers. As such it is often configured to use more elaborate methods than simple passwords. Most commonly this is done with keys in a public and private key cryptography system. The exact cryptographic method can vary as well, with RSA being the most common.

As with most network services SSH has a standard network port, 22; however, as SSH is an attractive target for those wishing to do harm, it is often moved to an arbitrary port as a very simple security measure.

Finally, it's worth mentioning that SSH is far from tolerant of network instability and there are options out there which can either improve this or replace SSH outright.