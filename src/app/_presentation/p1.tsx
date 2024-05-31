import AceEditor from "react-ace";

import 'ace-builds/webpack-resolver';
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-tomorrow";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import {Light} from "@/app/_components/Light";



export const Presentation1 = () => {

  return (
    <div className="space-y-4">
      <h2>Page 2</h2>
      <Light colors={['red', 'yellow', 'green']} />
      <div className="flex gap-4">
          <AceEditor
            // placeholder="Placeholder Text"
            mode="html"
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
`<div>
    <h1>Lights</h1>
    <div class="flex">
        <div class="text-center">
            <div class="color__pick"></div>
            <button>Red</button>
        </div>
        <div class="text-center">
            <div class="color__pick"></div>
            <button>Yellow</button>
        </div>
        <div class="text-center">
            <div class="color__pick"></div>
            <button>Green</button>
        </div>
    </div>
</div>
<script>
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const color = button.previousElementSibling;
            const isColor = !!color.style.backgroundColor;
            color.style.backgroundColor = isColor
                ? color.style.backgroundColor = ''
                : button.textContent.toLowerCase();
        });
    });
</script>
`