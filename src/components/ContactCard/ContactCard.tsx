import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

type ContactCardProps = {
  avatarSrc: string;
  avatarAlt: string;
  name: string;
  email: string;
};

export default function ContactCard({
  avatarSrc,
  avatarAlt,
  name,
  email,
}: ContactCardProps) {
  return (
    <Card>
      <Avatar src={avatarSrc} alt={avatarAlt} width={128} height={128} />
      <Name>{name}</Name>
      <Email>{email}</Email>
    </Card>
  );
}

const Card = styled.article`
  max-width: 250px;
  border-radius: 32px;
  padding: 24px;
  background: white;
  box-shadow: 0px 2 px 20 px hsl(248deg 53% 40%);
  text-align: center;
`;

const Avatar = styled(Image)`
  display: block;
  width: 128px;
  height: 128px;
  background: inherit;
  border-radius: 50%;
  margin-left: auto;
  margin-right: auto;
  margin-top: -64px;
  margin-bottom: 16px;
  border: 6px solid white;
`;

const Name = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0px;
  color: black;
`;

const Email = styled.p`
  font-size: 1rem;
  font-weight: 300;
  color: hsl(0deg 0% 40%);
`;
