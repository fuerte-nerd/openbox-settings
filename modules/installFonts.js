const fs = require('fs');
const shell = require('shelljs')
const path = require('path')
const home = require('os').homedir()

module.exports = () => {
    return new Promise((res, rej)=>{
        console.log(`Started at ${new Date()}`)
        shell.mkdir('~/.fonts')
        const files = fs.readdirSync('./assets/fonts')
        files.map((file) => {
                shell.exec(`cp ./assets/fonts/${file} ~/.fonts`)
        })
        //Google fonts
        shell.exec('git clone https://github.com/google/fonts.git ~/temp_google', ()=>{
            fs.readdirSync(`${home}/temp_google/ofl/`).map((dir)=>{
                fs.readdir(`${home}/temp_google/ofl/${dir}`).map((file)=>{
                    if(path.extname(file) === '.ttf'){
                        shell.exec(`cp ~/temp_google/ofl/${dir}/${file} ~/.fonts`);
                    }
                })
            })
            // shell.exec('rm -r ~/temp_google')
            shell.exec('rm -r ~/temp_google', res('Fonts installed'))
            console.log(`Finished at ${new Date()}`)
        })
    })
}