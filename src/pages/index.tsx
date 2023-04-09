import Head from 'next/head';
import styled, { createGlobalStyle } from 'styled-components';

export default function Home() {
  return (
    <>
      <Head>
        <title>Dom&apos;s Blog</title>
        <meta name="description" content="JS Articles" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container>
          <GlobalStyle />
          <h1>Hello, world!</h1>
        </Container>
      </main>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
   h1 {
     font-size: 4rem;
   }
  `;

const Container = styled.div`
  text-align: center;
`;
