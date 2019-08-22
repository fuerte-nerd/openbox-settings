const packages = require('./packages');
const shell = require('shelljs')

module.exports = () => {
    return new Promise((res, rej) => {

        const uninstalledPackages = []

        packages.apt.map((name) => {
            console.clear();
            console.info(`uninstalling ${name}\n`)
            shell.exec(`sudo apt --yes --force-yes purge ${name}`);
            console.info(`\n${name} successfully uninstalled!`)
            setTimeout(() => {
                uninstalledPackages.push(name)
            }, 2000);
        })

        packages.snap.map(({ name, classic }) => {
            console.clear();
            console.info(`removing ${name}\n`)
            shell.exec(`sudo snap remove ${name}`)
            console.info(`\n${name} successfully removed!`)
            setTimeout(() => {
                uninstalledPackages.push(name)
            }, 2000);
        })

        packages.npm.map((name) => {
            console.clear();
            console.info(`uninstalling ${name}\n`)
            shell.exec(`npm uninstall -g ${name}`);
            console.info(`\n${name} successfully uninstalled!`)
            setTimeout(() => {
                uninstalledPackages.push(name)
            }, 2000);
        })

        packages.pip3.map((name) => {
            console.clear();
            console.info(`uninstalling ${name}\n`)
            shell.exec(`pip3 uninstall ${name}`);
            console.info(`\n${name} successfully uninstalled!`)
            setTimeout(() => {
                uninstalledPackages.push(name)
            }, 2000);
        })

        packages.special.uninstall.map(({ name, command }) => {
            console.clear();
            console.info(`uninstalling ${name}\n`);
            shell.exec(command);
            console.info(`\n${name} successfully uninstalled!`)
            setTimeout(() => {
                uninstalledPackages.push(name)
            }, 2000);
        })
        //TODO: add redshift, cerebro and fonts...
        //         Nice! Also very fresh, install all of the google fonts in one script for ubuntu:
        // cd && wget http://webupd8.googlecode.com/files/install-google-fonts
        // chmod +x install-google-fonts
        // ./install-google-

        res(uninstalledPackages);
    })
}
