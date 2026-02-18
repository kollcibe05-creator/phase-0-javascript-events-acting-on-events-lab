game = document.getElementById('game')
const dodger = document.getElementById("dodger")
dodger.style.backgroundColor = "#FF69B4"
dodger.style.bottom = '0px'

function moveDodgerLeft() {
  const currentPixel = dodger.style.left.replace('px', "")
  const currentPos = parseInt(currentPixel, 10)
  if (currentPos > 0) {
    dodger.style.left = `${currentPos - 1}px`
  }
  }

  // function moveDodgerRight() {
  
  //  const leftyNumbers = dodger.style.left.replace('px', "")
  // const lefty = parseInt(leftyNumbers, 10)
  // if (lefty > 0) {
  //   dodger.style.left = `${lefty + 1}px`
  //   }
  // }

  function moveDodgerRight() {
    const currentPixel =  dodger.offsetLeft

    console.log(currentPixel)
    const moveInterval = 1

    if ((dodger.offsetWidth + moveInterval + currentPixel) <= game.offsetWidth) {
      dodger.style.left = `${currentPixel + moveInterval}px`
    }
  }

  document.addEventListener('keydown', function(e) {
    if(e.key === 'ArrowLeft') {
      moveDodgerLeft()
    }
    else {
      moveDodgerRight()
    }
  })


