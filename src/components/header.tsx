import React, { FC } from 'react';

type Props = {
  siteTitle?: string;
};

const Header: FC<Props> = ({ siteTitle = '' }) => <header></header>;

export default Header;
