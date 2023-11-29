import {
  StandingLeft, 
  StandingRight,
  SittingLeft,
  SittingRight,
  RunningLeft,
  RunningRight,
  JumpingLeft,
  JumpingRight,
  FallingLeft,
  FallingRight
} from './State.js'

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
  #speed
  #maxSpeed
  #vy
  #weight

  constructor(gameWidth, gameHeight) {
    this.#gameWidth = gameWidth
    this.#gameHeight = gameHeight
    this.#states = [
      new StandingLeft(this), 
      new StandingRight(this), 
      new SittingLeft(this), 
      new SittingRight(this),
      new RunningLeft(this),
      new RunningRight(this),
      new JumpingLeft(this),
      new JumpingRight(this),
      new FallingLeft(this),
      new FallingRight(this)
    ]
    this.#currentState = this.#states[1]
    this.#img = dogImg
    this.#width = 200
    this.#height = 181.83
    this.#x = this.#gameWidth * 0.5 - this.#width * 0.5
    this.#y = this.#gameHeight - this.#height
    this.#frameX = 0
    this.#frameY = 0
    this.#speed = 0
    this.#maxSpeed = 10
    this.#vy = 0
    this.#weight = 1
  }

  set frameY(value){
    this.#frameY = value
  }
  set speed(value){
    this.#speed = value
  }
  set vy(value){
    this.#vy = value
  }
  get maxSpeed(){
    return this.#maxSpeed
  }
  get currentState(){
    return this.#currentState
  }
  get vy(){
    return this.#vy
  }

  update(input){
    this.#currentState.handleInput(input)
    //horizontal movement
    this.#x += this.#speed
    if(this.#x <= 0) this.#x = 0
    else if(this.#x >= this.#gameWidth - this.#width) this.#x = this.#gameWidth - this.#width
    // vertical movement
    this.#y += this.#vy
    if(!this.onGround()){
      this.#vy += this.#weight
    } else{
      this.#vy = 0
    }

    if(this.#y > this.#gameHeight - this.#height) this.#y = this.#gameHeight - this.#height
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

  onGround(){
    return this.#y >= this.#gameHeight - this.#height
  }
}