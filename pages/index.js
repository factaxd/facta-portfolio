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
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import thumbYouTube from '../public/images/links/youtube.png'
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
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
        Hello, I&apos;m a software developer.
    </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            İsmail Yarar
          </Heading>
          <p>Software Engineer and Designer</p>
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
    Work
  </Heading>
  <Paragraph>
    İsmail Yarar is a developer with a passion
    for building innovative digital solutions. He excels in
    turning ideas into reality, from the initial stages of 
    planning and design to solving real-world problems through 
    code. When he's not online, he enjoys exploring new technologies 
    and working on side projects. Currently, İsmail is focused on 
    developing personal projects and refining his technical skills. 
    He shares insights and knowledge on various platforms to inspire 
    other developers.
  </Paragraph>
    <Box align="center" my={4}>
      <Button
        as={NextLink}
        href="/works"
        scroll={false}
        rightIcon={<ChevronRightIcon />}
        colorScheme="orange"
      >
        My Portfolio
      </Button>
    </Box>
</Section>


{/*       <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2002</BioYear>
          Born in Turkey (大阪), Japan.
        </BioSection>
        <BioSection>
          <BioYear>2010</BioYear>
          Completed the Master&apos;s Program in the Graduate School of
          Information Science at Nara Institute of Science and Technology
          (奈良先端科学技術大学院大学情報科学研究科修士課程)
        </BioSection>
        <BioSection>
          <BioYear>2010</BioYear>
          Worked at Yahoo! Japan (ヤフー株式会社入社)
        </BioSection>
        <BioSection>
          <BioYear>2012 to present</BioYear>
          Working as a freelancer
        </BioSection>
      </Section> */}

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Hobbies
        </Heading>
        <Paragraph>
          Art,{' '}
          <Link href="https://factaxd.itch.io/" target="_blank">
            Making Games
          </Link>
          , Learning New Technologies, Cooking,
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/factaxd" target="_blank">
              <Button
                variant="ghost"
                colorScheme="orange"
                leftIcon={<IoLogoGithub />}
              >
                @factaxd
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
