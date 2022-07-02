import styled,{css} from "styled-components";

const Button = styled.button`
  border: 1px solid rgb(217,217,217);
  border-radius:3px;
  padding: 8px 10px;
  color: #454545;
  font-weight: 500;
  background-color: white;
  letter-spacing: 0.6px;
  cursor: pointer;
  &:hover{
    background-color: rgb(36,144,254);
    color: white;
    transition: color 1s 0s, background-color 1s 0s;

  }

 
  ${props=>props.primary && css`
    background-color: rgb(36,144,254);
    color: white;

    &:hover{
        background-color: white;
        color: #454545;


    }
  `}

  ${props=>props.dashed && css`
    border: 1px dashed rgb(217,217,217);
  `}

  ${props=>props.text && css`
    border: none;
    &:hover{
        border:none;
        background-color: white;
        color:black;
    }

  `}
  ${props=>props.link && css`
    border:none;
    color: rgb(36,144,254); 
    &:hover{
        color: #c8005d;
        background-color: white;
        border: none;
    }

  `}
`;

export { Button };
