import {useState} from "react";

type LightProps = {
  colors: string[];
}
export const Light = ({colors}:LightProps) => {
  return (
    <div className="text-center space-y-4">
      <h2 className="font-bold text-sm">LightsApp</h2>
      <div className="flex gap-4 justify-center items-center">
        {colors.map((color) => <ColorLight key={color} color={color}/>)}
      </div>
    </div>
  );
}

const ColorLight = (props: {color: string}) => {
  const [color, setColor] = useState('');
  const style = {
    backgroundColor: color
  }

  const setColorHandler = () => {
    setColor(prev => {
      if(prev === props.color) return '';
      return props.color;
    });
  }

  return(
    <div className="text-center space-y-2">
      <div className="w-[50px] h-[50px] rounded-full border m-auto" style={style}></div>
      <Button color={props.color} onClick={setColorHandler}/>
    </div>
  )
}

type ButtonProps = {
  color: string;
  onClick: ()=>void;
}
const Button = ({color, onClick}:ButtonProps) => {
  return(
    <button className="rounded py-2 px-6 bg-gray-100 hover:bg-gray-200 transition-colors" onClick={onClick}>{color[0].toUpperCase() + color.slice(1)}</button>
  )
}