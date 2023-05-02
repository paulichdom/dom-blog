import React from 'react';
import { Highlight, themes } from 'prism-react-renderer';
import styled from 'styled-components';
import { ColorPalette } from '@/styles/constants';

const SyntaxHighlighter = ({ children }: any) => {
  const code = children.props.children;
  const language = children.props.className?.replace('language-', '').trim();

  return (
    <Highlight code={code} theme={themes.nightOwl} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }: any) => (
        <CodeBlockContainer>
          {language && (
            <LanguageHeadingContainer>
              {language.toUpperCase()}
            </LanguageHeadingContainer>
          )}
          <PreBlock className={className} style={{ ...style }}>
            {tokens.slice(0, -1).map((line: any, i: any) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token: any, key: any) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </PreBlock>
        </CodeBlockContainer>
      )}
    </Highlight>
  );
};

const CodeBlockContainer = styled.div`
  position: relative;
  margin-top: 48px;
  margin-bottom: 60px;
  transition: all 200ms ease-in 0s;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
`;

const PreBlock = styled.pre`
  font-size: 1rem;
  outline-offset: 2px;
  overflow-x: auto;
  margin-left: -32px;
  margin-right: -32px;
  padding: 16px;
  min-height: 50px;
  border: 1px solid ${ColorPalette.grayMain100};
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
`;

const LanguageHeadingContainer = styled.header`
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  border-width: 1px 1px 0px;
  border-style: solid;
  border-color: ${ColorPalette.grayMain100};
  background-color: ${ColorPalette.grayMain100};
  padding: 0.25rem 1.25rem;
  margin-left: -32px;
  margin-right: -32px;
  font-size: 0.875rem;
  line-height: 1.5rem;
  color: ${ColorPalette.grayMain200};
  text-align: right;
  height: 32px;
`;

export default SyntaxHighlighter;
