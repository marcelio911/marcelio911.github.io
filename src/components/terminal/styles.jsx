import
 styled
from "styled-components";
import drumSet from '../../assets/images/drum_set_vector_transparent.png';


export const Terminal = styled.div`
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
`;
export const TerminalBg = styled.div`
  background: url(${drumSet}) center center ;
  position: absolute;
  z-index: 0;
  left: 0;
  right: 0;  
  opacity: .05;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
`;

export const TerminalBar = styled.div`
  margin: 0;
  z-index: 1;
`;
export const TerminalBarTitle = styled.strong`
  margin: 0;
`;
export const TerminalContent = styled.div`
  margin: 0;
`;
export const PointOfCode = styled.p`
  margin: 0;
`;
export const LineCode = styled.div`
  margin-left: 10vmin;
`;
export const Cursor = styled.span`
  margin-left: 2px;
`;