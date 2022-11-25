module.exports = {
  name: "disconnected",
  async execute() {
    console.log(chalk.redBright("Disconnected from MongoDB!"));
  },
};
