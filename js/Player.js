export default class Player{
  #gameWidth
  #gameHeight
  #states
  #currentState
  #img
  #width
  #height
  #x
  #y
  #frameX
  #frameY

  constructor(gameWidth, gameHeight) {
    this.#gameWidth = gameWidth
    this.#gameHeight = gameHeight
    this.#states = []
    this.#currentState = this.#states[0]
    this.#img = dogImg
    this.#width = 200
    this.#height = 181.83
    this.#x = this.#gameWidth * 0.5 - this.#width * 0.5
    this.#y = this.#gameHeight - this.#height
    this.#frameX = 0
    this.#frameY = 0
  }

  update(){

  }

  draw(ctx){
    ctx.drawImage(
      this.#img, this.#frameX * this.#width, this.#frameY * this.#height, this.#width, this.#height,
      this.#x, this.#y, this.#width, this.#height
    )
  }
}