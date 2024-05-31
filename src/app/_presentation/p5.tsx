import AceEditor from "react-ace";

import 'ace-builds/webpack-resolver';
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-tomorrow";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import {Dispatch, FormEvent, SetStateAction, useState} from "react";
import {Light} from "@/app/_components/Light";


export const Presentation5 = () => {
  const [colors, setColors] = useState<string[]>([]);

  return (
    <div className="space-y-4">
      <h2>Page 6</h2>
      <div className="text-red-800 font-bold">
        <div className="text-black">...</div>
        <span className="text-yellow-500">{`<Lights`}</span>
        <span className="">{` colors={[`}</span>
      </div>
      <LightsProps colors={colors} setColors={setColors}/>
      <div className="text-red-800 font-bold">
        <span className="">{`]}`}</span>
        <span className="text-yellow-500">{`/>`}</span>
        <div className="text-black">...</div>
      </div>
      <Light colors={colors} />
      <div className="flex gap-4">
          <AceEditor
            mode="javascript"
            theme="monokai"
            name="jsEditor"
            width='100%'
            height='600px'
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


const fComponent = `function Lights({colors}) {
    return(
      <div>
        <h2>Lights</h2>
        <div>
          {colors.map(color => <Light key={color} color={color}/>)}
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
    
    return (
        <div>
            <div style={{backgroundColor:color}}></div>
            <button onClick={setColorHandler}/>
        </div>
    )
}
...
<div>
  <Lights colors={['red', 'yellow', 'green', 'blue', 'orange']}/>
</div>
`


const LightsProps = ({colors, setColors}: {
  colors:string[],
  setColors:Dispatch<SetStateAction<string[]>>
}) => {

  const addColor = (color: string) => {
    if(!color) return;
    setColors(prev => [...prev, color]);
  }

  return (
    <>
      {colors.map((color, index) => {
        const setColor = (color: string) => {
          if(!color) {
            setColors(prev => prev.filter((_, i) => i !== index));
            return;
          }
          setColors(prev => prev.map((c, i) => i === index ? color : c));
        }
        return (
          <LightInput key={color} color={color} setColor={setColor}/>
        )
      })}
      <AddColor addColor={addColor} />
    </>
  )
}

const AddColor = ({addColor}: { addColor: (color: string) => void }) => {
  const [input, setInput] = useState('');

  const saveColor = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addColor(input);
    setInput('');
  }

  return (
    <form onSubmit={saveColor}>
      <div className="flex gap-4 items-center">
        <button type="submit"
                className="flex items-center justify-center font-bold text-2xl bg-green-300 text-white rounded-full w-[30px] h-[30px]">+
        </button>
        <input className="py-2 px-4" onChange={e => setInput(e.target.value)} type="text" placeholder="Add a color"
               value={input}/>
      </div>
    </form>
  )
}

const LightInput = ({color, setColor}: { color: string, setColor: (color: string) => void }) => {
  const [input, setInput] = useState(color);
  const [isEditing, setIsEditing] = useState(false);

  const saveColor = () => {
    setIsEditing(false);
    setColor(input);
  }

  if (!isEditing) return <div onClick={() => setIsEditing(true)} className="text-green-400">{'"'}{color}{'"'}</div>

  return (
    <div>
      <input className="px-4 py-2" onBlur={saveColor} onChange={e => setInput(e.target.value)} type="text" placeholder="Add a color" value={input}/>
    </div>
  )
}