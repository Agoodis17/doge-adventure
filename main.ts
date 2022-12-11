namespace SpriteKind {
    export const treat = SpriteKind.create()
    export const floer = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    game.over(false, effects.dissolve)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    game.over(true, effects.confetti)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (doge_the_doge.vy == 0) {
        doge_the_doge.vy = -175
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.treat, function (sprite, otherSprite) {
    info.changeScoreBy(3)
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.floer, function (sprite, otherSprite) {
    otherSprite.destroy()
    bea = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    animation.runImageAnimation(
    bea,
    [img`
        ....................
        ............99......
        .........999119.....
        ........9111119.....
        .......91111919.....
        .......91119119.....
        .....fff1191119.....
        ..ffff5ffffff19.....
        .ff555555f55fff.....
        .f555f55ff55f5f.....
        .f55f555f55ff5f.....
        .f555f55f55f55ff....
        .f555555f55f55fff...
        .f55ff55f55f55ff....
        .f5f55f5f55f55f.....
        .f555555f55f5ff.....
        .f555555f55f5f......
        .ffffff5f55ff.......
        .......fffff........
        ....................
        `,img`
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        .....fff............
        ..ffff5ffffff.......
        .ff555555f55fff.....
        .f555f55ff55f5f.....
        .f55f555f55ff5f.....
        .f555f55f55f55ff....
        .f555555f55f55fff...
        .f55ff55f55f55ff....
        .f5f55f5f55f55f.....
        .f555555f55f5ff.....
        .f555555f55f5f......
        .ffffff5f55ff.......
        .......fffff........
        ....................
        `],
    100,
    true
    )
    bea.setPosition(doge_the_doge.x + 80, doge_the_doge.y - 80)
    bea.follow(doge_the_doge)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    if (doge_the_doge.y < otherSprite.y) {
        info.changeScoreBy(5)
    } else {
        info.changeLifeBy(-1)
    }
})
let bea: Sprite = null
let floer: Sprite = null
let treat: Sprite = null
let doge_the_doge: Sprite = null
scene.setBackgroundColor(9)
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999d99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999dd999999d9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999ddd99999d999999999999d999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999ddddd9999dd9999999999ddd99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999ddddddd999dd9999999999ddd99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999d9dddd999ddd999999999ddddd9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999ddddd999dddd99999999dddddd999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999ddddddd999dd9999999999dddd9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999dddd9dd99ddd9999999dddddd9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999dddddd999ddd999999999dddddd999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999dd9ddddd99dddd9999999ddddd9dd99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999dddddddddddd999999ddddddd9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999ddddddddddddddddddd99dddddd999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999d9999999999ddddddddddddddddddddd99dddddd9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999d999999999999999999
    999999999999ddd99999999999ddddddddddddddddddddddd99999999999999999999999999999999999999999999999999999999999999999999999999999999999999d9999dd999999999999999999
    999999999999dd9999999999dddddddddddddddddddddddddd9999999999999999999999999999999999d99999999999999999999999999999999999999999999999999dd999dd999999999999999999
    99999999999ddd999999999dddddddddddddddddddddddddddd999999999999999999999999999999999dd9999999999999999999999999999999999999999999999999dd99ddd999999999999999999
    9999999999ddddd999999ddddddddddddddddddddddddddddddd99999999999999999999999999999999dd99999999999999999999999999999999999999999999d999dddd9ddddd9999999999999999
    99999999999ddd99999dddddddddddddddddddddddddddddddddd999999999999999999999999999999dddd999999999999999999999999999999999999999999ddd99dddd99dd999999999999999999
    999999999999ddd999dddddddddddddddddddddddddddddddddddd99999999999999999999999999999dddd9999d9999999999999999999999999999999999999ddd999dd99dddddd999999999999999
    9999999999dddd99ddddddddddddddddddddddddddddddddddddddd999999999999999999999dd999999dd99999d999999999999999999999999999999999999dddd9ddddddddd999999999d99999999
    99999999999ddddddddddddddddddddddddddddddddddddddddddddd9999999999999999999ddd9999dddddd999dd9999999999999999999999999999999999999ddd9dddd999dd99999999d99999999
    999999999999ddddddddddddddddddddddddddddddddddddddddddddd99999999999999999dddd99999dddd9999dd999999999999999999999999999999999999ddd99ddddd99d99999999dddd999999
    999999999999dddddddddddddddddddddddddddddddddddddddddddddd999999999999999999ddd9999ddddd99ddd9999999999999d99999999999999999999ddddddddddddd9d999999999d99999999
    99999999999ddddddddddddddddddddddddddddddddddddddddddddddd9999999999999999dddddd9dddddddd9dddd99999999999dd999999999999999999999ddddddddddddddddd9999dddd9999999
    9999999999ddddddddddddddddddddddddddddddddddddddddddddddddd99999999999999dddddd9dddddddddd9dd999999999999ddd9999999999999d99999ddddd99ddddddddddddd999ddd9999999
    99999999dddddddddddddddddddddddddddddddddddddddddddddddddddd999999999999999dddddd99dddd9999ddd9999999999ddddd999999999999d9999dddddddddddddddddddddd99ddddd99999
    9999999dddddddddddddddddddddddddddddddddddddddddddddddddddddd9999999999999dddddd99dddddd99ddd9999999999ddddddd99999999999dd99999dddddddddddddddddddddddddd999999
    999999dddddddddddddddddddddddddddddddddddddddddddddddddddddddd99999999999ddddddddddddddddddddddd9999999d9dddd999999999999dd9999dddddddddddddddddddddddddd9999999
    99999dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd9999999999999ddddddddddddddddddddddd99999ddddd99999999999ddd9999dddddddddddddddddddddddddd9999999
    999ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd99999999999dddddddddddddddddddddddddd99ddddddd99999999999d9999dddddddddddddddddddddddddddd999999
    99ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd99999999dddddddddddddddddddddddddddddd9dddd9d9999999999dddd99dddddddddddddddddddddddddddddd9999
    9dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd99999ddddddddddddddddddddddddddddddddddddd999999999999dd99ddddddddddddddddddddddddddddddddd99
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd999ddddddddddddddddddddddddddddddddddddddd999999999ddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd9999999999dddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd9999999999ddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd9999999ddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd9999dddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    `)
doge_the_doge = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 5 5 . . . . . . . . . . . . 
    . . 4 4 . . . . . . . d . d . . 
    . . 4 4 . . . . . . . 4 . 4 . . 
    . . 4 4 . . . . . . 4 4 4 4 4 . 
    . . 4 4 . . . . . . 4 4 4 4 f . 
    . . 4 4 . . . . . . 4 4 f 4 d . 
    . . 4 4 . . . . . . 4 4 4 f f . 
    . . 4 4 . . . . . . 4 4 4 4 4 . 
    . . d 4 4 4 4 4 4 4 4 4 4 4 . . 
    . . 4 4 4 4 4 4 4 4 4 4 4 4 . . 
    . . 4 4 4 4 4 4 4 4 4 4 4 4 . . 
    . . 4 . . 4 4 4 4 4 4 . . 4 . . 
    . . 4 . . 4 . . . . 4 . . 4 . . 
    . . e e . e e . . . e e . e e . 
    `, SpriteKind.Player)
controller.moveSprite(doge_the_doge, 100, 0)
tiles.setCurrentTilemap(tilemap`level1`)
doge_the_doge.ay = 350
scene.cameraFollowSprite(doge_the_doge)
info.setLife(5)
for (let value of tiles.getTilesByType(assets.tile`myTile2`)) {
    treat = sprites.create(img`
        . . . 5 5 . . . . . . . . . . 5 
        . . . . 5 . . . 5 5 5 5 . . 5 5 
        5 . . . . 5 5 5 5 e e 5 5 5 . . 
        5 5 . 5 5 5 e e e e e e e 5 5 . 
        . . . 5 e e e e e e e e e e 5 5 
        . . . 5 e 4 e e 4 e e e e e e 5 
        . . . 5 e 4 4 4 4 4 4 e e e 5 5 
        . . . 5 e 4 d d d 4 e e e e 5 . 
        5 5 . 5 e e e e e e e e e 5 5 . 
        . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . . . . . . . . . . . . . 5 5 
        . . . . . 5 . . . . . . . . . . 
        . . . . . 5 . . . . 5 5 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.treat)
    animation.runImageAnimation(
    treat,
    [img`
        . . . . . . . 5 5 5 5 5 5 . . . 
        . . 5 . 5 5 5 5 e e e e 5 5 . . 
        . . . . 5 e e e e e e e e 5 . 5 
        5 . . 5 5 e e e e e e e e 5 . . 
        . . 5 5 e e e e e e e e e 5 . . 
        . . 5 e e e e e e e e e e 5 . . 
        . 5 5 e 4 4 4 4 4 e e e e 5 . 5 
        . 5 e e 4 4 4 4 4 4 e e e 5 . . 
        . 5 5 e 4 d d d 4 4 e e e 5 . . 
        . . 5 5 e e e e e 5 5 5 5 5 . 5 
        . . . 5 5 5 5 5 5 5 . 5 5 . . 5 
        . 5 5 . . . . . . . . . . . . . 
        . . . . . 5 5 . . . 5 . . . . . 
        . . . 5 . . 5 . 5 5 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . 5 5 5 5 5 . . . . 
        . . . 5 . 5 5 5 e e e 5 5 . . . 
        . . . . . 5 e e e e e e 5 . 5 . 
        . 5 . . 5 5 e e e e e e 5 . . . 
        . . . 5 5 e e e e e e e 5 . . . 
        . . . 5 e e e e e e e e 5 . . . 
        . . 5 5 e 4 4 4 e e e e 5 . 5 . 
        . . 5 e e 4 4 4 4 e e e 5 . . . 
        . . 5 5 e 4 d d 4 e e e 5 . . . 
        . . . 5 5 e e e 5 5 5 5 5 . 5 . 
        . . . . 5 5 5 5 5 . 5 5 . . 5 . 
        . . 5 5 . . . . . . . . . . . . 
        . . . . . . 5 5 . 5 . . . . . . 
        . . . . 5 . . 5 5 5 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . 5 . . . . . . . . 
        . . . . 5 . 5 5 5 5 5 . . . . . 
        . . . . . . 5 e e e 5 5 . . . . 
        . . 5 . . 5 5 e e e e 5 . 5 . . 
        . . . . 5 5 e e e e e 5 . . . . 
        . . . . 5 e e e e e e 5 . . . . 
        . . . 5 5 e 4 e e e e 5 . . . . 
        . . . 5 e e 4 e e e e 5 . 5 . . 
        . . . 5 5 e 4 4 e e e 5 . . . . 
        . . . . 5 5 e 4 e e e 5 . . . . 
        . . . . . 5 5 5 5 5 5 5 . 5 . . 
        . . . 5 5 . . 5 . 5 5 . . 5 . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . 5 . 5 5 . . . . . . . 
        . . . . . . . 5 5 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . 5 5 5 5 5 . . . . 
        . . . 5 . 5 5 5 e e e 5 5 . . . 
        . . . . . 5 e e e e e e 5 . 5 . 
        . 5 . . 5 5 e e e e e e 5 . . . 
        . . . 5 5 e e e e e e e 5 . . . 
        . . . 5 e e e e e e e e 5 . . . 
        . . 5 5 e 4 4 4 e e e e 5 . 5 . 
        . . 5 e e 4 4 4 4 e e e 5 . . . 
        . . 5 5 e 4 d d 4 e e e 5 . . . 
        . . . 5 5 e e e 5 5 5 5 5 . 5 . 
        . . . . 5 5 5 5 5 . 5 5 . . 5 . 
        . . 5 5 . . . . . . . . . . . . 
        . . . . . . 5 5 . 5 . . . . . . 
        . . . . 5 . . 5 5 5 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
    tiles.placeOnTile(treat, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
for (let value of tiles.getTilesByType(assets.tile`myTile3`)) {
    floer = sprites.create(img`
        . . . . 5 . 3 . 3 . 5 . 3 . . . 
        . . . 3 2 2 2 2 2 2 2 2 2 3 . . 
        . . . 3 3 2 2 2 2 2 2 2 3 3 . . 
        . . . 3 3 3 3 3 3 3 3 3 3 . . . 
        . . . . 4 4 4 3 4 3 4 4 4 . . . 
        . . . . . . 4 4 4 4 4 . . . . . 
        . . . . . . . . 7 . . . . . . . 
        . . . . . . . . 7 . . . . . . . 
        . . 7 7 . . . . 7 . . . . 7 7 . 
        . . 6 7 7 . . . 7 . . . 7 7 7 . 
        . . . 6 7 7 . . 7 . . 7 7 6 . . 
        . . . . 7 7 . . 7 . 7 7 6 . . . 
        . . . . 7 7 7 . 7 7 7 7 . . . . 
        . . . . . 7 7 7 7 7 . . . . . . 
        . . . . . . . 7 7 6 . . . . . . 
        . . . . . . . . 7 . . . . . . . 
        `, SpriteKind.floer)
    tiles.placeOnTile(floer, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
game.onUpdate(function () {
    doge_the_doge.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 5 5 . . . . . . . . . . . . 
        . . 4 4 . . . . . . . d . d . . 
        . . 4 4 . . . . . . . 4 . 4 . . 
        . . 4 4 . . . . . . 4 4 4 4 4 . 
        . . 4 4 . . . . . . 4 4 4 4 f . 
        . . 4 4 . . . . . . 4 4 f 4 d . 
        . . 4 4 . . . . . . 4 4 4 f f . 
        . . 4 4 . . . . . . 4 4 4 4 4 . 
        . . d 4 4 4 4 4 4 4 4 4 4 4 . . 
        . . 4 4 4 4 4 4 4 4 4 4 4 4 . . 
        . . 4 4 4 4 4 4 4 4 4 4 4 4 . . 
        . . 4 . . 4 4 4 4 4 4 . . 4 . . 
        . . 4 . . 4 . . . . 4 . . 4 . . 
        . . e e . e e . . . e e . e e . 
        `)
    if (doge_the_doge.vy < 0) {
        doge_the_doge.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 4 f d f 4 . . . . . e 
            . . . d 4 4 4 4 f 4 4 4 4 4 4 e 
            . . . . . 4 4 f 4 4 4 4 4 . . . 
            . . . d 4 4 4 4 4 4 4 4 4 . . e 
            . . . . . 4 4 4 4 4 4 4 4 4 4 e 
            . . . . . . . . . . 4 4 4 4 . . 
            . . . . . . . . . . 4 4 4 4 . . 
            . . . . . . . . . . 4 4 4 4 . . 
            . . . . . . . . . . 4 4 4 4 . e 
            . . . . . . . . . . 4 4 4 4 4 e 
            . . . . . . . . . . 4 4 4 . . . 
            . . 5 4 4 4 4 4 4 4 4 4 4 . . e 
            . . 5 4 4 4 4 4 4 4 d 4 4 4 4 e 
            `)
    } else if (doge_the_doge.vy > 0) {
        doge_the_doge.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . e 4 4 4 4 d 4 4 4 4 4 4 4 5 
            . . e . . 4 4 4 4 4 4 4 4 4 4 5 
            . . . . . 4 4 4 . . . . . . . . 
            . . e 4 4 4 4 4 . . . . . . . . 
            . . e . 4 4 4 4 . . . . . . . . 
            . . . . 4 4 4 4 . . . . . . . . 
            . . . . 4 4 4 4 . . . . . . . . 
            . . . . 4 4 4 4 . . . . . . . . 
            . . e 4 4 4 4 4 4 4 4 4 4 . . . 
            . . e . . 4 4 4 4 4 4 4 4 4 d . 
            . . . . . 4 4 4 4 4 f 4 4 . . . 
            . . e 4 4 4 4 4 4 f 4 4 4 4 d . 
            . . e . . . . . 4 f d f 4 . . . 
            `)
    } else if (doge_the_doge.x % 2 == 0) {
        doge_the_doge.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 5 5 . . . . . . . . . . . . 
            . . 4 4 . . . . . . . d . d . . 
            . . 4 4 . . . . . . . 4 . 4 . . 
            . . 4 4 . . . . . . 4 4 4 4 4 . 
            . . 4 4 . . . . . . 4 4 4 4 f . 
            . . 4 4 . . . . . . 4 4 f 4 d . 
            . . 4 4 . . . . . . 4 4 4 f f . 
            . . 4 4 . . . . . . 4 4 4 4 4 . 
            . . d 4 4 4 4 4 4 4 4 4 4 4 . . 
            . . 4 4 4 4 4 4 4 4 4 4 4 4 . . 
            . . 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
            . . . 4 . . 4 4 4 . 4 4 . . 4 . 
            . . . 4 . . 4 . . . . 4 . . 4 . 
            . . . e e . e e . . . e e . e e 
            `)
    } else {
    	
    }
    if (doge_the_doge.vx < 0) {
        doge_the_doge.image.flipX()
    }
})
