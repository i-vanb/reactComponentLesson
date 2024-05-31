import AceEditor from "react-ace";

import 'ace-builds/webpack-resolver';
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-tomorrow";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import {useState} from "react";
import {Light} from "@/app/_components/Light";


export const Presentation3 = () => {

  return (
    <div className="space-y-4">
      <h2>Page 4</h2>
      <Light colors={['red', 'yellow', 'green']} />
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


const fComponent = `function Lights() {
    return(
      <div>
        <h2>Lights</h2>
        <div>
          <Light color="red"/>
          <Light color="yellow"/>
          <Light color="green"/>
        </div>
      </div>       
    )
}

function Light(props) {
    const [color, setColor] = useState('');
    
    const setColorHandler = () => {
      setColor(prev => {
        if(prev === props.color) return '';
        return props.color;
      });
    }
    
    return(
        <div>
            <div style={{backgroundColor:color}}></div>
            <button onClick={setColorHandler}/>
        </div>
    )
}

...

<div>
  <Lights/>
</div>
`