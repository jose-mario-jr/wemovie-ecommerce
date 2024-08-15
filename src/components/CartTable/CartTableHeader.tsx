import styled from 'styled-components'

const CartTableHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 16px;
  margin-bottom: 16px;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`

export default CartTableHeader
