// TODO Q6
const logHandler = async (logs) => {
  setInterval(console.log, 1000, ...logs);
};

export {
  logHandler
};
