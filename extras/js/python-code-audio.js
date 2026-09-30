// 1. Set up the Web Audio Context
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
const AUDIO_API_NAMESPACE = 'PythonCodeAudio';

async function processAudioFile(url) {
    const response = await fetch(url);
    const audioBlob = await response.blob();
    const arrayBuffer = await audioBlob.arrayBuffer();
    const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer);
    
    // 1. Check how many channels the audio file actually has
    const numChannels = audioBuffer.numberOfChannels;
    
    // 2. Get the left channel data (always exists)
    const leftChannel = audioBuffer.getChannelData(0);
    
    // 3. If it's a stereo file (2 channels), mix them together!
    if (numChannels === 2) {
        const rightChannel = audioBuffer.getChannelData(1);
        const monoList = [];
        
        // Loop through every number and average the Left and Right values
        for (let i = 0; i < leftChannel.length; i++) {
            const averageSample = (leftChannel[i] + rightChannel[i]) / 2;
            monoList.push(averageSample);
        }
        
        return monoList;
    } else {
        // 4. If the file was already mono, just return the left channel
        return Array.from(leftChannel);
    }
}

async function playDataStream(soundNumbers) {

    if (audioCtx.state === 'suspended') {
        // Browsers often require a user gesture before audio playback starts.
        audioCtx.resume();
    }

    // Create a blank data bucket (1 channel, sample length, 44100 speed)
    const myBuffer = audioCtx.createBuffer(1, soundNumbers.length, 44100);

    // Copy the list of floats directly into the audio memory
    myBuffer.copyToChannel(new Float32Array(soundNumbers), 0);

    // Connect the data to the speakers and play it
    const soundPlayer = audioCtx.createBufferSource();
    soundPlayer.buffer = myBuffer;
    soundPlayer.connect(audioCtx.destination);
    soundPlayer.start();
}

window[AUDIO_API_NAMESPACE] = {
    processAudioFile,
    playDataStream
};
