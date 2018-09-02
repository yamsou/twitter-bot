const T = require("./Twit.js");
const my_user_name = require("../config").userName;
const timeout = 1000 * 60 * 5; // timeout to send the message 5 min

const AutoDM = () => {
  //const stream = T.stream("user");
  console.log("Start Sending Auto Direct Message 🚀🚀🚀");
  //stream.on("follow", SendMessage);
  T.get('statuses/mentions_timeline', {"count": 1},
    function (err, data, response) {
      console.log(data[0].user.id_str);
  });
  T.get('users/show', {"screen_name": "yorozuyams"}, 
    function (err, data, response) {
      T.post('direct_messages/events/new', {"event": {"type": "message_create", "message_create": {"target": {"recipient_id": data.id_str}, "message_data": {"text": GenerateMessage(data.name)}}}},
      function (err, data, response) {
        console.log("envoi " + data);
      });
  });
  
  //const data2 = T.get('direct_messages/events/show', {"id": "1033956357559537668"}, 
  //  function (err, data, response) {
  //    console.log("get 1 dm "+ data.event.message_create.message_data.text);
  //    console.log(err);
  //  });
  //const data3 = T.get('direct_messages/events/list', 
  //  function (err, data, response) {
  //    console.log(data.events);
  //    console.log(err);
  //});
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
  "Dimanche",
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi"
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
  return `Zalu ${name}, Bon ${dayName} 😊😊 et ${randomMessage} `; // your message
  // My message   return `Hi ${name} Thanks for being a part of my social media network. I'am the @PicsrushE founder,A new Online Image Editor completely with web technologies,I'm also a reactjs developer and medium blogger.\n Happy to discuss anytime 😊  \n Happy ${dayName} 😊😊 `;
};

module.exports = AutoDM;
