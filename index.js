var TelegramBot = require('node-telegram-bot-api')
require('dotenv').config()
var x=null,y=null;
x=process.env.token
y=process.env.myid
console.log("Tkn : "+x+"\nID : "+y)
//if(x==null || y==null) process.exit(1);


var telegram = new TelegramBot(process.env.token, { polling: true });
var stat=true;
var  longlog="";
var logging=false;
var loglist=new Array("System Summary : "," ");

function addtolist(element) {
    longlog=longlog+"\n"+element;
}
function sendimages(element) {
    telegram.sendPhoto(process.env.myid,element,{caption: 'Prof pics'});
}
function showadminhint() {
    telegram.sendMessage(process.env.myid, " Hello Admin !" );
    telegram.sendMessage(process.env.myid, " Here are custom command lists\n"
        +"-> bstat on/off to turn bot on or off\n"
        +"-> ansnd id,message to send anonymous messages\n"
        +"-> lging on/off to turn bot on or off\n"
        +"-> More commands comming soon ....\n"
    );

}

telegram.on("text", (message) => {
    //console.log('Message Recieved: '+message.text+" from "+message.chat.id);



    if(message.chat.id == process.env.myid)
{
    //var ll=new Array();
    //telegram.getUserProfilePhotos(message.chat.id);
    //sendimages(ll[0]);
    // console.log(message.chat.username+"Images recieved");
    //ll.forEach(sendimages);

    var msg,cmd, act;
    msg=message.text;
    cmd=msg.substring(0,5);
    act=msg.substring(5);
    switch(cmd)
    {
        case "bstat":
            telegram.sendMessage(process.env.myid, " Hello Admin , Your command is being Processed !\n"+cmd+" "+act );
            if(act=="on") {stat=true;
                telegram.sendMessage(process.env.myid, "BOt Turned On" );
            }
            else if(act=="off") {stat =false;
                telegram.sendMessage(process.env.myid, "Bot Turned Off" );
            }
            else showadminhint();
            break;
        case "ansnd" :
            telegram.sendMessage(process.env.myid, " Hello Admin , Your command is being Processed !\n" );

            var clid=act.substring(0,10);
            var mssg=act.substring(10)
            telegram.sendMessage(clid, mssg );
            break;
        case "lging":

            if(act=="on") {logging=true;
                telegram.sendMessage(process.env.myid, "Continious LOGGING Turned On" );
                loglist.forEach(addtolist);
                telegram.sendMessage(process.env.myid, "Log till now is :" );
                telegram.sendMessage(process.env.myid, longlog );
                loglist=null;
                loglist=new Array("System Summary : "," ");
            }
            else if(act=="off") {logging =false;

                telegram.sendMessage(process.env.myid, "Continious LOGGING Turned Off" );

            }
            else showadminhint();
            break;
        default :
            showadminhint();
    }


}
else{
    if(stat==true) {
        if(logging) {
            if (typeof message.chat.username !== 'undefined' && chat.username !== null) {
                // console.log("is null");
                telegram.sendMessage(process.env.myid, "@" + message.chat.username + " Said " + message.text);
            }else
                telegram.sendMessage(process.env.myid, "" + message.chat.id + " Said " + message.text);
        }
        else {
            if (typeof message.chat.username !== 'undefined' && chat.username !== null) {
                //console.log("is null")
                loglist.push("@" + message.chat.username + " Said " + message.text + "");
            }else
                loglist.push("" + message.chat.id + " Said " + message.text + "");
        }
        if (message.text == "/start") {
            telegram.sendMessage(message.chat.id, "Hello Visitor\nThis is the official bot of watch now\n"
                + "You can get updated movie lists right on your hands\n"
                + "Use our custom commands to navigate\n"
                + "Enjoy your time !!"
            );
        }
        else if (message.text == "/boxoffice") {
            telegram.sendMessage(message.chat.id, "Todays Top 5 box office movies are :\n"
                + "1," + " Gone With the wind\n"
                + "2," + " I am Legend\n"
                + "3," + " I Robot\n"
                + "4," + " Tkur Fkr\n"
                + "5," + " Elmon Ewedewalew\n"
            );
        }
        else if (message.text == "/movieshop") {
            telegram.sendMessage(message.chat.id, "Available Movie Shops are :\n"
                + "1," + " Jossy Movies 22 - Mazoria\n"
                + "2," + " Trios Movies Gotera - Condimiinium\n"
                + "3," + " Mohambi Movies - Bole\n"
            );
        }
        // else if (message.text == "WNADMINSHUTDOWNyon") {
        //     telegram.sendMessage(message.chat.id, "Quitting System");
        //
        //     // timeout(1000);
        //
        // }
        else telegram.sendMessage(message.chat.id, "" + message.text + " Yourself"
            );
    }else {
        if(logging) {
            if (typeof message.chat.username !== 'undefined' && chat.username !== null) telegram.sendMessage(process.env.myid, "" + "BOT is off but " +"@" + message.chat.username + " Said " + message.text);
            else telegram.sendMessage(process.env.myid, "" + "BOT is off but " + message.chat.id + " Said " + message.text);
        }
        else {
            if (typeof message.chat.username !== 'undefined' && chat.username !== null) loglist.push( "BOT wass off but " +"@" +  message.chat.username + " Said " + message.text + "");
            else loglist.push("BOT was off but " + message.chat.id + " Said " + message.text);
        }

    }
}
});

