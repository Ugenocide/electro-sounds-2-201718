# Electro Sounds: Session 1

In this session we will prepare a basic development setup and look into a number of programming principles that will help you to develop a better understanding of how to create generative visual representations using JavaScript. We will use the [p5js](https://p5js.org) library and we will look into  [three.js](https://threejs.org), a cross-browser JavaScript library used to create and display animated 3D computer graphics in a web browser, as well.


## Basic Development Setup

  - Download and install the [Atom](https://atom.io/) text editor
  - Open the Terminal and install the Command Line Tools [link](https://www.moncefbelyamani.com/how-to-install-xcode-homebrew-git-rvm-ruby-on-mac) and run `xcode-select --install` inside the Terminal
  - Install [Homebrew](https://brew.sh/), the missing package manager for macOS
  - After you have successfully installed brew, run `brew update`, then use brew to install [git]() with `brew install git`
	- Then install [node](https://docs.npmjs.com/getting-started/installing-node) with `brew install node`
  - Inside the terminal type `node -v` and you should see node's version number, do the same for npm, the Node Package Manager, `npm -v`
  - Lets install the first node package, [live-server](https://github.com/tapio/live-server), from the Terminal with `npm install -g live-server`. Live-server is a development http server with live reload capability.
  - Now run the following commands line by line
    - `cd ~/Desktop`
    - `mkdir hello-world`
    - `cd hello-world`
    - `echo '<h1>Hello World</h1>' > index.html`
    - `cat index.html`
    - `live-server .`
  - If a browser window opened and show Hello World in big black letters, you are all set and you can continue to the next section. In case this failed, lets see if we can find the bug.

## Browser Development Setup

  - Now that you have managed to run your first local http server, lets open the Developer Tools. If you are using the Chrome browser, the tools can be opened from the Menubar under _View → Developer → Developer Tools_
  - You should see a side-view pop up at the bottom or on the right side of your browser window. Inside the Tab-bar you can find the following sections which can be very useful when developing your website/web-app:
    - Elements: shows you the source code of the HTML document
    - Console: shows you the JavaScript log
    - Sources: the files used to display the current page


## Exercise 1: Clone the class repo to your computer

Use git to clone the class repository from github. Point our terminal to your Documents folder and run the following commands

  - `cd ~/Documents`
  - `mkdir code`
  - `cd code`
  - `git clone https://github.com/sojamo/electro-sounds-2-201718.git`
  - `cd electro-sounds-2-201718`
  - `open .`


<!--
## Exercise 2: Run and edit your first JavaScript project
-->

## Coding Fundamentals

  - What is an API?
  - Where to find documentation?
  - How to save and organise your documents?

To successfully complete all required assignments, the following concepts must be understood and practiced. You will find an example for each item inside the sessions folder.

  - Blocks, Functions, Scope
  - Variables
  - Arrays
  - Loops
  - Conditionals
  - Objects and JSON
  - 2D and 3D mode
  - Various drawing techniques
    - Shape primitives
    - Lines and Curves
    - Custom shapes
    - Transformations
  - Shaders
    - what is a shader?
    - a simple shader example, a filter.
  - Sound
    - load and play
    - microphone input
    - fft
  - Libraries
    - how to extend p5js



### Assignment A

Create a series of 3 sketches, each of which resembles a work by the following artists.: Frieder Nake, Sol Lewitt, Ryoji Ikeda. Then duplicate each sketch and animate the shapes. The sketch size is 960x540px or fullscreen.

#### Submission
  - Submit six p5js sketches based on the template given to you
  - Add a reference image to each sketch folder
  - Add a readme.md file to your submission folder
  - Upload your submission to your Github account in a folder named __Assignment-A__
  - __Assignment A is due in week 5__.


## Links

  - [p5js](https://p5js.org/) is a JavaScript library that starts with the original goal of Processing, to make coding accessible for artists, designers, educators, and beginners, and reinterprets this for today's web.
  - [Introduction to p5.js tutorial](https://www.youtube.com/watch?v=8j0UDiN7my4&vl=en) by Daniel Shiffman, the Coding Train and many more tutorials from the [channel](https://www.youtube.com/channel/UCvjgXvBlbQiydffZU7m1_aw).
  - [Three.js](https://threejs.org) is a cross-browser JavaScript library/API used to create and display animated 3D computer graphics in a web browser. Three.js uses WebGL.
  - [Codepen](https://codepen.io) CodePen is a social development environment for front-end designers and developers [1](https://github.com/nucliweb/People-You-Should-Follow-on-CodePen)
  - [Glitch](https://glitch.com) is the friendly community where you'll build the app of your dreams
  - [Shadertoy](https://www.shadertoy.com) build and share your best shaders with the world
  - [A-frame](https://aframe.io) is a web framework for building virtual reality experiences
  - [Tone.js](https://tonejs.github.io) is a framework for creating interactive music in the browser
  - [p5jsart](https://twitter.com/p5jsart) twitter feed
  - [open processing](https://www.openprocessing.org/) create, fork and explore interactive sketches in p5js
  - [Book of Shaders](https://thebookofshaders.com) is a gentle step-by-step guide through the abstract and complex universe of Fragment Shaders

### Development

  - [Github](https://github.com/) is a development platform inspired by the way you work. From open source to business, you can host and review code, manage projects, and build software alongside millions of other developers.
  - [Atom](https://atom.io/) a text editor.
  - [nodejs](https://nodejs.org/) is a JavaScript runtime built on Chrome's V8 JavaScript engine. [npm](https://www.npmjs.com/) is Node.js' package ecosystem, it is the largest ecosystem of open source libraries in the world.
