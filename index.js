const fs = require("fs"),
    gradient = require("gradient-string"),
    rs = require("readline-sync")

if (!fs.existsSync("./input")) fs.mkdirSync("./input")
if (!fs.existsSync("./backup")) fs.mkdirSync("./backup")
if (!fs.existsSync("./backup/png")) fs.mkdirSync("./backup/png")
if (!fs.existsSync("./backup/dds")) fs.mkdirSync("./backup/dds")
if (!fs.existsSync("./backup/tex")) fs.mkdirSync("./backup/tex")
if (!fs.existsSync("./output")) fs.mkdirSync("./output") ^ console.error(gradient.instagram("I Created All The File The Program Will Need")) ^ process.exit()


fs.readdir("./input", (err, data) => {
    if (data.length == 0) return console.error(gradient.instagram("Please, Put Some .PNG To Convert Into .TEX")) ^ process.exit()
    var up = rs.question(gradient.morning("Enter the file name of the image you want at the top of the skybox WITHOUT THE FILE EXTENSION: ")),
        down = rs.question(gradient.morning("Enter the file name of the image you want at the bottom of the skybox WITHOUT THE FILE EXTENSION: ")),
        right = rs.question(gradient.morning("Enter the name of the file you want at the right of the skybox WITHOUT THE FILE EXTENSION: ")),
        left = rs.question(gradient.morning("Enter the name of the file you want at the left of the skybox WITHOUT THE FILE EXTENSION: ")),
        back = rs.question(gradient.morning("Enter the name of the file you want at the back of the skybox WITHOUT THE FILE EXTENSION: ")),
        front = rs.question(gradient.morning("Enter the name of the file you want at the front of the skybox WITHOUT THE FILE EXTENSION: "))
    data.forEach(file => {
        if (!file.endsWith("png")) return console.error(gradient.instagram("Please, Put Only .PNG"))
        fs.copyFileSync(`./input/${file}`, `./backup/png/${file}`)
        fs.renameSync(`./input/${file}`, `./input/${file.replace(".png", ".dds")}`)
        file = file.replace(".png", ".dds")
        fs.copyFileSync(`./input/${file}`, `./backup/dds/${file}`)
        fs.renameSync(`./input/${file}`, `./output/${file.replace(".dds", ".tex")}`)
        file = file.replace(".dds", ".tex")
        fs.copyFileSync(`./output/${file}`, `./backup/tex/${file}`)
        setTimeout(() => {
            fs.rename(`./output/${up}.tex`, `./output/sky512_up.tex`, err => {})
            fs.rename(`./output/${down}.tex`, `./output/sky512_dn.tex`, err => {})
            fs.rename(`./output/${right}.tex`, `./output/sky512_rt.tex`, err => {})
            fs.rename(`./output/${left}.tex`, `./output/sky512_lf.tex`, err => {})
            fs.rename(`./output/${back}.tex`, `./output/sky512_bk.tex`, err => {})
            fs.rename(`./output/${front}.tex`, `./output/sky512_ft.tex`, err => {})
        }, 300)
    })
})
setTimeout(() => {
    console.clear()
    console.log(gradient.instagram(`
        __                                                           
        \\ \\                                                          
         \\ \\ ______ ______ ______ ______ ______ ______ ______ ______ 
          \\ \\______|______|______|______|______|______|______|______|
           \\ \\                                                       
            \\_\\                                                      
                ______ _   _ _____  _____ _____ _______   __                 
               | ___ \\ \\ | |  __ \\/ __  \\_   _|  ___\\ \\ / /                 
               | |_/ /  \\| | |  \\/'' / /' | | | |__  \\ V /                  
               |  __/| . ' | | __   / /   | | |  __| /   \\                  
               | |   | |\\  | |_\\ \\./ /___ | | | |___/ /^\\ \\                 
               \\_|   \\_| \\_/\\____/\\_____/ \\_/ \\____/\\/   \\/                                                                  
                                                                       __
                                                                      / /
             ______ ______ ______ ______ ______ ______ ______ ______ / / 
            |______|______|______|______|______|______|______|______/ /  
                                                                   / /   
                                                                  /_/
            All .TEX are been Created and Ready To Use !  `))
}, 500)