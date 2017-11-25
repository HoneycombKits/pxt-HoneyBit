
enum Instrument {
    default = 0
}

/**
 * Functions to play the midi of HoneyComb Music Kit.
 */
//% weight=2 color=#35A5CE icon="\uf2b0"
namespace honeybit {
    /**
     * MIDI note-on message.
     * @param note note of MIDI message
     */
    //% weight=97 blockGap=8
    //% blockId=honeybit_note_on block="note|on %note=device_note"
    export function noteOn(note: number): void {
        switch (note) {
            case Note.C3:
                serial.writeString("\u0030")
                serial.writeString("\u00ff");
                break;
            case Note.CSharp3:
                serial.writeString("\u0031")
                serial.writeString("\u00ff");
                break;
            case Note.D3:
                serial.writeString("\u0032")
                serial.writeString("\u00ff");
                break;
            case Note.Eb3:
                serial.writeString("\u0033")
                serial.writeString("\u00ff");
                break;
            case Note.E3:
                serial.writeString("\u0034")
                serial.writeString("\u00ff");
                break;
            case Note.F3:
                serial.writeString("\u0035")
                serial.writeString("\u00ff");
                break;
            case Note.FSharp3:
                serial.writeString("\u0036")
                serial.writeString("\u00ff");
                break;
            case Note.G3:
                serial.writeString("\u0037")
                serial.writeString("\u00ff");
                break;
            case Note.GSharp3:
                serial.writeString("\u0038")
                serial.writeString("\u00ff");
                break;
            case Note.A3:
                serial.writeString("\u0039")
                serial.writeString("\u00ff");
                break;
            case Note.Bb3:
                serial.writeString("\u003a")
                serial.writeString("\u00ff");
                break;
            case Note.B3:
                serial.writeString("\u003b")
                serial.writeString("\u00ff");
                break;
            case Note.C4:
                serial.writeString("\u003c")
                serial.writeString("\u00ff");
                break;
            case Note.CSharp4:
                serial.writeString("\u003d")
                serial.writeString("\u00ff");
                break;
            case Note.D4:
                serial.writeString("\u003e")
                serial.writeString("\u00ff");
                break;
            case Note.Eb4:
                serial.writeString("\u003f")
                serial.writeString("\u00ff");
                break;
            case Note.E4:
                serial.writeString("\u0040")
                serial.writeString("\u00ff");
                break;
            case Note.F4:
                serial.writeString("\u0041")
                serial.writeString("\u00ff");
                break;
            case Note.FSharp4:
                serial.writeString("\u0042")
                serial.writeString("\u00ff");
                break;
            case Note.G4:
                serial.writeString("\u0043")
                serial.writeString("\u00ff");
                break;
            case Note.GSharp4:
                serial.writeString("\u0044")
                serial.writeString("\u00ff");
                break;
            case Note.A4:
                serial.writeString("\u0045")
                serial.writeString("\u00ff");
                break;
            case Note.Bb4:
                serial.writeString("\u0046")
                serial.writeString("\u00ff");
                break;
            case Note.B4:
                serial.writeString("\u0047")
                serial.writeString("\u00ff");
                break;
            case Note.C5:
                serial.writeString("\u0048")
                serial.writeString("\u00ff");
                break;
            case 554:
                serial.writeString("\u0049")
                serial.writeString("\u00ff");
                break;
            case Note.D5:
                serial.writeString("\u004a")
                serial.writeString("\u00ff");
                break;
            case Note.Eb5:
                serial.writeString("\u004b")
                serial.writeString("\u00ff");
                break;
            case Note.E5:
                serial.writeString("\u004c")
                serial.writeString("\u00ff");
                break;
            case Note.F5:
                serial.writeString("\u004d")
                serial.writeString("\u00ff");
                break;
            case Note.FSharp5:
                serial.writeString("\u004e")
                serial.writeString("\u00ff");
                break;
            case Note.G5:
                serial.writeString("\u004f")
                serial.writeString("\u00ff");
                break;
            case Note.GSharp5:
                serial.writeString("\u0050")
                serial.writeString("\u00ff");
                break;
            case Note.A5:
                serial.writeString("\u0051")
                serial.writeString("\u00ff");
                break;
            case Note.Bb5:
                serial.writeString("\u0052")
                serial.writeString("\u00ff");
                break;
            case Note.B5:
                serial.writeString("\u0053")
                serial.writeString("\u00ff");
                break;
        }
    }

    /**
     * MIDI note-off message.
     * @param note note of MIDI message
     */
    //% weight=96 blockGap=8
    //% blockId=honeybit_note_off block="note|off %note=device_note"
    export function noteOff(note: number): void
    {
        switch (note) {
            case Note.C3:
                serial.writeString("\u0030")
                serial.writeString("\u0000");
                break;
            case Note.CSharp3:
                serial.writeString("\u0031")
                serial.writeString("\u0000");
                break;
            case Note.D3:
                serial.writeString("\u0032")
                serial.writeString("\u0000");
                break;
            case Note.Eb3:
                serial.writeString("\u0033")
                serial.writeString("\u0000");
                break;
            case Note.E3:
                serial.writeString("\u0034")
                serial.writeString("\u0000");
                break;
            case Note.F3:
                serial.writeString("\u0035")
                serial.writeString("\u0000");
                break;
            case Note.FSharp3:
                serial.writeString("\u0036")
                serial.writeString("\u0000");
                break;
            case Note.G3:
                serial.writeString("\u0037")
                serial.writeString("\u0000");
                break;
            case Note.GSharp3:
                serial.writeString("\u0038")
                serial.writeString("\u0000");
                break;
            case Note.A3:
                serial.writeString("\u0039")
                serial.writeString("\u0000");
                break;
            case Note.Bb3:
                serial.writeString("\u003a")
                serial.writeString("\u0000");
                break;
            case Note.B3:
                serial.writeString("\u003b")
                serial.writeString("\u0000");
                break;
            case Note.C4:
                serial.writeString("\u003c")
                serial.writeString("\u0000");
                break;
            case Note.CSharp4:
                serial.writeString("\u003d")
                serial.writeString("\u0000");
                break;
            case Note.D4:
                serial.writeString("\u003e")
                serial.writeString("\u0000");
                break;
            case Note.Eb4:
                serial.writeString("\u003f")
                serial.writeString("\u0000");
                break;
            case Note.E4:
                serial.writeString("\u0040")
                serial.writeString("\u0000");
                break;
            case Note.F4:
                serial.writeString("\u0041")
                serial.writeString("\u0000");
                break;
            case Note.FSharp4:
                serial.writeString("\u0042")
                serial.writeString("\u0000");
                break;
            case Note.G4:
                serial.writeString("\u0043")
                serial.writeString("\u0000");
                break;
            case Note.GSharp4:
                serial.writeString("\u0044")
                serial.writeString("\u0000");
                break;
            case Note.A4:
                serial.writeString("\u0045")
                serial.writeString("\u0000");
                break;
            case Note.Bb4:
                serial.writeString("\u0046")
                serial.writeString("\u0000");
                break;
            case Note.B4:
                serial.writeString("\u0047")
                serial.writeString("\u0000");
                break;
            case Note.C5:
                serial.writeString("\u0048")
                serial.writeString("\u0000");
                break;
            case 554:
                serial.writeString("\u0049")
                serial.writeString("\u0000");
                break;
            case Note.D5:
                serial.writeString("\u004a")
                serial.writeString("\u0000");
                break;
            case Note.Eb5:
                serial.writeString("\u004b")
                serial.writeString("\u0000");
                break;
            case Note.E5:
                serial.writeString("\u004c")
                serial.writeString("\u0000");
                break;
            case Note.F5:
                serial.writeString("\u004d")
                serial.writeString("\u0000");
                break;
            case Note.FSharp5:
                serial.writeString("\u004e")
                serial.writeString("\u0000");
                break;
            case Note.G5:
                serial.writeString("\u004f")
                serial.writeString("\u0000");
                break;
            case Note.GSharp5:
                serial.writeString("\u0050")
                serial.writeString("\u0000");
                break;
            case Note.A5:
                serial.writeString("\u0051")
                serial.writeString("\u0000");
                break;
            case Note.Bb5:
                serial.writeString("\u0052")
                serial.writeString("\u0000");
                break;
            case Note.B5:
                serial.writeString("\u0053")
                serial.writeString("\u0000");
                break;
        }
    }

    /**
     * Plays a note for the given duration.
     * @param note note of MIDI message
     * @param ms tone duration in milliseconds (ms)
     */
    //% weight=99 blockGap=8
    //% blockId=honeybit_play_note block="play|note %note=device_note|for %duration=device_beat"
    export function playNote(note: number, ms: number): void {
        noteOn(note)
        basic.pause(ms)
        noteOff(note)
    }

    /**
     * Setting up the instrument.
     * @param instrument select a instrument from the instarument enum
     */
    //% weight=100 blockGap=8
    //% blockId=honeybit_setup_instrument block="setup|instrument %instrument"
    export function setupInstrument(instrument: Instrument): void {
        serial.redirect(
            SerialPin.P15,
            SerialPin.P8,
            BaudRate.BaudRate9600
        )
    }

    /**
     * Rests (plays nothing) for a specified time.
     * @param ms rest duration in milliseconds (ms)
     */
    //% weight=98 blockGap=8
    //% blockId=honeybit_rest block="rest(ms)|%duration=device_beat"
    export function rest(ms: number): void {
        playNote(0, ms);
    }
}