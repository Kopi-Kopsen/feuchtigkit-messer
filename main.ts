let Feuchtigkeit = 0
basic.forever(function () {
    Feuchtigkeit = pins.analogReadPin(AnalogPin.P1)
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        basic.showNumber(Feuchtigkeit)
    }
})
basic.forever(function () {
    if (Feuchtigkeit <= 8) {
        basic.setLedColor(0x0000ff)
    } else if (Feuchtigkeit >= 100) {
        basic.setLedColor(0xff0000)
    } else {
        basic.setLedColor(0x00ff00)
    }
})
