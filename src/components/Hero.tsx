import styled from 'styled-components'

const Hero = styled.section`
  background: ${({ theme }) => theme.colors.hero};
  color: #fff;
`

// Verify gradient meets WCAG AA contrast.
export default Hero
