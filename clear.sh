# clearing up my computer from unnecessary files

#!/bin/bash

clear

echo "removing local snapshots..."
tmutil deletelocalsnapshots /

echo "removing cache files..."
rm -rf ~/Library/Caches/* -y

echo "removing .DS_Store files..."
find / -name ".DS_Store" -exec rm -rf {} \;

echo "removing @eaDir folders..."
find / -name "@eaDir" -exec rm -rf {} \;

echo "cleaning docker..."
docker system prune -af

echo "cleaning is done. please restart your computer"
