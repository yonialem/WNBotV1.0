var TelegramBot = require('node-telegram-bot-api'),
     telegram = new TelegramBot("391450427:AAGYnOAKjV72Hyi_lA2sv0OL7SxNP4S1-Eo", { polling: true });
var stat=true;
var  longlog="";
var logging=false;
var loglist=new Array("System Summary : ",".............","Sender.....Message",".............");
function addtolist(element) {
    longlog=longlog+"\n"+element;
}
function showadminhint() {
    telegram.sendMessage(314378396, " Hello Admin !" );
    telegram.sendMessage(314378396, " Here are custom command lists\n"
        +"-> bstat on/off to turn bot on or off\n"
        +"-> ansnd id,message to send anonymous messages\n"
        +"-> lging on/off to turn bot on or off\n"
        +"-> More commands comming soon ....\n"
    );

}
telegram.on("text", (message) => {
    //console.log('Message Recieved: '+message.text+" from "+message.chat.id);

    if(message.chat.id == 314378396)
{


    var msg,cmd, act;
    msg=message.text;
    cmd=msg.substring(0,5);
    act=msg.substring(5);
    switch(cmd)
    {
        case "bstat":
            telegram.sendMessage(314378396, " Hello Admin , Your command is being Processed !\n" );
            if(act=="on") {stat=true;
                telegram.sendMessage(314378396, "BOt Turned On" );
            }
            else if(act=="off") {stat =false;
                telegram.sendMessage(314378396, "Bot Turned Off" );
            }
            else showadminhint();
            break;
        case "ansnd" :
            telegram.sendMessage(314378396, " Hello Admin , Your command is being Processed !\n" );

            var clid=act.substring(0,10);
            var mssg=act.substring(10)
            telegram.sendMessage(clid, mssg );
            break;
        case "lging":
            
            if(act=="on") {logging=true;
                telegram.sendMessage(314378396, "Continious LOGGING Turned On" );
            }
            else if(act=="off") {logging =false;
                telegram.sendMessage(314378396, "Continious LOGGING Turned Off" );
                loglist.forEach(addtolist);
                telegram.sendMessage(314378396, "Log till now is :" );
                telegram.sendMessage(314378396, longlog );
                loglist=new Array("System Summary : ",".............","Sender.....Message",".............");

            }
            else showadminhint();
            break;
        default :
            showadminhint();
    }


}
else{
      if(stat==true) {
          if(logging)telegram.sendMessage(314378396, "" + message.chat.id + " Said " + message.text);
          else loglist.push(""+message.chat.id + " Said " + message.text+"");

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
          //     process.exit(1);
          // }
          else telegram.sendMessage(message.chat.id, "" + message.text + " Yourself"
              );
      }else telegram.sendMessage(314378396, "" +"BOT is off but "+ message.chat.id + " Said " + message.text);
}
});

