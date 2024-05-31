import AceEditor from "react-ace";

import 'ace-builds/webpack-resolver';
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-tomorrow";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import {useState} from "react";
import {Light} from "@/app/_components/Light";


export const Presentation2 = () => {

  return (
    <div className="space-y-4">
      <h2>Page 3</h2>
      <Light colors={['red', 'yellow', 'green']}/>
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
          onChange={e => console.log(e)}
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
    const [colorRed, setColorRed] = useState('');
    const [colorYellow, setColorYellow] = useState('');
    const [colorGreen, setColorGreen] = useState('');
    
    const setColorRedHandler = () => {
      setColorRed(prev => {
        if(prev === 'red') return '';
        return 'red';
      });
    }
    const setColorYellowHandler = () => {
      setColorYellow(prev => {
        if(prev === 'yellow') return '';
        return 'yellow';
      });
    }
    const setColorGreenHandler = () => {
      setColorGreen(prev => {
        if(prev === 'green') return '';
        return 'green';
      });
    }
    
    return(
      <div>
        <h2>Lights</h2>
        <div>
          <div>
            <div style={{backgroundColor:colorRed}}></div>
            <button onClick={setColorRedHandler}/>
          </div>
          <div>
            <div style={{backgroundColor:colorYellow}}></div>
            <button onClick={setColorYellowHandler}/>
          </div>
          <div>
            <div style={{backgroundColor:colorGreen}}></div>
            <button onClick={setColorGreenHandler}/>
          </div>
        </div>
      </div>       
    )
}

...

<div>
  <Lights/>
</div>
`