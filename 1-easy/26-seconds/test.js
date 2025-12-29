const clock = () => {
  const today = new Date();
  const hh = today.getHours();
  const mm = today.getMinutes();
  const ss = today.getSeconds();
  console.log(`${hh}:${mm}:${ss}`);
};

setInterval(clock, 1000);
