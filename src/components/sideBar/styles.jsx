import
 styled
from "styled-components";

export const Sidebar = styled.div`
  margin: 0;
  `;

export const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  padding: 20px;
  position: sticky;
  top: 20px;
`;

export const Name = styled.h3`
  margin: 0;
  `;

export const Location = styled.div`
  margin: 0;
  text-align: center;
`;
export const Description = styled.p`
  margin: 30px auto;
  color: gray;  
`;

export const SoftSkills = styled.p`
  margin: 30px auto;
  color: yellow;  
`;

export const HardSkills = styled.p`
  color: red;  
`;

export const Twitter = styled.span`
  color: green; 
`;

export const CopyRight = styled.p`
  position: fixed;
  bottom: 1vmin;
`;
