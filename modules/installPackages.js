const packages = require('./packages');
const shell = require('shelljs')

module.exports = () => {
    return new Promise((res, rej) => {

        packages.apt.map((name) => {
            console.clear();
            console.info(`installing ${name}\n`)
            shell.exec(`sudo apt --yes --force-yes install ${name}`);
            console.info(`\n${name} successfully installed!`)
        })

        packages.npm.map((name) => {
            console.clear();
            console.info(`installing ${name}\n`)
            shell.exec(`npm install -g ${name}`);
            console.info(`\n${name} successfully installed!`)
        })

        packages.pip3.map((name) => {
            console.clear();
            console.info(`installing ${name}\n`)
            shell.exec(`pip3 install ${name}`);
            console.info(`\n${name} successfully installed!`)
            setTimeout(() => {
                installedPackages.push(name)
            }, 2000);
        })

        packages.special.install.map(({ name, command }) => {
            console.clear();
            console.info(`installing ${name}\n`);
            shell.exec(command);
            console.info(`\n${name} successfully installed!`)
        })

        res();
    })
}
