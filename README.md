README
===

This repository is a playground to explore the JavaScript stack. Please install the required softwares and frameworks before working. You ca either clone or fork the repo. In case you clone please create a local branch and work on it.

Technology
---

* [Node](https://nodejs.org/en/) - An Open-Source JavaScript runtime
* [Yarn](https://yarnpkg.com/lang/en/) - A package manager for Node (Alternative to NPM)
* [React](https://facebook.github.io/react/) - A UI framework for JavaScript created by Facebook

Installation of Required Software
---

### Installing Node.JS
1. Run this command in shell to install [NVM](https://github.com/creationix/nvm) (Node Version Manger)
```sh
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash
```
2. Run this command to start using NVM in the same shell.
```sh
$ export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" # This loads nvm
```
3. Install the latest LTS (Long Term Support) for Node.
```sh
$ nvm install --lts
```
4. Verfiy whether node was installed.
```sh
$ node -v
```
5. If you get an output similar to the below output you are good to go (version might vary).
```sh
$ v6.11.1
```

### Installing Yarn Package Manager
1. Configure Yarn repository for Ubuntu
```sh
$ curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
```
2. Install Yarn
```sh
$ sudo apt-get update && sudo apt-get install yarn
```
3. Verfiy Yarn installation
```sh
$ yarn --version
```
4. If you get an output similar to the below output you are good to go (version might vary).
```sh
$ 0.22.0
```

### Will be updated as sessions proceed

Working with source
---

You can clone the repo or fork it. If you are going to clone it. Please follow the below instructions.

Clone this repo either by using HTTPS or SSH

HTTPS:
```sh
$ git clone https://github.com/sadarshannaiynar/covert_lion.git
```

SSH:
```sh
$ git clone git@github.com:sadarshannaiynar/covert_lion.git
```

Open the command line and run the command
```sh
$ yarn install
```

After installing start the app by using
```sh
yarn start
```

You can proceed to edit your code using ant editor of your choice.

Enjoy playing around with the code and stack. If you bump into issues please let me know.

Happy Hacking
