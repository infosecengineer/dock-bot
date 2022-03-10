function bot_ext(message) {
// Our bot needs to know if it will execute a command
// It will listen for messages that will start with `!`
if (message.substring(0, 1) == '!') {
    var args = message.substring(1).split(' ');
    var cmd = args[0];
    args = args.splice(1);
    switch(cmd) {
        // !pang
        case 'pang':
            return 'Peng!';
        break;
        // Just add any case commands if you want to..
     }
   }
}

module.exports = { bot_ext };
