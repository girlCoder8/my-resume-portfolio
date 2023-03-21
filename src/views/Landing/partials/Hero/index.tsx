import ColorSchemeToggle from '@core/components/ColorSchemeToggle/ColorSchemeToggle'
import Dots from '@core/components/Dots'
import MyFrameMotion from '@core/components/MyFrameMotion'
import { Avatar, Center, Container, Text, Title } from '@mantine/core'
import heroStyles from './styles'

function HeroSection() {
  const { classes } = heroStyles()

  return (
    <Container className={classes.wrapper} size={1440}>
      <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

      <div className={classes.inner}>
        <MyFrameMotion>
          <Center my="md">
            <Avatar size="xl" radius="xl" src="/static/avatar.png" />
          </Center>
          <Title className={classes.title}>
            {`Hello, I'm `}
            <Text component="span" className={classes.highlight} inherit>
              Barb Gordon
            </Text>
          </Title>

          <Container p={0} size={600}>
            <Text size="lg" color="dimmed" className={classes.description}>
              Automation Architect & Full Stack Web Developer!
            </Text>
            <Text
              mt={10}
              size="lg"
              color="dimmed"
              className={classes.description}
            >
              Currently I work as a <b>Lead QA Automation Engineer</b> for <b>Apex Systems at the Client: Centura Health</b>, I
              enjoy learning new things, i.e., AI/ML and ChatGPT. Additionally, I enjoy working in the Automation field, developing
              very creative web applications, working on automation and other new development technologies.

            </Text>
          </Container>
        </MyFrameMotion>

        <Center>
          <ColorSchemeToggle />
        </Center>
      </div>
    </Container>
  )
}

export default HeroSection
