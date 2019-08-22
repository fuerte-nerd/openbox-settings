const shell = require('shelljs');

module.exports = {
    apt: [
        'openbox',
        'obmenu',
        'obconf',
        'xscreensaver',
        'guake',
        'conky-all',
        'git',
        'font-manager',
        'recordmydesktop',
        'focuswriter',
        'python3-pip',
        'redshift',
        'synergy',
        'dconf-cli',
        'xpad',
        'pasystray',
        'libnotify-bin'
    ],

    npm: [
        'gatsby-cli',
        'prettier'
    ],

    pip3: [
        'django'
    ],

    special: {
        install: [
            //vscode
            {
                name: 'vscode',
                command: `curl https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > microsoft.gpg && sudo mv microsoft.gpg /etc/apt/trusted.gpg.d/microsoft.gpg && sudo sh -c 'echo "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main" > /etc/apt/sources.list.d/vscode.list' && sudo apt update && sudo apt install code`
            },
            //inkscape
            {
                name: 'inkscape',
                command: `sudo add-apt-repository -y ppa:inkscape.dev/stable && sudo apt-get update && sudo apt-get -y install inkscape`
            },
            //blender
            {
                name: 'blender',
                command: `sudo add-apt-repository -y ppa:thomas-schiex/blender && sudo apt-get update && sudo apt-get -y blender`
            },
            //vlc
            {
                name: 'vlc',
                command: `sudo add-apt-repository -y ppa:videolan/master-daily && sudo apt-get update && sudo apt -y install vlc qtwayland5 && sudo apt -y install libavcodec-extra`
            },
            //chrome
            {
                name: 'chrome',
                command: 'wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb && sudo dpkg -i google-chrome-stable_current_amd64.deb'
                //TODO: remove .deb file
            },
            //cerebro
            {
                name: 'cerebro',
                command: 'wget https://github.com/KELiON/cerebro/releases/download/v0.3.0/cerebro_0.3.0_amd64.deb && sudo gdebi --n cerebro_0.3.0_amd64.deb',
                //TODO: remove .deb file
            },
            //unetbootin
            {
                name: 'unetbootin',
                command: 'sudo add-apt-repository ppa:gezakovacs/ppa &&  sudo apt-get --yes --force-yes update &&  sudo apt-get --yes --force-yes install',
            },
            //openshot
            {
                name: 'openshot',
                command: 'sudo add-apt-repository -y ppa:openshot.developers/ppa && sudo apt-get update && sudo apt-get --yes install openshot-qt'
            },
            //gimp
            {
                name: 'gimp',
                command: 'sudo add-apt-repository -y ppa:otto-kesselgulasch/gimp && sudo apt-get update && sudo apt-get --yes install gimp'
            }
        ],
        uninstall: [
            //chrome
            {
                name: 'chrome',
                command: 'sudo apt-get purge --yes --force-yes google-chrome-stable'
            },
            //cerebro
            {
                name: 'cerebro',
                //check installed name name
                command: 'sudo apt-get purge --yes --force-yes cerebro'
            },
            //unetbootin
            {
                name: 'unetbootin',
                command: 'sudo apt-get purge --yes --force-yes unetbootin'
            },
        ]
    }

}
