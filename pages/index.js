import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  HStack,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import Image from 'next/image'

const Home = () => (
  <Layout>
    <Container
      mt={16}
      bg={useColorModeValue('rgba(255, 255, 255, 0.8)', 'rgba(0, 0, 0, 0.8)')} 
      borderRadius="lg"
      boxShadow="lg" 
      p={6} 
    >
      <Box
        borderRadius="lg"
        mb={6}
        fontWeight={"medium"}
        p={3}
        textAlign="center"
        bg={useColorModeValue('#dd6b20', '#fbd38d')} 
        color={useColorModeValue('white', 'black')} 
        border="1px solid"
        borderColor={useColorModeValue('#c05621', '#f6ad55')} 
        css={{ backdropFilter: 'blur(10px)' }}
        _hover={{
          backgroundColor: useColorModeValue('#c05621', '#f6ad55'), 
          borderColor: useColorModeValue('#9c4221', '#dd6b20'), 
          transform: 'scale(1.05)',
          transition: 'all 0.3s ease-in-out',
        }}
      >
        Hello, I&apos;m a software engineer.
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            İsmail Yarar
          </Heading>
          <p>Software Engineer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src="/images/facta-image.jpeg"
              alt="Profile image"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About Me
        </Heading>
        <Paragraph>
        As a software engineer, I'm passionate about creating innovative digital solutions. I love turning ideas into reality, from the early stages of planning and design to solving real-world problems with code. When I'm not at work, I enjoy exploring new technologies and working on side projects. Right now, I'm focusing on personal projects and continuously improving my technical skills. I also like to share my knowledge and insights with the developer community to inspire others.
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/portfolio"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="orange"
          >
            My Portfolio
          </Button>
        </Box>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Hobbies
        </Heading>
        <Paragraph>
          Art,{' '}
          <Link href="https://factaxd.itch.io/" target="_blank">
            Making Games
          </Link>
          , Learning New Technologies
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Contact Me
        </Heading>
        <HStack spacing={4} justify="center">
          <Link href="https://github.com/factaxd" target="_blank">
            <Button
              variant="ghost"
              colorScheme="orange"
              leftIcon={<IoLogoGithub />}
            >
              @factaxd
            </Button>
          </Link>
          <Button
            variant="ghost"
            colorScheme="orange"
            leftIcon={<EmailIcon />}
          >
            ismileyarar@gmail.com
          </Button>
          <Link href="https://linkedin.com/in/facta" target="_blank">
            <Button
              variant="ghost"
              colorScheme="orange"
              leftIcon={<IoLogoLinkedin />}
            >
              LinkedIn
            </Button>
          </Link>
        </HStack>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
