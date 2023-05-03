import React from 'react'
import styled from 'styled-components';

const MdxImage = (props: any) => {
  console.log({props})
  return (
    <Image src={props.src} alt={props.alt} />
  )
}

const Image = styled.img`
  border-radius: 4px;
  margin-top: 32px;
  margin-bottom: 32px;
`;

export default MdxImage