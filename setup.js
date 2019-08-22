const shell = require('shelljs');
const installPackages = require('./modules/installPackages');
// const uninstallPackages = require('./uninstallPackages');
const installFonts = require('./modules/installFonts')

// installPackages()
//     .then(installFonts()
//     .then()
//     .catch((err) => {
//         console.error(err);
//     })
installFonts()
.then((message) =>{
    console.log(message);

});
// install dconf
// write properties with dconf write KEY VALUE 

//uninstallPackages().then((uninstalledPackages)=> {
//    console.clear()
//    uninstalledPackages.map((name)=>{
//        console.info(name)
//    })
//})

// installPackages().then(()=>{
    //do something
    // create autostart file for openbox
// const autostartContent = `
// tint2 &
// xscreensaver &
// nitrogen &
// plank &
// guake &
// conky
// `
//     shell.mkdir(`~/.config/openbox/`)
//     shell.exec(`echo "${autostartContent}" >> ~/.config/openbox/autostart`)
//     console.log('reached end of script...')
// })
//then run all sudo operations...

// console.info('installing packages\n\nplease wait......\n\n\n')


//git
// shell.exec('sudo apt install git && git config --global user.email "dandrews82@gmail.com" && git config --global user.name "dandroos"', {
//     silent: true
// });


// console.info('Packages successfully installed.\n\nConfiguring...')



//NOTE: Add synergy?




// openbox obconf obmenu
// nitrogen
// xscreensaver
// plank
// tint2
// guake
// conky

// chrome
// vscode
// vlc
// inkscape
// blender
// pcmanfm  --already comes with peppermint
// fontmanager
// unetbootin
// recordmydesktop
// postman
// focuswriter

// git
// gatsby
// django
// pip
// change python3 alias to python?
