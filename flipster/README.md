# Flipster
a simple desktop application using Node-WebKit, which combines jQuery and a few Node.js modules.
It fetches the most recent articles on Tutorialzine from our RSS feed and turns them into a cool looking 3D carousel using [jQuery Flipster](https://github.com/drien/jquery-flipster).

A tutorial from this website: [tutorialzine.com](https://tutorialzine.com/2015/01/your-first-node-webkit-app)

## Installing Node-WebKit
Head over to [the project page](https://github.com/rogerwang/node-webkit) and download the executable that is built for your operating system. Extract the archive somewhere on your computer. To start it, you need to do this in your terminal:

```
# If you are on linux/osx

/path/to/node-webkit/nw /your/project/folder

# If you are on windows

C:\path\to\node-webkit\nw.exe C:\your\project\folder

# (the paths are only for illustrative purposes, any folder will do)
```

## Running
From here this looks like a standard static website. However, it won't work if you simply double click index.html - it requires Node.js modules, which is invalid in a web browser. To run it, CD into this folder, and try running the app with this command:

/path/to/node-webkit/nw .

## To run you can do:
```C:\path\to\node-webkit\nw.exe C:\your\project\folder```
