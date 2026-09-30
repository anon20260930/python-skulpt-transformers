const LLM_API_NAMESPACE = 'PythonCodeLLM';

function getChatApi() {    
  if (!window[LLM_API_NAMESPACE]) {
    throw new Error('Chat API is unavailable');
  }
  return window[LLM_API_NAMESPACE];
}

var $builtinmodule = function() {
  var mod = {};

  // Helper to extract either a raw string or a native JS array of objects
  function parsePromptArg(prompt) {
    if (Sk.ffi && Sk.ffi.remapToJs) {
      return Sk.ffi.remapToJs(prompt); 
    }

    // Fallback if Sk.ffi is unavailable
    if (prompt instanceof Sk.builtin.list) {
      return prompt.v.map(function(item) {
        if (item instanceof Sk.builtin.dict) {
          return Sk.ffi.remapToJs(item);
        }
        return item.v;
      });
    }
    
    return prompt.v;
  }

  mod.chat = new Sk.builtin.func(function(prompt) {
    var promptPayload = parsePromptArg(prompt);

    var llmPromise = getChatApi()
      .generate(promptPayload)      
      .then(function(result) {
        return new Sk.builtin.str(result);
      });

    return Sk.misceval.promiseToSuspension(llmPromise);
  });

  mod.reply = new Sk.builtin.func(function(prompt) {
    var promptPayload = parsePromptArg(prompt);

    var llmPromise = getChatApi().generate(promptPayload, { enabled_thinking: false })      
      .then(function(result) {
        return new Sk.builtin.str(result);
      });

    return Sk.misceval.promiseToSuspension(llmPromise);
  });  

  return mod;
};