import NextLink from 'next/link'
import { 
  Container, 
  Heading, 
  Divider, 
  useColorModeValue, 
  Box, 
  Text, 
  Button, 
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import Image from 'next/image'  
import bananadungeon from '../../public/images/wallpapers/bananadungeon.png'  
import twitchchat from '../../public/images/wallpapers/twitch-chat.jpg'       

const Wallpapers = () => (
  <Layout title="Projects">
    <Container
      mt={16}
      bg={useColorModeValue('rgba(255, 255, 255, 0.8)', 'rgba(0, 0, 0, 0.8)')} 
      borderRadius="lg"
      boxShadow="lg"
      p={6}
    >
      {/* Projects Section Header */}
      <Heading as="h3" mb={10} variant="section-title" textAlign="center">
        My Projects
      </Heading>

      {/* Project 1 */}
      <Section>
        <Box p={6} borderRadius="lg" bg={useColorModeValue('gray.100', 'gray.900')} boxShadow="md" mb={6}>
          {/* Thumbnail Image - Next.js Image Component */}
          <Image 
            src={bananadungeon} 
            alt="Banana Dungeon" 
            layout="responsive"   
            width={600}         
            height={400}        
            quality={80}          
            placeholder="blur"    
          />
          <Heading as="h4" fontSize="xl" mt={4} mb={2} textAlign="center">
            Banana Dungeon
          </Heading>
          <Text mt={2} mb={2} color={useColorModeValue('gray.700', 'gray.300')} textAlign="justify">
            Banana Dungeon offers a unique 2D Roguelike experience. Explore procedurally generated dungeons, fight enemies, find weapons, and overcome challenges across multiple levels.
          </Text>
          {/* GitHub Button */}
          <Center>
            <Button
              as={NextLink}
              href="https://factaxd.itch.io/bnndungeon2"
              target="_blank"
              colorScheme="orange"
              variant="outline"
              mt={2}
            >
              Play on itch.io
            </Button>
          </Center>
        </Box>
      </Section>

      {/* Project 2 */}
      <Section>
        <Box p={6} borderRadius="lg" bg={useColorModeValue('gray.100', 'gray.900')} boxShadow="md" mb={6}>
          {/* Thumbnail Image - Next.js Image Component */}
          <Image 
            src={twitchchat} 
            alt="Twitch Chat Reader" 
            layout="responsive" 
            width={600} 
            height={400} 
            quality={80} 
            placeholder="blur" 
          />
          <Heading as="h4" fontSize="xl" mt={4} mb={2} textAlign="center">
            Twitch Chat Reader
          </Heading>
          <Text mt={2} mb={2} color={useColorModeValue('gray.700', 'gray.300')} textAlign="justify">
            A Python-based Twitch IRC chat reader that connects in real-time to listen, process, and filter chat messages with keyword detection and user-specific features.
          </Text>
          {/* GitHub Button */}
          <Center>
            <Button
              as={NextLink}
              href="https://github.com/factaxd/twitch-chat-reader"
              target="_blank"
              colorScheme="orange"
              variant="outline"
              mt={2}
            >
              View on GitHub
            </Button>
          </Center>
        </Box>
      </Section>

    </Container>
  </Layout>
)

export default Wallpapers
export { getServerSideProps } from '../../components/chakra'
