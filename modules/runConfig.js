const shell = require('shelljs');
const path = require('path')
const fs = require('fs')

// module.exports = () => {
    // return new Promise((res, rej) => {

        // //UNPACK AND CONFIG
        // //xscreensaver
        // shell.exec(`cp ./assets/confs/.xscreensaver ~/`)

        // //conky
        if(!fs.existsSync('~/bin')){
            shell.mkdir('~/bin')
        }
        // shell.exec(`cp ./assets/confs/.conkyrc ~/`)
        shell.exec(`cp ./assets/scripts/* ~/bin`)

        // //git
        // shell.exec(`git config --global user.name "dandroos" && git config --global user.email dandrewsuk82@gmail.com`)
        
        //VSCODE
        //extensions
        if(!fs.existsSync('~/.vscode/extensions')){
            shell.mkdir('~/.vscode/extensions')
        }
        shell.exec(`cp -r ./assets/confs/extensions/ ~/.vscode/`)

        //lxsession desktop.conf
        // shell.exec(`cp ${path.join(__dirname, '/assets/confs/desktop.conf')} ~/.config/lxsession/`)

        //panel setup
        //COPPPPPPY xfwm4.xml from the same directory too.
        // shell.exec(`cp ${path.join(__dirname, '/assets/confs/xfce4-panel.xml')} ${path.join(__dirname, '/assets/confs/xfwm4.xml')} '~/.config/xfce4/xfconf/xfce-perchannel-xml/')`)
        //redshift
        // shell.exec(`cp ${path.join(__dirname, '/assets/confs/redshift.conf')} ~/.config/`)

        //dconf tweaks (wallpaper, conf files, etc)
        // shell.exec(`dconf write /org/gnome/desktop/background/picture-uri "'file:///usr/share/peppermint/wallpapers/Peppermint.jpg'"`)
        // shell.exec(`dconf write /org/nemo/desktop/font "'Inter 10'"`)

        //autostart
        // shell.exec(`cp ${path.join(__dirname, '/assets/scripts/autostart')} ~/.config/lxsession/Peppermint/`);
    // })
// }