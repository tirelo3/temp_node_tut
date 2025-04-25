// npm - global command, comes with node
// npm -v

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>

// package.json - manifest file(stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default) 

//---------------------------------------------------------------------------
// before installaing external package, install json package manager (npm init -y)
// To install external package (npm i <packageName>)

// having package.json is very crucial when it comes to sharing our project with other developers

//------------------------------------
// How to save aproject in github repo
//------------------------------------
// 1 - Log in to github, 
// 2 - Create new project.
// 3 - come to vs code command line and do the following commands : 
//   - git init
//   - git add .
//   - git commit -m "first commit"

//   - git remote add origin <git-project-url>
//   - git branch -M main
//   - git push -u origin main



// When you clone a repo, all you do is command "npm install" to download the external modules of that 
// project, package.json handles all the work, it has all package names and urls.



// install this package : "npm i nodemon -D" or "npm i nodemon --save-dev"
// install it globally  : "npm install -y nodemon" 
//    - It allows you to run files like : "nodemon app.js"
//    - Live updates

// to unistall a package : "npm uninstall <packageName>"