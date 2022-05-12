let arbeid = 0
basic.forever(function () {
    while (arbeid < 1023) {
        pins.analogWritePin(AnalogPin.P0, arbeid)
        arbeid = arbeid + 1
        basic.pause(10)
    }
    while (arbeid > 0) {
        pins.analogWritePin(AnalogPin.P0, arbeid)
        arbeid = arbeid - 1
        basic.pause(10)
    }
})
