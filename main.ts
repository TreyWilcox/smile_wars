namespace SpriteKind {
    export const Button = SpriteKind.create()
    export const Menu_Selecter = SpriteKind.create()
    export const Menu_Button = SpriteKind.create()
    export const Menu_Button_2 = SpriteKind.create()
    export const Coming_Soon = SpriteKind.create()
    export const Battle_Button = SpriteKind.create()
    export const Quest_Button = SpriteKind.create()
    export const Reaper_1 = SpriteKind.create()
    export const Reaper_One = SpriteKind.create()
    export const Reaper_Two = SpriteKind.create()
    export const Reaper = SpriteKind.create()
    export const Dino_Enemy = SpriteKind.create()
}
namespace StatusBarKind {
    export const Dino_Enemy_Health = StatusBarKind.create()
    export const Reaper_Health = StatusBarKind.create()
}
sprites.onOverlap(SpriteKind.Battle_Button, SpriteKind.Menu_Selecter, function (sprite, otherSprite) {
    Battle_Button.setImage(img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ..........888888888888..........
        ........8887777777777888........
        ......8887766aa666aa677888......
        .....887766688a6688a6667788.....
        ....887666698866988666666788....
        ....866666699666996666666678....
        ...88666666666666666666666688...
        ...886666aa6666666666aa666688...
        ...88666988aaa6666aaa88a66688...
        ...88666698888aaaa88889666688...
        ..cc866666988888888889666668cc..
        .ccbc8666669998888999666668cbcc.
        .fcbcc86666666999966666668ccbcf.
        .fcbbcc886666666666666688ccbdcf.
        .f8bbbccc88888888888888cccbddcf.
        .f8cbbbbccccccccccccccccbdddbcf.
        .f8ccbbbbbccccccccccccb11dddccf.
        .f6ccccbbbdddddddddddd111ddcccf.
        .f6ccccccbbddddddddddd11dbbcccf.
        .f6cccccccccccccbbbbbbbbbdbcccf.
        ..f6cccccccccbbbbbbbbbbbddbccf..
        ..f6cccccccccbbbbbbbbbbbddbccf..
        ..ff6ccccccccbbbbbbbbbbbddbcff..
        ...ff6cccccccbbbbbbbbbbbddbff...
        ....ffcccccccbbbbbbbbbbbdbff....
        ......ffccccbbbbbbbbbbbbff......
        ........ffffffffffffffff........
        `)
    pause(200)
    color.startFade(color.originalPalette, color.Black, 500)
    pause(500)
    Battle_Button.destroy()
    Quest_Button.destroy()
    scene.setBackgroundImage(img`
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
    Reaper_One = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . 6 6 6 5 5 6 6 6 . . . . 
        . . . 7 7 7 7 6 6 6 6 6 6 . . . 
        . . 6 7 7 7 7 8 8 8 1 1 6 6 . . 
        . . 7 7 7 7 7 8 8 8 1 1 5 6 . . 
        . 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
        . 6 7 7 7 8 8 8 6 6 6 6 5 6 6 . 
        . 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
        . 6 8 7 7 8 8 6 6 6 6 6 6 6 6 . 
        . . 6 8 7 7 8 6 6 6 6 6 8 6 . . 
        . . 6 8 8 7 8 8 6 6 6 8 6 6 . . 
        . . . 6 8 8 8 8 8 8 8 8 6 . . . 
        . . . . 6 6 8 8 8 8 6 6 . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Reaper_One)
    Reaper_Two = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . 4 4 4 5 5 4 4 4 . . . . 
        . . . 3 3 3 3 4 4 4 4 4 4 . . . 
        . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
        . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
        . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
        . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
        . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
        . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
        . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
        . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
        . . . 4 2 2 2 2 2 2 2 2 4 . . . 
        . . . . 4 4 2 2 2 2 4 4 . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Reaper_Two)
    Reaper = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111bf.......
        ......fffcdb1bdffff.....
        ....fc111cbfbfc111cf....
        ....f1b1b1ffff1b1b1f....
        ....fbfbffffffbfbfbf....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Reaper)
    Dino_Enemy = sprites.create(img`
        ........................
        ...........cc...........
        ...........cccc.........
        .......cc...ccccccc.....
        .......cccccc555555cc...
        ........ccb5555555555c..
        .....cc..b555555555555c.
        .....cccb555555ff155555c
        .....ccb55555555ff55d55c
        ......b5555555555555555c
        ...c..b555d55555bb13bbc.
        ...cccd55ddddd55bb3335c.
        ....cbdddddddddd55b335c.
        ..cccdddddb55bdddd5555c.
        ..cccdddddb555bbbbcccc..
        ...ccddddddb5555cbcdc...
        ccccbdddddddcb55cbcc....
        cddddddddd55dbccbbc.....
        cbdddddddd555dbbbcc.....
        .ccbdddbbdd555bbcdbcc...
        ...cccbbbbdd55ccdddbc...
        ......cccbdddbccccccc...
        ........cdd555dc........
        ........................
        `, SpriteKind.Dino_Enemy)
    Reaper_StatusBar = statusbars.create(20, 4, StatusBarKind.Reaper_Health)
    Dino_Enemy_StatusBar = statusbars.create(20, 4, StatusBarKind.Dino_Enemy_Health)
    Reaper.setPosition(80, 100)
    Dino_Enemy.setPosition(80, 20)
    mySprite.setPosition(100, 100)
    Reaper_StatusBar.setPosition(80, 112)
    Dino_Enemy_StatusBar.setPosition(80, 9)
    Reaper_One.setPosition(25, 105)
    Reaper_Two.setPosition(25, 85)
    Reaper_StatusBar.value = 100
    Dino_Enemy_StatusBar.value = 100
    Reaper_StatusBar.setColor(7, 2)
    Dino_Enemy_StatusBar.setColor(7, 2)
    Reaper_StatusBar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
    Dino_Enemy_StatusBar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
    color.startFade(color.Black, color.originalPalette, 1000)
    pause(1000)
    game.splash("Blue Orb is Normal", "Red Orb is Special")
})
sprites.onOverlap(SpriteKind.Menu_Selecter, SpriteKind.Menu_Button_2, function (sprite, otherSprite) {
    Menu_Buttons_2.setImage(img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ..........888888888888..........
        ........8887777777777888........
        ......8887766aa666aa677888......
        .....887766688a6688a6667788.....
        ....887666698866988666666788....
        ....866666699666996666666678....
        ...88666666666666666666666688...
        ...886666aa6666666666aa666688...
        ...88666988aaa6666aaa88a66688...
        ...88666698888aaaa88889666688...
        ..cc866666988888888889666668cc..
        .ccbc8666669998888999666668cbcc.
        .fcbcc86666666999966666668ccbcf.
        .fcbbcc886666666666666688ccbdcf.
        .f8bbbccc88888888888888cccbddcf.
        .f8cbbbbccccccccccccccccbdddbcf.
        .f8ccbbbbbccccccccccccb11dddccf.
        .f6ccccbbbdddddddddddd111ddcccf.
        .f6ccccccbbddddddddddd11dbbcccf.
        .f6cccccccccccccbbbbbbbbbdbcccf.
        ..f6cccccccccbbbbbbbbbbbddbccf..
        ..f6cccccccccbbbbbbbbbbbddbccf..
        ..ff6ccccccccbbbbbbbbbbbddbcff..
        ...ff6cccccccbbbbbbbbbbbddbff...
        ....ffcccccccbbbbbbbbbbbdbff....
        ......ffccccbbbbbbbbbbbbff......
        ........ffffffffffffffff........
        `)
    pause(200)
    color.startFade(color.originalPalette, color.Black, 500)
    pause(500)
    Menu_Buttons.destroy()
    Menu_Buttons_2.destroy()
    scene.setBackgroundImage(img`
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111fff1111111111ffff1111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111ffff1111111111fffffff1111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111ffff111111111111111111111111111fffff1111111111ffffffffff1111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111fffffff1111111111111111111111111fffff111111111111fffffffffff11111111111111fff11111111111111111111111111111111111111111111111111
        111111111111111111111111111111111fffffffff11111111111111111111111ffffff11111111111111fffffffffff1111111111fffff1111111111111111111111111111111111111111111111111
        1111111111111111111fff11111111111ffffffffff11111111111ffff1111111ffffff11111111111111111ffffffffffff111111fffff1111111111111111111111111111111111111111111111111
        11111111111111111fffff111111111111ffffffffff111111111fffff1111111ffffff111111111111111111fffffffffff111111ffffff1111111fff11111111111111111111111111111111111111
        1111111111111111ffffff11111111111fffff11fffff11111111fffff1111111fffffff11111111111111111fff11ffffff111111fffffff111111fff11111111111111111ffffff111111111111111
        11111111111111fffffff11111111111fffff1111fffff1111111fffff111111ffffffff11111111111111111fff11111111111111fffffff111111fff111111111111111ffffffff111111111111111
        1111111111111ffffff1111111111111ffff111111ffff111111fffffff11111ffff1fff11111111111111111fff11111111111111fff1ffff11111fff11111111111111fffffffff111111111111111
        111111111111ffffff1111111111111ffff11111111fff111111fffffff11111fff11ffff1111111111111111fff11111111111111fff1fffff1111fff11111111111111fffff1111111111111111111
        1111111111ffffff11111111111111fffff11111111fff11111ffff1ffff111ffff11ffff1111111111111111fff11111111111111fff11ffff1111ffff111111111111ffff111111111111111111111
        111111111ffffff111111111111111ffff111111111fff11111ffff1ffff111ffff111fff1111111111111111fff11111111111111fff111ffff111ffff11111111111fffff111111111111111111111
        111111111fffff1111111111111111fff1111111111fff11111fff111ffff11fff1111ffff111111111111111fff11111111111111fff111fffff111fff1111111111fffff11111111ffffff11111111
        111111111fff111111111111111111fff111111111ffff1111ffff111ffff1ffff1111ffff111111111111111fff11111111111111fff1111ffff111fff111111111fffff111111fffffffff11111111
        111111111fff111111111111111111fff11111111fffff1111ffff1111ffffffff11111ffff11111111111111fff11111111111111fff11111ffff11fff11111111fffff111fffffffffffff11111111
        111111111fff111111111111111111fff11111111ffff1111ffff11111fffffff111111ffff11111111111111fff11111111111111fff11111fffff1fff11111111ffff1111fffffffff111111111111
        111111111fff111111111111111111fff1111111ffff11111ffff111111ffffff1111111fff11111111111111fff11111111111111fff111111ffff1fff11111111fff11111ffffffff1111111111111
        111111111fff111111111111111111ffff11111fffff1111ffff1111111ffffff1111111fff1111111111111ffff11111111111111fff1111111fffffff11111111fff111111111ffff1111111111111
        11111111ffff111111111111111111ffff1111fffff11111ffff11111111ffff11111111fff1111111111111ffff11111111111111fff1111111fffffff11111111fff1111111111fff1111111111111
        11111111ffff1111111111111111111ffff111ffff11111ffff111111111ffff111111111111111111111111fff111111111111111fff11111111ffffff11111111fff111111111ffff1111111111111
        11111111ffff1111111111111111111ffffffffff111111ffff111111111ffff111111111111111111111111fff111111111111111fff111111111fffff11111111fff111111111ffff1111111111111
        11111111ffffff111111111111111111fffffffff111111fff11111111111fff111111111111111111fffffffffffffff111111111fff111111111fffff11111111fff111111111fff11111111111111
        111111111ffffffff111fff1111111111fffffff1111111fff11111111111fff111111111111111111fffffffffffffff111111111fff1111111111ffff11111111fff1111111fffff11111111111111
        1111111111fffffffffffff11111111111111111111111111111111111111111111111111111111111fffffffffffffff1111111111111111111111ffff11111111fffff1111ffffff11111111111111
        111111111111fffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff11111111ffffffffffffff111111111111111
        111111111111111ffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff111111111fffffffffff11111111111111111
        11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffff111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111fffff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111ffffffffffff11111111111111111ffff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111fffffffffffffff11111111111111111ffffff1111111111111111111111111fff1111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111ffffffffffff11111111111111111111fffffff1111111111111111111111ffffff111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111fffff11111111111111111111111111fffffffff1111111111111111111fffffffff1111111111fff1111111111111111111111111111111111111111111111111111111111
        11111111111111111111ffff111111111111111111111111111fffff1ffff11111111111111111fffffffffff111111111ffff1111111111111111111111111111111111111111111111111111111111
        11111111111111111111ffff11111111111111111111111111fffff111ffff111111111111111fffffff11ffff11111111ffff1111111fff111111111111111111111111111111111111111111111111
        11111111111111111111fff111111111111111111111111111ffff1111fffff11111111111111fffff1111fffff1111111fffff11111ffff111111111111111111111111111111111111111111111111
        11111111111111111111fff11111111111111111111111111ffff111111ffff11111111111111fff1111111ffff1111111fffff11111ffff111111111111111111111111111111111111111111111111
        1111111111111111111ffff1111111111111111111111111fffff1111111ffff111111111111ffff11111111ffff111111ffffff111ffff1111111111111111111111111111111111111111111111111
        1111111111111111111ffff1111111111111111111111111ffff11111111ffff111111111111ffff11111111fffff1111fffffff111ffff1111111111111111111111111111111111111111111111111
        1111111111111111111fff1111111111111111111111111ffff1111111111ffff11111111111fff1111111111ffff1111fffffff111fff11111111111111111111111111111111111111111111111111
        111111111111111111ffff111111111111111111111111fffff1111111111fffff111111111ffff1111111111ffff1111fff1fff111fff11111111111111111111111111111111111111111111111111
        111111111111111111fffffff11111111111111111111fffff111111111111ffff111111111ffff1111111111ffff111ffff1fff111fff11111111111111111111111111111111111111111111111111
        111111111111111111fffffffff111111111111111111ffff1111111111111ffff111111111fff11111111111fff1111ffff1ffff1ffff11111111111111111111111111111111111111111111111111
        11111111111111111111ffffffffff11111111111111ffff11111111111111ffff111111111ffff1111111111fff1111fff11ffff1ffff11111111111111111111111111111111111111111111111111
        11111111111111111111111ffffffffff1111111111fffff11111111111111fff1111111111ffff1111111111fff111ffff111fff1fff111111111111111111111111111111111111111111111111111
        1111111111111111111111111fffffffffff1111111ffff11111111111111ffff11111111111fff1111111111fff111ffff111fffffff111111111111111111111111111111111111111111111111111
        1111111111111111111111111111fffffffffff1111fffff1111111111111ffff11111111111ffff111111111fff111fff1111fffffff111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111ffffffff11111ffff1111111111111fff111111111111fffff1111111ffff111fff11111ffffff111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111fffff111111ffff11111111111ffff1111111111111ffff111111fffff111fff11111ffffff111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111fff111111fffff1111111111ffff11111111111111ffff11111ffff1111fff111111ffff1111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111fff1111111fffff111111111fff111111111111111ffffff1fffff11111fff111111ffff1111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111fff11111111fffff111111fffff1111111111111111fffffffffff11111fff111111ffff1111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111fff111111111ffff1111fffffff11111111111111111fffffffff1111111111111111fff1111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111fffff1111111111ffff11fffffff11111111111111111111fffff111111111111111111fff1111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111fffffff1111111111fffffffffff111111111111111111111111111111111111111111111fff1111111111111111111111111111111111111111111111111111
        111111111111111111111111111111ffffffff111111111111ffffffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111ffffffff111111111111111ffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111fffffffffff111111111111111111fff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111fffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111fffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111fff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111fff1111111fff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111fff1111111fff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111fff1111111fff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111fff1111111fff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111fff1111111fff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111fff1111111fff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111fff111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111fff11111111111111111111111111111111ffff111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111ffff111111111111111111111111111111fffff111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111fffff1111111111111111111111111111fffff1111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111fffff11111111111111111111111111fffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111fffff1111111111111111111111111ffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111fffff1111111111111111111111fffff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111fffff11111111111111111111ffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111fffffff1111111111111111ffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111ffffffffff1111111111ffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111ffffffffffff11111fffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111ffffffffffffffffffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111ffffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111fffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        `)
    color.startFade(color.Black, color.originalPalette, 1000)
    mySprite.setPosition(80, 70)
})
sprites.onOverlap(SpriteKind.Menu_Selecter, SpriteKind.Menu_Button, function (sprite, otherSprite) {
    Menu_Buttons.setImage(img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ..........888888888888..........
        ........8887777777777888........
        ......8887766aa666aa677888......
        .....887766688a6688a6667788.....
        ....887666698866988666666788....
        ....866666699666996666666678....
        ...88666666666666666666666688...
        ...886666aa6666666666aa666688...
        ...88666988aaa6666aaa88a66688...
        ...88666698888aaaa88889666688...
        ..cc866666988888888889666668cc..
        .ccbc8666669998888999666668cbcc.
        .fcbcc86666666999966666668ccbcf.
        .fcbbcc886666666666666688ccbdcf.
        .f8bbbccc88888888888888cccbddcf.
        .f8cbbbbccccccccccccccccbdddbcf.
        .f8ccbbbbbccccccccccccb11dddccf.
        .f6ccccbbbdddddddddddd111ddcccf.
        .f6ccccccbbddddddddddd11dbbcccf.
        .f6cccccccccccccbbbbbbbbbdbcccf.
        ..f6cccccccccbbbbbbbbbbbddbccf..
        ..f6cccccccccbbbbbbbbbbbddbccf..
        ..ff6ccccccccbbbbbbbbbbbddbcff..
        ...ff6cccccccbbbbbbbbbbbddbff...
        ....ffcccccccbbbbbbbbbbbdbff....
        ......ffccccbbbbbbbbbbbbff......
        ........ffffffffffffffff........
        `)
    pause(200)
    color.startFade(color.originalPalette, color.Black, 500)
    pause(500)
    Menu_Buttons.destroy()
    Menu_Buttons_2.destroy()
    scene.setBackgroundImage(img`
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111fff1111111111111fff11111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111111111ff1111111111111111111ff111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111f11111111111111111111111f11111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111f1111111111111111111111111f1111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111ff111111111111111111111111111ff11111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111f1111111111111111111111111111111f1111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111f1111111111111111111111111111111f1111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111f111111111111111111111111111111111f111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111f11111111111111111111111111111111111f11111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111f1111111111111111111111111111111111111f1111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111f1111111111111111111111111111111111111f1111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111f111111111111111111111111111111111111111f111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111f111111111111111111111111111111111111111f111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111f111111111111111111111111111111111111111f111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111f11111111111111111111111111111111111111111f11111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111f11111111111111111111111111111111111111111f11111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111f11111111111111111111111111111111111111111f11111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111f11111111111111111111111111111111111111111f11111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111f11111111111111111111111111111111111111111f11111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111f11111111111111111111111111111111111111111f11111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111f11111111111111111111f11111111111111111111f11111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111f111111ff1111111111111111111111111ff111111f11111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111f111111f1fff1111111111111111111fff1f111111f11111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111f111111f1111ff111111111111111ff1111f111111f11111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111f1111111f11111fffffffffffffff11111f1111111f11111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111f11111111f11111111111111111111111f11111111f11111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111f11111111f11111111111111111111111f11111111f11111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111f11111111f111111111111111111111f11111111f111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111f111111111f1111111111111111111f111111111f111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111f1111111111ff111111111111111ff1111111111f111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111f11111111111fff111111111fff11111111111f1111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111f11111111111111fffffffff11111111111111f1111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111f11111111111111111111111111111111111f11111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111f111111111111111111111111111111111f111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111f1111111111111111111111111111111f1111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111f1111111111111111111111111111111f1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111ff111111111111111111111111111ff11111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111f1111111111111111111111111f1111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111f11111111111111111111111f11111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111111111ff1111111111111111111ff111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111fff1111111111111fff11111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111fff11111f1111fffff1fffff1f111fff11111111111111111111111111111111111111111111111111111111111111111111111111111111111ffff111f1111f1fff1fffff1fffff11111111
        11111111f11f111f1f11111f11111f111f111f111111111111111111111111111111111111111111111111111111111111111111111111111111111111f1111f11f1111f1f111f1111111f1111111111
        11111111f11f111f1f11111f11111f111f111f111111111111111111111111111111111111111111111111111111111111111111111111111111111111f1111f11f1111f1f111f1111111f1111111111
        11111111f11f111f1f11111f11111f111f111f111111111111111111111111111111111111111111111111111111111111111111111111111111111111f1111f11f1111f1f111f1111111f1111111111
        11111111f11f11f111f1111f11111f111f111f111111111111111111111111111111111111111111111111111111111111111111111111111111111111f1111f11f1111f1f111f1111111f1111111111
        11111111fff111fffff1111f11111f111f111ff11111111111111111111111111111111111111111111111111111111111111111111111111111111111f1111f11f1111f1f111f1111111f1111111111
        11111111f11f11f111f1111f11111f111f111f111111111111111111111111111111111111111111111111111111111111111111111111111111111111f1111f11f1111f1ff11fffff111f1111111111
        11111111f11f1f11111f111f11111f111f111f111111111111111111111111111111111111111111111111111111111111111111111111111111111111f1111f11f1111f1f1111111f111f1111111111
        11111111f11f1f11111f111f11111f111f111f111111111111111111111111111111111111111111111111111111111111111111111111111111111111f1111f11f1111f1f1111111f111f1111111111
        11111111f11f1f11111f111f11111f111f111f111111111111111111111111111111111111111111111111111111111111111111111111111111111111f1111f11f1111f1f1111111f111f1111111111
        11111111fff11f11111f111f11111f111fff1fff1111111111111111111111111111111111111111111111111111111111111111111111111111111111f11f1f11f1111f1f1111111f111f1111111111
        11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f111ff11f1111f1f1111111f111f1111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffff11ffffff1fff1fffff111f1111111111
        11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f1111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        `)
    Battle_Button = sprites.create(img`
        ..........666668866666..........
        ........6667777777777666........
        ......66677777aa77aa777666......
        .....6677777788a788a7777766.....
        ....667777779887988777777766....
        ....677777779977997777777776....
        ...66777777777777777777777766...
        ...667777aa7777777777aa777766...
        ...88777988aaa7777aaa88a77788...
        ...88777798888aaaa88889777788...
        ...88977779888888888897777988...
        ...88977777999888899977777988...
        ...88997777777999977777779988...
        ...88799777777777777777711788...
        ...88679997777777777779117688...
        ..cc866679999999999999976668cc..
        .ccbc6666679999999999766666cbcc.
        .fcbcc66666666666666666666ccbcf.
        .fcbbcc666666666666666666ccbdcf.
        .f8bbbccc66666666666666cccbddcf.
        .f8cbbbbccccccccccccccccbdddbcf.
        .f8ccbbbbbccccccccccccb111ddccf.
        .f6ccccbbbddddddddddddd111dcccf.
        .f6ccccccbbddddddddddddddbbcccf.
        .f6cccccccccccccbbbbbbbbbdbcccf.
        ..f6cccccccccbbbbbbbbbbbddbccf..
        ..f6cccccccccbbbbbbbbbbbddbccf..
        ..ff6ccccccccbbbbbbbbbbbddbcff..
        ...ff6cccccccbbbbbbbbbbbddbff...
        ....ffcccccccbbbbbbbbbbbdbff....
        ......ffccccbbbbbbbbbbbbff......
        ........ffffffffffffffff........
        `, SpriteKind.Battle_Button)
    Quest_Button = sprites.create(img`
        ..........666668866666..........
        ........6667777777777666........
        ......66677777aa77aa777666......
        .....6677777788a788a7777766.....
        ....667777779887988777777766....
        ....677777779977997777777776....
        ...66777777777777777777777766...
        ...667777aa7777777777aa777766...
        ...88777988aaa7777aaa88a77788...
        ...88777798888aaaa88889777788...
        ...88977779888888888897777988...
        ...88977777999888899977777988...
        ...88997777777999977777779988...
        ...88799777777777777777711788...
        ...88679997777777777779117688...
        ..cc866679999999999999976668cc..
        .ccbc6666679999999999766666cbcc.
        .fcbcc66666666666666666666ccbcf.
        .fcbbcc666666666666666666ccbdcf.
        .f8bbbccc66666666666666cccbddcf.
        .f8cbbbbccccccccccccccccbdddbcf.
        .f8ccbbbbbccccccccccccb111ddccf.
        .f6ccccbbbddddddddddddd111dcccf.
        .f6ccccccbbddddddddddddddbbcccf.
        .f6cccccccccccccbbbbbbbbbdbcccf.
        ..f6cccccccccbbbbbbbbbbbddbccf..
        ..f6cccccccccbbbbbbbbbbbddbccf..
        ..ff6ccccccccbbbbbbbbbbbddbcff..
        ...ff6cccccccbbbbbbbbbbbddbff...
        ....ffcccccccbbbbbbbbbbbdbff....
        ......ffccccbbbbbbbbbbbbff......
        ........ffffffffffffffff........
        `, SpriteKind.Quest_Button)
    color.startFade(color.Black, color.originalPalette, 1000)
    mySprite.setPosition(80, 30)
    Battle_Button.setPosition(23, 93)
    Quest_Button.setPosition(137, 93)
})
let Dino_Enemy_StatusBar: StatusBarSprite = null
let Reaper_StatusBar: StatusBarSprite = null
let Dino_Enemy: Sprite = null
let Reaper: Sprite = null
let Reaper_Two: Sprite = null
let Reaper_One: Sprite = null
let Quest_Button: Sprite = null
let Battle_Button: Sprite = null
let mySprite: Sprite = null
let Menu_Buttons_2: Sprite = null
let Menu_Buttons: Sprite = null
scene.setBackgroundImage(img`
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111fff1111111111111fff11111111111111111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111111111111111111111111ff1111111111111111111ff111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111f11111111111111111111111f11111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111111111f1111111111111111111111111f1111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111ff111111111111111111111111111ff11111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111111f1111111111111111111111111111111f1111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111111f1111111111111111111111111111111f1111111111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111111111111111111f111111111111111111111111111111111f111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111f11111111111111111111111111111111111f11111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111f1111111111111111111111111111111111111f1111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111f1111111111111111111111111111111111111f1111111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111111111111111f111111111111111111111111111111111111111f111111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111111111111111f111111111111111111111111111111111111111f111111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111111111111111f111111111111111111111111111111111111111f111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111f11111111111111111111111111111111111111111f11111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111f11111111111111111111111111111111111111111f11111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111f11111111111111111111111111111111111111111f11111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111f11111111111111111111111111111111111111111f11111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111f11111111111111111111111111111111111111111f11111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111f11111111111111111111111111111111111111111f11111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111f11111111111111111111f11111111111111111111f11111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111f111111ff1111111111111111111111111ff111111f11111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111f111111f1fff1111111111111111111fff1f111111f11111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111f111111f1111ff111111111111111ff1111f111111f11111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111f1111111f11111fffffffffffffff11111f1111111f11111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111f11111111f11111111111111111111111f11111111f11111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111f11111111f11111111111111111111111f11111111f11111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111111111111111f11111111f111111111111111111111f11111111f111111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111111111111111f111111111f1111111111111111111f111111111f111111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111111111111111f1111111111ff111111111111111ff1111111111f111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111f11111111111fff111111111fff11111111111f1111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111f11111111111111fffffffff11111111111111f1111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111f11111111111111111111111111111111111f11111111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111111111111111111f111111111111111111111111111111111f111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111111f1111111111111111111111111111111f1111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111111f1111111111111111111111111111111f1111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111ff111111111111111111111111111ff11111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111111111f1111111111111111111111111f1111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111f11111111111111111111111f11111111111111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111111111111111111111111ff1111111111111111111ff111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111fff1111111111111fff11111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    11111111111ffff111f11111111f1111f111f11111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffff11fffff1f111f1fffff1ffff111111111
    11111111111f111f11f11111111f1111f111f1111111111111111111111111111111111111111111111111111111111111111111111111111111111111f1111f111f111f111f1f11111f111f11111111
    11111111111f1111f1f1111111f1f1111f1f11111111111111111111111111111111111111111111111111111111111111111111111111111111111111f1111f111f111f111f1f11111f111f11111111
    11111111111f1111f1f1111111f1f11111f111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f1111f111f111f111f1f11111f111f11111111
    11111111111f111f11f1111111f1f11111f111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f1111f111f111f111f1f11111f111f11111111
    11111111111ffff111f111111f111f1111f111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f1111f111f111fffff1ffff11f111f11111111
    11111111111f111111f111111fffff1111f111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f1111f111f111f111f1f11111ffff111111111
    11111111111f111111f111111f111f1111f111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f1111f111f111f111f1f11111ff11111111111
    11111111111f111111f11111f11111f111f111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f1111f111f111f111f1f11111f1f1111111111
    11111111111f111111f11111f11111f111f111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f1111f111f111f111f1f11111f11f111111111
    11111111111f111111fffff1f11111f111f1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffff1111f111f111f1fffff1f111f11111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    `)
Menu_Buttons = sprites.create(img`
    ..........666668866666..........
    ........6667777777777666........
    ......66677777aa77aa777666......
    .....6677777788a788a7777766.....
    ....667777779887988777777766....
    ....677777779977997777777776....
    ...66777777777777777777777766...
    ...667777aa7777777777aa777766...
    ...88777988aaa7777aaa88a77788...
    ...88777798888aaaa88889777788...
    ...88977779888888888897777988...
    ...88977777999888899977777988...
    ...88997777777999977777779988...
    ...88799777777777777777711788...
    ...88679997777777777779117688...
    ..cc866679999999999999976668cc..
    .ccbc6666679999999999766666cbcc.
    .fcbcc66666666666666666666ccbcf.
    .fcbbcc666666666666666666ccbdcf.
    .f8bbbccc66666666666666cccbddcf.
    .f8cbbbbccccccccccccccccbdddbcf.
    .f8ccbbbbbccccccccccccb111ddccf.
    .f6ccccbbbddddddddddddd111dcccf.
    .f6ccccccbbddddddddddddddbbcccf.
    .f6cccccccccccccbbbbbbbbbdbcccf.
    ..f6cccccccccbbbbbbbbbbbddbccf..
    ..f6cccccccccbbbbbbbbbbbddbccf..
    ..ff6ccccccccbbbbbbbbbbbddbcff..
    ...ff6cccccccbbbbbbbbbbbddbff...
    ....ffcccccccbbbbbbbbbbbdbff....
    ......ffccccbbbbbbbbbbbbff......
    ........ffffffffffffffff........
    `, SpriteKind.Menu_Button)
Menu_Buttons_2 = sprites.create(img`
    ..........666668866666..........
    ........6667777777777666........
    ......66677777aa77aa777666......
    .....6677777788a788a7777766.....
    ....667777779887988777777766....
    ....677777779977997777777776....
    ...66777777777777777777777766...
    ...667777aa7777777777aa777766...
    ...88777988aaa7777aaa88a77788...
    ...88777798888aaaa88889777788...
    ...88977779888888888897777988...
    ...88977777999888899977777988...
    ...88997777777999977777779988...
    ...88799777777777777777711788...
    ...88679997777777777779117688...
    ..cc866679999999999999976668cc..
    .ccbc6666679999999999766666cbcc.
    .fcbcc66666666666666666666ccbcf.
    .fcbbcc666666666666666666ccbdcf.
    .f8bbbccc66666666666666cccbddcf.
    .f8cbbbbccccccccccccccccbdddbcf.
    .f8ccbbbbbccccccccccccb111ddccf.
    .f6ccccbbbddddddddddddd111dcccf.
    .f6ccccccbbddddddddddddddbbcccf.
    .f6cccccccccccccbbbbbbbbbdbcccf.
    ..f6cccccccccbbbbbbbbbbbddbccf..
    ..f6cccccccccbbbbbbbbbbbddbccf..
    ..ff6ccccccccbbbbbbbbbbbddbcff..
    ...ff6cccccccbbbbbbbbbbbddbff...
    ....ffcccccccbbbbbbbbbbbdbff....
    ......ffccccbbbbbbbbbbbbff......
    ........ffffffffffffffff........
    `, SpriteKind.Menu_Button_2)
mySprite = sprites.create(img`
    . . . . . . . f f . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . f 1 1 f . . . . . . 
    . . . . . . f 1 1 f . . . . . . 
    . . . . . f 1 1 1 1 f . . . . . 
    . . . . . f 1 1 1 1 f . . . . . 
    . . . . f 1 1 1 1 1 1 f . . . . 
    . . . . f 1 f 1 1 f 1 f . . . . 
    . . . f 1 1 1 1 1 1 1 1 f . . . 
    . . . f 1 1 f 1 1 f 1 1 f . . . 
    . . f 1 1 1 1 f f 1 1 1 1 f . . 
    . . f 1 f f 1 1 1 1 f f 1 f . . 
    . f 1 f . . f 1 1 f . . f 1 f . 
    . f f . . . f 1 1 f . . . f f . 
    . . . . . . f 1 1 f . . . . . . 
    . . . . . . f f f f . . . . . . 
    `, SpriteKind.Menu_Selecter)
Menu_Buttons.setPosition(23, 93)
Menu_Buttons_2.setPosition(137, 93)
mySprite.setPosition(80, 70)
controller.moveSprite(mySprite, 100, 100)
mySprite.setStayInScreen(true)
