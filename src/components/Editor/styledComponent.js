import styled from 'styled-components'

export const ButtonBold = styled.button`
  color: ${props => (props.boldTxt ? '#faff00' : '#f1f5f9')};
  font-weight: ${props => (props.boldTxt ? 'bold' : 'normal')};
  background-color: transparent;
  border: 0px solid transparent;
  margin: 10px;
`
export const hlo = styled.h1``

export const Buttonitalic = styled.button`
  color: ${props => (props.italicTxt ? '#faff00' : '#f1f5f9')};
  font-style: ${props => (props.italicTxt ? 'italic' : 'normal')};
  background-color: transparent;
  border: 0px solid transparent;
  margin: 10px;
`
export const Buttonunder = styled.button`
  color: ${props => (props.underTxt ? '#faff00' : '#f1f5f9')};
  text-decoration: ${props => (props.underTxt ? 'normal' : 'underline')};
  background-color: transparent;
  border: 0px solid transparent;
  margin: 10px;
`
export const TextArea = styled.textarea`
  background-color: #25262c;
  width: 400px;
  height: 400px;
  border: 0px solid transparent;
  color: #f1f5f9;
  font-weight: ${props => (props.boldTxt ? 'bold' : 'normal')};
  text-decoration: ${props => (props.underTxt ? 'underline' : 'normal')};
  font-style: ${props => (props.italicTxt ? 'italic' : 'normal')};
`
