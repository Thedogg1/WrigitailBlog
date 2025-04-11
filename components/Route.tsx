import React from 'react';
import Link from 'next/link';

const Route = ({
  children,
  route,
}: {
  children: React.ReactNode;
  route: string;
}) => {
  return <Link href={route}>{children}</Link>;
};

export default Route;
