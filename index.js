var TelegramBot = require('node-telegram-bot-api'),
     telegram = new TelegramBot("391450427:AAGYnOAKjV72Hyi_lA2sv0OL7SxNP4S1-Eo", { polling: true });

telegram.on("text", (message) => {
	console.log('Message Recieved: '+message.text);
if(message.text=="/start"){
    telegram.sendMessage(message.chat.id, "Hello Visitor\nThis is the official bot of watch now\n"
    +"You can get updated movie lists right on your hands\n"
        +"Use our custom commands to navigate\n"
        +"Enjoy your time !!"
    );}
	else if(message.text=="/boxoffice"){
  telegram.sendMessage(message.chat.id, "Todays Top 5 box office movies are :\n"
      +"1,"+" Gone With the wind\n"
      +"2,"+" I am Legend\n"
      +"3,"+" I Robot\n"
      +"4,"+" Tkur Fkr\n"
      +"5,"+" Elmon Ewedewalew\n"
  );}
else if(message.text=="/movieshop"){
    telegram.sendMessage(message.chat.id, "Available Movie Shops are :\n"
        +"1,"+" Jossy Movies 22 - Mazoria\n"
        +"2,"+" Trios Movies Gotera - Condimiinium\n"
        +"3,"+" Mohambi Movies - Bole\n"
    );}
else if(message.text=="ADMINSHUTDOWNYOON") {
    telegram.sendMessage(message.chat.id,"Quitting System");

    timeout(1000);
    process.exit(1);}
  else  telegram.sendMessage(message.chat.id,"I Couldnt Understand\nwhat uve said ..\n"
    +"What u've said was : \n"
    +message.text
    );
});

