#!/bin/bash          
echo 'Current node version:'
node -v
export NVM_DIR=$HOME/.nvm
source $HOME/.nvm/nvm.sh
nvm use 8
atom . && gulp 
