import styled from 'styled-components';
import { up } from 'styled-breakpoints';

export const Container = styled.div`
  margin: auto;
  padding: 0 20px;
  ${up('mobileSizeM')} {
    max-width: 640px;
    padding: 0 20px;
  }
  ${up('tablet')} {
    max-width: 768px;
    padding: 0 32px;
  }
  ${up('tabletM')} {
    max-width: 820px;
    padding: 0 32px;
  }

  ${up('pcSizeS')} {
    max-width: 960px;
    padding: 0 32px;
  }

  ${up('pcSizeM')} {
    max-width: 1199px;
    padding: 0 32px;
  }
  ${up('pcSizeL')} {
    max-width: 1280px;
    padding: 0 16px;
  }
`;
