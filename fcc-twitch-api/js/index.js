// Creating random value for item color
const colorsListItem = ["--yellow", "--coral", "--purple"];
function randomColor(colorsListParam){
      number = Math.floor(Math.random()*colorsListItem.length);
      color = colorsListParam[number];
      return color;
  };
//********************************//
const channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
//********************************//
// Get online channel info
function getStreamInfo() {
  channels.forEach(function(channel) {
    function makeURL(type, name) {
      return 'https://wind-bow.gomix.me/twitch-api/' + type + '/' + name + '?callback=?';
    }
    $.getJSON(makeURL("streams", channel), function(data) {
      var game, status;
       if(data.stream == null){
         game = "Offline";
       }else{
         game = data.stream.game;
       }
          $.getJSON(makeURL("channels", channel), function(data) {
            var logo, name;
            logo = data.logo;
            name = data.display_name;
              $('#list').append('<li class="listItem" style="background-color:var('
                + randomColor(colorsListItem) +')"><img id="logo" class="channelLogo" src="' + logo + '"/>'+'<a target="_blank" href="https://www.twitch.tv/' + channel + '">' + '<p class="channelTitle">' + name + '</p>' + '<p class="channelStatus">' + game + '</p></a></li>')
          })
    });
  });
}
// Call channel info functions
getStreamInfo();