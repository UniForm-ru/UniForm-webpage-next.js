import { ReactNode } from 'react';
import style from './GlassContainer.module.css';

interface GlassContainerProps {
  children: ReactNode;
  flex?: boolean;
  center?:boolean;
  column?: boolean;
  gap?: number;
}

const GlassContainer: React.FC<GlassContainerProps> = ({ children, flex, gap, column, center}) => {

  const flexDirection:string = column? 'column': 'row';
  const contentAlign:string = center? 'center' : 'start';
  const contentJustify:string = center? 'center' : 'start';

  return (
    <div 
      className={style.container} 
      style={
        flex && {
          display:"flex", 
          flexDirection:`${flexDirection}`, 
          justifyContent:`${contentJustify}`, 
          alignItems:`${contentAlign}`, 
          gap:`${gap}px`
        }
      }
    >
      {children}
    </div>
  )
}

export default GlassContainer;