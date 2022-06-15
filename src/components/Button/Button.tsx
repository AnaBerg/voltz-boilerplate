import { FC } from 'react';
import styled from 'styled-components';
import Typography from '../Typography';

import { ButtonProps } from './Button.type';
import { getBorder, getBackgroundColor } from './helpers/getStyles';

const Button: FC<ButtonProps> = ({
  children,
  transparent = false,
  disabled = false,
  fullWidth = false,
  onClick,
  endIcon,
  startIcon,
  variant = 'highlight',
}) => {
  const StyledButton = styled.button`
    padding: 1rem;
    background-color: ${getBackgroundColor(variant, transparent, disabled)};
    border: ${getBorder(variant, transparent, disabled)};
    border-radius: 4px;
    width: ${fullWidth ? '100%' : ''};
  `;
  const IconStart = styled.img`
    padding-right: 5px;
  `;
  const IconEnd = styled.img`
    padding-left: 5px;
  `;

  return (
    <StyledButton disabled={disabled} onClick={(event) => onClick(event)}>
      {startIcon && <IconStart src={startIcon} />}
      <Typography color={variant === 'secondary' ? 'primary' : 'secondary'}>
        {children}
      </Typography>
      {endIcon && <IconEnd src={endIcon} />}
    </StyledButton>
  );
};

export default Button;
