const fs = require('fs');

// reading from a file
fs.readFile('example.txt', 'utf-8', (err, data) => {
    if(err){
        console.error(err);
        return;
    }
    console.log(data);
});

// write to a file
const content = "hello from nodejs";

fs.writeFile('example.txt', content, 'utf-8', (err) => {
    if(err){
        console.error(err);
        return;
    }
    console.log('File has been written');
});

// append to a file
const additionalContent = 'appending more data';

fs.appendFile('example.txt', additionalContent, 'utf8', (err) => {
    if(err){
        console.error(err);
        return;
    }
    console.log('File has been appended');
});

// checking if a file or directory exists

if (fs.existsSync('example.txt')){
    console.log("file exists")
}else{
    console.log("file does not exist");
}

// creating directory

// fs.mkdir('myDirectory', (err) => {
//     if(err){
//         console.error(err);
//         return;
//     }
//     console.log('Directory created');
// })

// deleting directory
fs.rmdir('myDirectory', (err) => {
    if(err){
        console.error(err);
        return;
    }

    console.log("directory removed");
});
