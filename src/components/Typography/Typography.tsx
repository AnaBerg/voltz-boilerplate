import { FC } from 'react';
import styled from 'styled-components';

import { TypographProps } from './Typography.type';
import {
  getFamilyFont,
  getFontSize,
  getFontWeight,
  getColor,
} from './helpers/getStyles';

const Typography: FC<TypographProps> = ({
  variant = 'body',
  children,
  color = 'secondary',
}) => {
  const StyledTypography = styled.p`
    font-size: ${getFontSize(variant)};
    font-family: ${getFamilyFont(variant)};
    font-weight: ${getFontWeight(variant)};
    font-style: normal;
    color: ${getColor(color)};
  `;

  return <StyledTypography>{children}</StyledTypography>;
};

export default Typography;
