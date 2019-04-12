var robotImages = document.querySelectorAll('.robot-images')

for (var i = 0; i < robotImages.length; i++) {
  if (robotImages[i].childElementCount > 1) {
    var images = robotImages[i].querySelectorAll('img')
    var bullets = document.createElement('div')
    bullets.className = 'bullets'
    robotImages[i].appendChild(bullets)
    for (var j = 0; j < images.length; j++) {
      if (j === 0) {
        images[j].id = 'active-slide'
      } else {
        images[j].id = 'inactive-slide'
      }
      createBullet(robotImages[i].querySelector('.bullets'))
    }
    robotImages[i].querySelector('.bullet').id = 'active-bullet'
    robotImages[i].addEventListener('click', function() {     
      var curr = this.querySelector('#active-slide')
      var bull = this.querySelector('#active-bullet')
      if (curr.nextElementSibling.src) {
        curr.nextElementSibling.id = 'active-slide'
        bull.nextElementSibling.id = 'active-bullet'
      } else {
        this.querySelector('img').id = 'active-slide'
        this.querySelector('.bullet').id = 'active-bullet'
      }
      curr.id = 'inactive-slide'
      bull.id = 'inactive-bullet'
    })
  }
}

function createBullet(el) {
  var bullet = document.createElement('span')
  bullet.className = 'bullet'
  el.appendChild(bullet)
}

var all = document.querySelector('aside .all')
var autobots = document.querySelector('aside .Autobots')
var decepticons = document.querySelector('aside .Decepticons')
var time = document.querySelector('aside .Time')
var thirteen = document.querySelector('aside .Thirteen')

all.addEventListener('click', function() {
  document.body.id = ''
})
autobots.addEventListener('click', function () {
  document.body.id = 'autobots'
})
decepticons.addEventListener('click', function () {
  document.body.id = 'decepticons'
})
time.addEventListener('click', function () {
  document.body.id = 'time'
})
thirteen.addEventListener('click', function () {
  document.body.id = 'thirteen'
})
