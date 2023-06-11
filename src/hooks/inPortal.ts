import React, { ReactNode, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

type InPortalProps = {
  id?: string;
  children: ReactNode;
};
/**
 * Portal API lets a component render in a different part of the DOM tree.
 *
 * Consideration: would it be better for the component to create the
 * portal's target node and append it to the body? Sometimes the order
 * of these nodes matter. If you have a portal for a tooltip, and a
 * portal for a modal, you probably want the tooltip to be above the
 * modal, since a modal could have a tooltip within it.
 *
 * @param id portal node id
 * @param children to render inside portar
 * @returns component to render insid
 */
export const InPortal = ({ id, children }: InPortalProps) => {
  /**
   * TODO: Make selecting or creating a node optional. If 'id' is
   * provided select the node (in the modified html) if not create
   * a node and append it to the body
   */
  const ref = useRef<Element | null>(null);
  const [hasMounted, setHasMounted] = React.useState(false);

  useEffect(() => {
    if (id) {
      ref.current = document.querySelector<HTMLElement>(`#${id}`);
    } else {
      const elementId = 'portal-container-created';
      ref.current = document.createElement('div');
      ref.current.setAttribute('id', elementId)
      document.body.appendChild(ref.current);
    }
    setHasMounted(true);
  }, [id]);

  return hasMounted && ref.current
    ? ReactDOM.createPortal(children, ref.current)
    : null;
};
