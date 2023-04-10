import React from 'react';

type PostHeaderProps = {
  title: string;
};

export default function PostHeader({ title }: PostHeaderProps) {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
}
