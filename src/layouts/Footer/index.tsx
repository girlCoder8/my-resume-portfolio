import {
  ActionIcon,
  Container,
  createStyles,
  Group,
  Text,
  Tooltip,
  UnstyledButton,
} from '@mantine/core'
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBrandWhatsapp,
} from '@tabler/icons'
import Link from 'next/link'
import React from 'react'

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 120,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      marginTop: theme.spacing.md,
    },
  },

  floatButton: {
    position: 'fixed',
    width: '60px',
    height: '60px',
    bottom: '30px',
    right: '30px',
    backgroundColor: '#4dc247',
    color: '#FFF',
    borderRadius: '50px',
    textAlign: 'center',
    zIndex: 9999,
  },
}))

function Footer() {
  const { classes } = useStyles()

  return (
    <div className={classes.footer}>
      <Container className={classes.inner} size={1280}>
        <Link href="https://github.com/girlCoder8" passHref>
          <UnstyledButton component="a" target="_blank">
            <Group noWrap spacing="xs">
              <IconBrandGithub size={28} />
              <Text style={{ fontWeight: 600 }}>@girlCoder8</Text>
            </Group>
          </UnstyledButton>
        </Link>

        <Group spacing={0} className={classes.links} position="right" noWrap>
          <Link href="https://www.linkedin.com/in/barb-gordon-aka-batgirl/" passHref>
            <ActionIcon size="lg" component="a" target="_blank">
              <IconBrandLinkedin size={18} stroke={1.5} />
            </ActionIcon>
          </Link>

          <Link href="https://twitter.com/" passHref>
            <ActionIcon size="lg" component="a" target="_blank">
              <IconBrandTwitter size={18} stroke={1.5} />
            </ActionIcon>
          </Link>

          <Link href="https://www.instagram.com/" passHref>
            <ActionIcon size="lg" component="a" target="_blank">
              <IconBrandInstagram size={18} stroke={1.5} />
            </ActionIcon>
          </Link>
        </Group>
      </Container>

      <Link
        href="https://api.whatsapp.com/send/?phone=+555555555text=Hello, I am interested in your portfolio, so when are you available to speak with me?"
        passHref
      >
        <Tooltip label="Super SMART professional with an ECLECTIC background and skillset..." position="left" withArrow>
          <UnstyledButton className={classes.floatButton}>
            <IconBrandWhatsapp size={40} />
          </UnstyledButton>
        </Tooltip>
      </Link>
    </div>
  )
}

export default Footer
