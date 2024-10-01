import { Container, Heading, Text } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'

const IndieGames = () => (
  <Layout title="Indie Game Development">
    <Container>
      <Heading as="h1" mb={6}>
        Indie Game Development
      </Heading>
      <Text mb={4}>
        Indie game development is my passion. From ideation to launch, I take care of every stage of the game development process. I work with both Unity and Unreal Engine to deliver high-quality, engaging games that captivate players.
      </Text>
      <Text mb={4}>
        I can assist with everything from level design, game mechanics, animations, and sound integration. Let’s work together to bring your unique game idea to life!
      </Text>
    </Container>
  </Layout>
)

export default IndieGames
