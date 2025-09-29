// TODO Q6
const logHandler = async(logs) => {
  let index = 0

  const timerId = setInterval(() => {
    if(index>=logs.length) return ()=>clearInterval(timerId)
      console.log(logs[index])
    index++;
  }, 1000);

}

export {
  logHandler
};
