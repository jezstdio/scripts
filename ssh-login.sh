# after a clean start, this adds credentials to my computer and nas, so I can connect with "ssh <name>" to my server.
#!/bin/bash

mkdir ~/.ssh
cd ~/.ssh
ssh-keygen -t rsa -f <name>
cat <<EOT >> config
Host <name>
	HostName <ip>
	Port <port>
	IdentityFile <name>
	User <user>
EOT
ssh-add -K <name>
ssh-copy-id -i <name> <name>
