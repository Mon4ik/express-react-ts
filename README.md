# Express-react
React App on Express Back-end
## How to setup
1. Clone
   ```sh
   git clone https://github.com/Mon4ik/express-react-app.git
   ```
2. Install packages
   ```sh
   cd express-react
   npm i 
   npm i -D
   ```
3. Build
   - Development (With watching files):
     ```sh
     npm run build:dev
     ```
   - Production:
     ```sh
     npm run build:prod
     ```
4. Start
   - Development (With watching files):
     ```sh
     npm run start:dev
     ```
   - Production:
     ```sh
     npm run start:prod
     ```
## How to edit
### Common
- React files are in `/src`
- First routes defs are in `/index.ts`
- Routes files are in `/routes`
- Public files are in `/public`
## Dist
- Webpack bundles are in `/webpack`
- Typescript build is in `/dist`
### Template
HTML template is in `/views/react.ejs`
Error template is in `/views/error.ejs`
