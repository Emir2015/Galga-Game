input.onButtonPressed(Button.A, function () {
    karakter.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    karakter.change(LedSpriteProperty.X, 1)
})
input.onGesture(Gesture.Shake, function () {
    control.reset()
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    game.pause()
    basic.pause(5000)
    game.resume()
})
let para: game.LedSprite = null
let skor = 0
let enemy: game.LedSprite = null
let karakter: game.LedSprite = null
karakter = game.createSprite(2, 4)
basic.forever(function () {
    karakter.ifOnEdgeBounce()
    enemy = game.createSprite(randint(0, 4), 0)
    for (let index = 0; index < 4; index++) {
        enemy.change(LedSpriteProperty.Y, 1)
        basic.pause(250)
    }
    if (enemy.isTouching(karakter)) {
        game.pause()
        basic.clearScreen()
        basic.showString("OLDUN!")
        basic.clearScreen()
        basic.showNumber(skor)
        basic.clearScreen()
    }
    if (enemy.isTouchingEdge() == true) {
        enemy.delete()
    }
    if (para.isTouching(karakter)) {
        para.delete()
        skor += 5
        music.play(music.tonePlayable(523, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
    }
})
basic.forever(function () {
    para = game.createSprite(randint(0, 4), 4)
    basic.pause(10000)
})
