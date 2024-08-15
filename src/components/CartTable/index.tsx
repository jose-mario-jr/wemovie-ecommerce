import styled from 'styled-components'

const CartTable = styled.div`
  margin: 16px;
  padding: 24px;
  background-color: white;
  border-radius: 4px;

  overflow-y: scroll;
  height: calc(100% - 128px);

  @media (max-width: 768px) {
    display: none;
  }
`

export default CartTable
