const { ActivityType } = require('discord.js');

module.exports = (client) => {
  console.log(`Logged in as ${client.user.tag}!`);
  
  client.user.setActivity('your status', { type: ActivityType.Playing });
    // Examples:
    // ActivityType.Playing
    // ActivityType.Watching
    // ActivityType.Listening
    // ActivityType.Streaming
    // ActivityType.Custom
    // ActivityType.Competing
};