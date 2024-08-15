import styled, { css } from 'styled-components'

const Button = styled.button<{ $success?: boolean }>`
  border: none;
  color: white;
  height: 40px;
  padding: 8px;
  border-radius: 4px;
  min-width: 157px;
  cursor: pointer;
  display: flex;
  gap: 12px;
  justify-content: center;
  align-items: center;

  background-color: #009edd;
  transition: all 0.3s ease-out;

  font-size: 12px;
  font-weight: 700;
  line-height: 16.34px;


  &:hover {
    background-color: #0073a1;
  }

  ${props =>
    props.$success &&
    css`
      background-color: #039b00;
    `}
`

export default Button
