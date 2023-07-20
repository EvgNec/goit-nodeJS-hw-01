const fs = require("fs/promises");

const fileOperatinn = async() => {

    const data = await fs.readFile("./files/file.txt");
    console.log("data", data)
}



// fs.readFile = ("./files/file.txt").
//     then(data => console.log("data", data))
//     .catch(err => console.log("error", err.message)    
// )