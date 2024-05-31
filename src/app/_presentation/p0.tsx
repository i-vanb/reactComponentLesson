import AceEditor from "react-ace";

import 'ace-builds/webpack-resolver';
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-tomorrow";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";

export const Presentation0 = () => {

  return (
    <div className="space-y-4">
      <h2>Page 1</h2>
      <p className="text-sm font-bold">
        Как выглядит компонент в React?
      </p>
      <p className="text-sm font-bold">
        Как он определяется?
      </p>
      <p className="text-sm font-bold">
        Как вызывается?
      </p>

      <div className="flex gap-4">
          <AceEditor
            // placeholder="Placeholder Text"
            mode="javascript"
            theme="monokai"
            name="jsEditor"
            width='100%'
            height='500px'
            style={{marginBottom: '44px', marginTop: '5px'}}
            wrapEnabled={true}
            // onLoad={this.onLoad}
            onChange={e=>console.log(e)}
            fontSize={12}
            showPrintMargin={false}
            showGutter={true}
            highlightActiveLine={true}
            value={fComponent}
            setOptions={{
              enableBasicAutocompletion: false,
              enableLiveAutocompletion: false,
              enableSnippets: false,
              showLineNumbers: true,
              tabSize: 2,
            }}/>
      </div>
    </div>
  );
}



const fComponent =
`function Button() {
  return <button>Click me</button>
}

...

<Button />
`