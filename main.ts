let Feuchtigkeit = 0
basic.forever(function () {
    Feuchtigkeit = Math.map(pins.analogReadPin(AnalogPin.P1), 0, 1023, 0, 100)
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        basic.showNumber(Feuchtigkeit)
    }
})
basic.forever(function () {
    if (Feuchtigkeit >= 10) {
        basic.setLedColor(0xff0000)
    } else {
        basic.setLedColor(0x00ff00)
    }
})
