const test = () => {
  console.log("Start Sending Auto Direct Message 🚀🚀🚀");
  var schedule = require('node-schedule');

  var j = schedule.scheduleJob('*/1 * * * *', function(){
	console.log(GenerateMessage('moi'))
  });
};

const SendMessage = user => {
  const { screen_name, name } = user.source;

  const obj = {
    screen_name,
    text: GenerateMessage(name)
  };
  // the follow stream track if I follow author person too.
  if (screen_name != my_user_name) {
    console.log(" 🎉🎉🎉🎉 New Follower  🎉🎉🎉🎉🎉 ");
    setTimeout(() => {
      T.post("direct_messages/new", obj)
        .catch(err => {
          console.error("error", err.stack);
        })
        .then(result => {
          console.log(`Message sent successfully To  ${screen_name}  💪💪`);
        });
    }, timeout);
  }
};
const GenerateMessage = name => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  var messages = [
	"Tahia dz",
	"213",
	"🇩🇿🇩🇿🇩🇿",
	"1, 2, 3 viva l'algérie"
  ]
  var randomMessage = messages[Math.floor(Math.random() * messages.length)];
  const d = new Date();
  const dayName = days[d.getDay()];
  return `Zalu ${name} \n Happy ${dayName} 😊😊 and ${randomMessage} `; // your message
  // My message   return `Hi ${name} Thanks for being a part of my social media network. I'am the @PicsrushE founder,A new Online Image Editor completely with web technologies,I'm also a reactjs developer and medium blogger.\n Happy to discuss anytime 😊  \n Happy ${dayName} 😊😊 `;
};

module.exports = test;
