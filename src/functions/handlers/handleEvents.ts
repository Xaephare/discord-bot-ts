const fs = require("fs");

module.exports = async (client: any) => {
  const eventFolders = fs.readdirSync("./src/events");
  for (const folder of eventFolders) {
    const eventFiles = fs
      .readdirSync(`./src/events/${folder}`)
      .filter((file: any) => file.endsWith(".ts"));

    switch (folder) {
      case "client":
        for (const file of eventFiles) {
          const event = require(`../events/${folder}/${file}`);
          if (event.once)
            client.once(event.name, (...args: any) =>
              event.execute(...args, client)
            );
          else
            client.on(event.name, (...args: any) =>
              event.execute(...args, client)
            );
        }
        break;
      default:
        break;
    }
  }
};
