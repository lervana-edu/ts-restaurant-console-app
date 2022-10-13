# Steps

[//]: # (Commands for MAC)

### Prerequisites
- Node v16.17.1
- NPM v8.15.0
- NVM

### Base app

1. Set expected Node version `nvm use`. 
2. Initialize app with NPM: `npm init`.
2. Create src dir: `mkdir src`.
3. Add index.js file: `touch src/index.js`.
4. Add some `console.log("XYZ")` to the index file.
5. Run index.js file by node: `node src/index.js`.
6. Add script to the package.json: `npm pkg set scripts.start="node src/index.js"`. 
7. Run index.js file by script: `npm run start`.

### Add Nodemon
1. Install Nodemon: `npm install -D nodemon`. 
2. Install NPX if you don't have it installed globally: `npm install -g npx`. 
3. Add dev script to use nodemon: `npm pkg set scripts.dev="npx nodemon src/index.js"`. 
4. Run index.js file by dev script: `npm run dev`.

### Add TypeScript
1. Install Typescript and related packages: `npm install -D typescript ts-node @types/node`. 
2. Rename `index.js` to `index.ts`: `mv src/index.js src/index.ts`. 
3. Rename `index.js` occurrences in package.json to `index.ts`: `npm pkg set scripts.start="node src/index.ts"` and `npm pkg set scripts.dev="npx nodemon src/index.ts"`.
4. Run index.js file by dev script: `npm run dev`.

### Add tools
- Prettier and Dotenv: `npm install -D prettier dotenv`
- Prompt: `npm install prompt` `npm install -D @types/prompt`

