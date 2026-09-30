const audioNamespace = 'PythonCodeAudio';

function getAudioApi() {
  if (!window[audioNamespace]) {
    throw new Error('Audio API is unavailable');
  }
  return window[audioNamespace];
}

var $builtinmodule = function() {
  var mod = {};

  function remapToPy(value) {
    if (Sk.ffi && typeof Sk.ffi.remapToPy === 'function') {
      return Sk.ffi.remapToPy(value);
    }

    if (Array.isArray(value)) {
      return new Sk.builtin.list(value.map(function(item) {
        return typeof item === 'number' ? new Sk.builtin.float_(item) : item;
      }));
    }

    return value;
  }

  mod.readAudio = new Sk.builtin.func(function(url) {
    var urlText = Sk.ffi && Sk.ffi.remapToJs ? Sk.ffi.remapToJs(url) : url.v;
    var promise = getAudioApi()
      .processAudioFile(urlText)
      .then(function(result) {
        return remapToPy(result);
      });

    return Sk.misceval.promiseToSuspension(promise);
  });

  mod.playAudio = new Sk.builtin.func(function(soundNumbers) {
    var listData = Sk.ffi && Sk.ffi.remapToJs ? Sk.ffi.remapToJs(soundNumbers) : soundNumbers.v;
    var promise = getAudioApi()
      .playDataStream(listData).then( () => { 
        return Sk.builtin.none.none$;
      });

    return Sk.misceval.promiseToSuspension(promise);
  });

  mod.process_audio_file = mod.processAudioFile;
  mod.play_data_stream = mod.playDataStream;

  return mod;
};