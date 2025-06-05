
function callback() {
  const now = new Date()
  let hrs = now.getHours();
//   const ampm = hrs >= 12? 'PM':'AM';
//   hrs = hrs % 12 || 12;
  const hh = String(hrs).padStart(2,'0')
  const mm = String(now.getMinutes()).padStart(2,'0')
  const ss = String(now.getSeconds()).padStart(2,'0')
  console.clear();
//   console.log(`${hh}:${mm}:${ss} ${ampm}`);
  console.log(`${hh}:${mm}:${ss}`);
}

setInterval(callback, 1000);
