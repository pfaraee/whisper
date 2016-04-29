# whisper
A module for chat applications to handle World Of Warcraft style whisper commands
## Usage
pass module a string in the format "/tell TARGET MESSAGE", and an object representing the target and message is returned.

### Installation
```
npm install whisper-handler
```

### Example
```
var whisper = require('whisper-handler');
whisper("/tell Ferdinand Hey man! I like your style...");
```
This returns an object where the .target property is equal to "Ferdinand", and
.message property is equal to "Hey man! I like your style..."
