# Traktor-Max-External
Download instructions:

1. Download Max and the zip file
2. Open the Traktor Max External
3. Open the app in presentation view by clicking the screen icon in the bottom left
4. Press play on the different audio playback devices, turn up the sound output by pulling up the level arrows and click bubbles in the matrix to route audio
5. Have a blast

### Basic Useful Feature List:

 * 4 distinct audio effects for live processing
 * Dropdown menu integration for each audio effect
 * Four channels of stereo audio integration
 * Testing version excludes the Traktor integration, although you can still load any audio files to mix and alter

### Troubleshooting

  * If nothing is working, press Command-M to access the Max window that shows errors
  * If there are errors with the JS files, go into the zip file that was downloaded and access the JS code and copy it
  * In the Max application, Command-click the corrosponding JS file and paste the code inside if it is barren
  
  * Make sure that each of the playback systems are populated with a sample, without this, there will be no audio to process


### Resources Used to Make This:

 * [Monome Sum](https://monome.org/docs/app/sum/) for Monome hardware implimentation
 
 #### Future Design Work
 
 * Integrate Traktor's MIDI clocking to sync delay devices
 * Map the Monome controller to control the effects routing matrix
 * Make audio output menu routing to choose output destination
 * Route Traktor's audio inputs into Max easily and reliably
 * Add more CPU efficient decices into the application
 * Add momentary hold / hold functionality to the Monome mapping
