import {StandingLeft, StandingRight} from './State.js'

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
    this.#states = [new StandingLeft(this), new StandingRight(this)]
    this.#currentState = this.#states[1]
    this.#img = dogImg
    this.#width = 200
    this.#height = 181.83
    this.#x = this.#gameWidth * 0.5 - this.#width * 0.5
    this.#y = this.#gameHeight - this.#height
    this.#frameX = 0
    this.#frameY = 0
  }

  set frameY(value){
    this.#frameY = value
  }

  update(input){
    this.#currentState.handleInput(input)
  }

  draw(ctx){
    ctx.drawImage(
      this.#img, this.#frameX * this.#width, this.#frameY * this.#height, this.#width, this.#height,
      this.#x, this.#y, this.#width, this.#height
    )
  }

  setState(state){
    this.#currentState = this.#states[state]
    this.#currentState.enter()
  }
}