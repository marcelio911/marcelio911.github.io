import
 styled
from "styled-components";

export const SidebarContent = styled.div`
  position: sticky;
  display: flex;
  flex-direction: column;
  margin: 1vmin;
  padding: 5vmin 1vmin;

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
