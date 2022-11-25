module.exports = {
  name: "error",
  execute(err: Error) {
    console.log(
      chalk.redBright(`An error has occurred with database connection: ${err}`)
    );
  },
};
