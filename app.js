const os= require("os")
const greet=require("./func")
const path = require("path")
const fs=require("fs")
const http = require('http')
const EventEmitter = require('events')


const myPath= "C:\Users\Err-404\Downloads\FYP Proposal.pdf"

//use of os commands

console.log(os.homedir())
console.log(os.totalmem())
console.log(os.freemem())
console.log(os.type())
console.log(os.release())
greet("Hamza")


//use of path options
const pathInfo = {
    fileName: path.basename(myPath),
    folderName: path.dirname(myPath),
    fileExtension: path.extname(myPath),
    absoluteOrNot: path.isAbsolute(myPath),
    detailInfo: path.parse(myPath),
}

console.log(pathInfo)

console.log(path.join("C:\Users","Err-404","Downloads","FYP Proposal.pdf"))


//use of make and rename directory commands
fs.mkdir('./newFolder2',(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("folder ccreated successfully")
    }
})

fs.rename('./newFolder1', './newFolder3', (err)=>{
    if(err){
    	console.log(err);
        return;
    }
    console.log('File renamed successfully!')
})


//use of write async command

try{
    // Write to file synchronously
    fs.writeFileSync('./myFolder/myFileSync.txt', 'myFileSync says Hi');
    console.log('Write operation successful');
    
    // Read file synchronously
    const fileData = fs.readFileSync('./myFolder/myFileSync.txt', 'utf-8');
    console.log('Read operation successful. Here is the data:');
    console.log(fileData);
    
} catch(err){
    console.log('Error occurred!');
    console.log(err);
}

//use of write file command

const data = 'Hi,this is newFile.txt';

fs.writeFile('./myFolder/myFile.txt', data, {flag: 'a'}, (err) => {
    if(err){
        console.log(err);
        return;
    } else {
    	console.log('Writen to file successfully!');
    }
})

//use of read file command

fs.readFile('./myFolder/myFile.txt', {encoding: 'utf-8'}, (err, data) => {
    if(err){
    	console.log(err);
        return;
    } else {
    	console.log('File read successfully! Here is the data');
        console.log(data);
    }
})


//use of read write file asynchoronously

try{
    // Write to file synchronously
    fs.writeFileSync('./myFolder/myFileSync.txt', 'myFileSync says Hi');
    console.log('Write operation successful');
    
    // Read file synchronously
    const fileData = fs.readFileSync('./myFolder/myFileSync.txt', 'utf-8');
    console.log('Read operation successful. Here is the data:');
    console.log(fileData);
    
} catch(err){
    console.log('Error occurred!');
    console.log(err);
}


//use of read directory command

fs.readdir('./myFolder', (err, files) => {
    if(err){
    	console.log(err);
        return;
    }
    console.log('Directory read successfully! Here are the files:');
    console.log(files);
})


//use of events in js
const myEmitter = new EventEmitter();

// Listener Function - welcomeUser()
const welcomeUser = () => {
    console.log('Hi There, Welcome to the server!');
}

// Listening for the userJoined event using the on() method
myEmitter.on('userJoined', welcomeUser);

// Emitting the userJoined event using the emit() method
myEmitter.emit('userJoined');

// Listener Function 1: sayHello
const sayHello = () => {
	console.log('Hello User');
}

// Listener Function 2: sayHi
const sayHi = () => {
	console.log('Hi User');
}

// Listener Function 3: greetNewYear
const greetNewYear = () => {
	console.log('Happy New Year!');
}

// Subscribing to `userJoined` event
myEmitter.on('userJoined', sayHello);
myEmitter.on('userJoined', sayHi);
myEmitter.on('userJoined', greetNewYear);



// Listener function
const greetBirthday = (name, newAge) => {
    // name = John
    // newAge = 24
    console.log(`Happy Birthday ${name}. You are now {newAge}!`);
}

// Listening for the birthdayEvent
myEmitter.on('birthdayEvent', greetBirthday);

// Emitting the birthdayEvent with some extra parameters
myEmitter.emit('birthdayEvent', 'John', '24');


//use of http module to create server

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.writeHead(200, {'content-type': 'text/html'});
        res.write('<h1>Home Page</h1>');
        res.end();
    } else if(req.url === '/about'){
        res.writeHead(200, {'content-type': 'text/html'});
        res.write('<h1>About Page</h1>');
        res.end();
    } else if(req.url === '/contact'){
        res.writeHead(200, {'content-type': 'text/html'});
        res.write('<h1>Contact Page</h1>');
        res.end();
    } else {
        res.writeHead(404, {'content-type': 'text/html'});
        res.write('<h1>404, Resource Not Found <a href="/">Go Back Home</a></h1>');
        res.end();
    }
})

server.listen(5000, () => {
	console.log('Server listening at port 5000');
})




