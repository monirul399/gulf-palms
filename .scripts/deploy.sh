#!/bin/bash
set -e

echo "Deployment started..."

echo "Reset package-lock.json before merge"
git checkout -- package-lock.json

# Pull the latest version of the app
git pull origin master
echo "New changes copied to server !"

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

echo "Installing Dependencies..."
npm install --yes

echo "Creating Production Build..."
npm run build

echo "PM2 Reload"
pm2 reload 1

echo "Deployment Finished!"
