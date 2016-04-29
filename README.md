# whisper
A module for chat applications to handle World Of Warcraft style whisper commands
## Usage
pass module a string in the format "/tell TARGET MESSAGE", and an object representing the target and message is returned.

### Installation
```
npm install whisper-handler
```

### Example
```javascript
var whisper = require('whisper-handler');
var obj = whisper("/tell Ferdinand Hey man! I like your style...");

obj.target // "Ferdinand"
obj.message // "Hey man! I like your style..."
```
