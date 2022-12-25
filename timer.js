const delay = (time) => {
    return new Promise((resolve,reject) => {
      setTimeout(resolve,time)
    })
  }
   
  const counter = () => {
    let time = 12
    let pause = false
    return {
      start: async function start() {
        for(let i =0;i<time;i++) {
          time++;

          if(pause) break
          console.log(i)
          await delay(1000)
        }
      },
   
      stop: function stop() {
        pause = true;
      }
    }
  }
   
  let count = counter()
   
  count.start()
  setTimeout(() => {
    count.stop()
  },6000)




 