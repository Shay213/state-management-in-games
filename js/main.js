import Player from "./Player.js"
import InputHandler from "./Input.js"
import {drawStatusText} from './utils.js'

window.addEventListener('load', () => {
  const loading = document.getElementById('loading')
  loading.style.display = 'none'
  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext('2d')
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  const player = new Player(canvas.width, canvas.height)
  const input = new InputHandler()

  let lastTime = 0

  const animate = (timestamp) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    const deltaTime = timestamp - lastTime
    lastTime = timestamp
    
    player.update(input.lastKey)
    player.draw(ctx)
    drawStatusText(ctx, input, player)

    requestAnimationFrame(animate)
  }

  animate(0)
})