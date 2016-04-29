/*
	Takes string in the format /tell target message
  Creates Whisper object
*/

module.exports = function (str) {
	var whisper = new Object();
	// "/tell" command code
  if (str.indexOf("/tell") === 0) {
    // so we can separate the command, from the target, from the message
    str = str.split(" ");
    // adds target to authorized list
    whisper.target = str[1];
    // sets our string to the message
    str = str.slice(2);
    str = str.join(" ");
    whisper.message = str;
  } else {
  	throw new Error("String must contain \"/tell\"");
  }

  return whisper;
}
