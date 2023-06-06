import React, { ReactNode, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

type InPortalProps = {
  id: string;
  children: ReactNode;
};

export const InPortal = ({ id, children }: InPortalProps) => {
  const ref = useRef<Element | null>(null)
  const [hasMounted, setHasMounted] = React.useState(false);

  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>(`#${id}`)
    setHasMounted(true);
  }, [id]);

  return (hasMounted && ref.current) ? ReactDOM.createPortal(children, ref.current) : null
};

const Wrapper = styled.div`
  position: relative;
`;
