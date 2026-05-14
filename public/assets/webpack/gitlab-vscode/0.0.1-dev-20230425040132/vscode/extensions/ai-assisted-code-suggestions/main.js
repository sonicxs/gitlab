var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateMethod = (obj, member, method) => {
  __accessCheck(obj, member, "access private method");
  return method;
};

// src/main.ts
var main_exports = {};
__export(main_exports, {
  activate: () => activate
});
module.exports = __toCommonJS(main_exports);

// src/completion/GitlabCodeCompletionProvider.ts
var vscode2 = __toESM(require("vscode"));

// src/constants.ts
var AI_ASSISTED_CODE_SUGGESTIONS_CONFIG_NAMESPACE = "gitlab.aiAssistedCodeSuggestions";
var AI_ASSISTED_CODE_SUGGESTIONS_API_URL = "https://codesuggestions.gitlab.com/v1/completions";

// src/utils/extensionConfiguration.ts
var vscode = __toESM(require("vscode"));
var AI_ASSISTED_CODE_SUGGESTIONS_MODE = "gitlab.aiAssistedCodeSuggestions.enabled";
var AI_ASSISTED_CODE_SUGGESTIONS_CONFIG = "gitlab.aiAssistedCodeSuggestions";
function getAiAssistedCodeSuggestionsConfiguration() {
  const config = vscode.workspace.getConfiguration(AI_ASSISTED_CODE_SUGGESTIONS_CONFIG_NAMESPACE);
  return {
    enabled: config.enabled
  };
}

// src/utils/getStopSequences.ts
function getStopSequences(position, doc) {
  const stopSequences = [];
  if (doc.lineCount === position + 1) {
    return stopSequences;
  }
  const nextLine = doc.lineAt(position + 1).text;
  if (nextLine) {
    stopSequences.push(nextLine.toString());
  }
  return stopSequences;
}

// src/completion/GitlabCodeCompletionProvider.ts
var _getServer, getServer_fn;
var _GitLabCodeCompletionProvider = class {
  constructor(noDebounce = false) {
    this.debounceTimeMs = 500;
    var _a;
    this.model = "gitlab";
    this.server = __privateMethod(_a = _GitLabCodeCompletionProvider, _getServer, getServer_fn).call(_a);
    this.debouncedCall = void 0;
    this.noDebounce = noDebounce;
  }
  static registerGitLabCodeCompletion(context) {
    let subscription;
    const dispose = () => subscription == null ? void 0 : subscription.dispose();
    context.subscriptions.push({ dispose });
    const register = () => {
      subscription = vscode2.languages.registerInlineCompletionItemProvider({ pattern: "**" }, new _GitLabCodeCompletionProvider());
    };
    if (getAiAssistedCodeSuggestionsConfiguration().enabled) {
      register();
    }
    vscode2.workspace.onDidChangeConfiguration((e) => {
      if (e.affectsConfiguration(AI_ASSISTED_CODE_SUGGESTIONS_MODE)) {
        if (!getAiAssistedCodeSuggestionsConfiguration().enabled) {
          dispose();
        } else {
          register();
        }
      } else if (e.affectsConfiguration(AI_ASSISTED_CODE_SUGGESTIONS_CONFIG)) {
        dispose();
        register();
      }
    });
  }
  async fetchCompletions(params = {}) {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    };
    const response = await fetch(this.server, requestOptions);
    if (!response.ok) {
      return [];
    }
    const data = await response.json();
    return data;
  }
  async getCompletions(document, position) {
    var _a;
    const prompt = document.getText(new vscode2.Range(0, 0, position.line, position.character));
    if (!prompt) {
      return [];
    }
    const data = await this.fetchCompletions({
      model: this.model,
      prompt,
      stop: getStopSequences(position.line, document)
    });
    return ((_a = data.choices) == null ? void 0 : _a.map((choice) => new vscode2.InlineCompletionItem(choice.text, new vscode2.Range(position, position)))) || [];
  }
  async provideInlineCompletionItems(document, position, context) {
    clearTimeout(this.debouncedCall);
    return new Promise((resolve) => {
      if (context.triggerKind === vscode2.InlineCompletionTriggerKind.Automatic) {
        if (this.noDebounce) {
          resolve(this.getCompletions(document, position));
        } else {
          this.debouncedCall = setTimeout(() => {
            resolve(this.getCompletions(document, position));
          }, this.debounceTimeMs);
        }
      }
    });
  }
};
var GitLabCodeCompletionProvider = _GitLabCodeCompletionProvider;
_getServer = new WeakSet();
getServer_fn = function() {
  const serverUrl = new URL(AI_ASSISTED_CODE_SUGGESTIONS_API_URL);
  return serverUrl.href.toString();
};
__privateAdd(GitLabCodeCompletionProvider, _getServer);

// src/main.ts
async function activate(context) {
  GitLabCodeCompletionProvider.registerGitLabCodeCompletion(context);
}
