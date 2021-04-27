/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import Square from '../Square'
import Rectangle from '../Rectangle'
const Slide = ({ content }) => (
  // <div
  //   css={css`
  //     height: 100%;
  //     width: 100%;
  //     background-image: url(${content});
  //     background-size: cover;
  //     background-repeat: no-repeat;
  //     background-position: center;
  //   `}
  // />
 

  <div>
    {content==='1'?<Square/>:<Rectangle/>}
    {/* if (${content}=='1')
    {
     <Square/> 
    }
    else if(${content}=='2')
    {
      <Rectangle/>
    } */}
  </div>
)

export default Slide