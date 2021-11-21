import styled from 'styled-components'

const Circle = styled.div`
  cursor: pointer;
  width: 30px;
  height: 30px;
  border-radius: 30px;
  margin: 5px;
  background-color: ${(props) => props.color};
`

export default Circle
