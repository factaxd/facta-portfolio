import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelDogLoader from '../voxel-dog-loader'

const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="facta's homepage" />
        <meta name="author" content="facta" />
        <meta name="author" content="craftzdog" />
        <link rel="facta-image" href="facta-image.jpeg" />
        <link rel="shortcut icon" href="/abc.ico" type="image/x-icon" />
        <meta name="twitter:title" content="facta" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:site_name" content="facta" />
        <meta name="og:title" content="facta" />
        <meta property="og:type" content="website" />
        <title>facta - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyVoxelDog />

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
