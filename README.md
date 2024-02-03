## Expo bitcoin wallet app

This is a simple bitcoin wallet example for demonstration purposes only.

DO NOT USE THIS CODE FOR GENERATING MAINNET PRIVATE KEYS AND ADDRESSES!!!

To run the project follow this steps.

```
yarn install
```

There is an issue with cipher-base package with react-native so you need to make one change to it

Replace the second line at `cipher-base/index.js` from this

```js
var Transform = require("stream").Transform;
```

to this code

```js
var Transform = require("readable-stream");
```

Now you can run

```
yarn ios
```

or for Android

```
yarn android
```
