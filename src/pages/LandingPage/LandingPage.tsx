import { Typography } from '../../components';

import { Icon, Logo, Wrapper, ContentWrapper } from './LandingPage.style';

const LandingPage = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <Icon src="/images/voltz-icon.svg" />
      </ContentWrapper>
      <ContentWrapper>
        <Logo src="/images/voltz-logo.svg" />
      </ContentWrapper>
      <ContentWrapper>
        <Typography variant="subtitle">Welcome to Voltz Boilerplate</Typography>
      </ContentWrapper>
      <ContentWrapper>
        <Typography variant="body">
          Run the following command to run the documentation
        </Typography>
        <Typography variant="body-bold" color="highlight">
          yarn storybook
        </Typography>
      </ContentWrapper>
    </Wrapper>
  );
};

export default LandingPage;
