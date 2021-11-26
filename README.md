# RESTServerExample
Minimalistic REST server using NodeJS.
You can use this code to send HTTP requests from the
Alexa backend to another machine (eg. an RaspberryPi, your Laptop, ...).
Then you can do some processing on this machine and send a response
back to Alexa.
The whole server code lives in `server.js`.

## Install
Download and install Node.js: [Node.js](https://nodejs.org/en/) 

### Packages
Open a shell in the root folder and type:
```
npm i
```
to install the dependencies: nodemon, express and cors. Done!

### VSCode plugin
Install the HTTP Live Server plugin.

## Run
Type
```
nodemon server.js
```

Then open a browser and go to localhost:3000. Check out the code in `server.js` to add more endpoints :D  

## How do I make this server public on the internet?
You can use a 3rd party service like [ngrok](https://ngrok.com/) for that. It will make this server, running
on your laptop (or RaspberryPi), visible
on the internet. Thus, anyone can send requests to it.
Say, you started the server, localhost:3000 will be reachable from
your own browser, but it won't be visible to any other machine
on the internet (or even the local network). Start a new Terminal,
go to the directory where ngrok is installed and type:
```
ngrok http localhost:3000
```
Ngrok will generate a URL for you that looks something like this:
```
https://8aa5-95-114-78-27.ngrok.io
```
This URL will be visible from anywhere on the world. So you can
send this link to a friend and she can use it access an endpoint
on your REST server.
If you nee more help setting up ngrok, let me know.

## Finally, how do I send a GET request from Alexa to this server?
Some googling will lead you to the answer really quickly :) The
search should include the keywords: 'http', 'request', 'python' ;)

## I need more help!
No problem. Ask me via Slack or email and we can setup a meeting
via zoom or in 3D (no, not the metaverse-stuff, I mean in person, without
any gadgets) :)





