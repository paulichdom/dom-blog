import React from 'react';
import styled from 'styled-components';

export default function ContactForm() {
  return (
    <Wrapper>
      <Form>
        <Label>
          Email:
          <input type="email" placeholder="email@domain.com" />
        </Label>
        <Label htmlFor="">
          Password:
          <input type="password" />
        </Label>
        <button type="submit">Log In</button>
      </Form>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const Form = styled.form``;

const Label = styled.label`
  display: block; ;
`;
