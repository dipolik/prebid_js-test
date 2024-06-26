# Prebid.js test task (Advertise X Bid Adapter)

**1. First, you need to install dependencies using npm. Run the following command in your terminal:**
```
npm install
``` 

## 2. Install Prebid.js library:

**2.1 Copy adapter files:** 
Navigate to the ***Adapters*** directory and copy the
***advertisexBidAdapter.js*** and ***advertisexBidAdapter.md*** 
files to the ***/node_modules/prebid.js/modules*** directory.

**2.2 Install dependencies for Prebid.js:** Navigate to the Prebid.js directory within node_modules in terminal:
```
cd node_modules/prebid.js
```

**2.3 Install dependencies:** 
Run the following command to install the dependencies for Prebid.js:
```
npm install
```

**2.4 Build Prebid.js:** Once the dependencies are installed, build the advertisexBidAdapter module in Prebid.js project using gulp:

```
gulp build --modules=advertisexBidAdapter
```

**2.4(2) Or** you can open ***node_modules/prebid.js/modules/.submodules.js*** file and add ***"advertisexBidAdapter"*** item in ***"rtdModule"*** then run `gulp build`  in the terminal to build the entire project.

## 3. Start mock-server:
**3.1 Navigate to the parent directory:** 
```
cd ../..
```
**3.2 Run the mock-server:** Execute the following command in your terminal:

```
npm run start-mock-server
```

## 4. Start the HTTP server:
**4.1 Open a new terminal and start the HTTP server using the following command:**
```
npm run start
```
**4.2 Open the webpage:** Once the HTTP server is started, it will generate links for you. Navigate to one of the links provided after ***Available on:***
