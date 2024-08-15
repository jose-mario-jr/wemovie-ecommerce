import styled, { css } from 'styled-components'

const TextMid = styled.p<{ $align?: string }>`
  font-size: 16px;
  font-weight: 700;
  line-height: 21.79px;
  // text-align: left;
  color: #2f2e41;
  ${props =>
    props.$align
      ? css`
          text-align: ${props.$align};
        `
      : css`
          text-align: center;
        `}
`

export default TextMid
