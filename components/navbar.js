import { forwardRef } from 'react'
import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'
import { IoLogoGithub } from 'react-icons/io5'
import { FaGamepad } from 'react-icons/fa'  

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900')
  return (
    <Link
      as={NextLink}
      href={href}
      scroll={false}
      p={2}
      borderRadius={10}
      bg={active ? '#fbd38d' : undefined}
      color={active ? '#202023' : inactiveColor}
      target={target}
      {...props}
    >
      {children}
    </Link>
  )
}

const MenuLink = forwardRef((props, ref) => (
  <Link ref={ref} as={NextLink} {...props} />
))

const Navbar = props => {
  const { path } = props

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={2}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="center"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/works" path={path}>
            Portfolio
          </LinkItem>
          
          <LinkItem href="/wallpapers" path={path}>
            Projects
          </LinkItem>

          <LinkItem href="/posts" path={path}>
            Services
          </LinkItem>

          {/* <LinkItem href="https://uses.craftz.dog/">Uses</LinkItem>  */}

          <LinkItem
            target="_blank"
            href="https://github.com/factaxd"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <IoLogoGithub />
            GitHub
          </LinkItem>

          <LinkItem
            target="_blank"
            href="https://factaxd.itch.io/"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <FaGamepad />  {/* Replace with gamepad icon */}
            itch.io
          </LinkItem>
        </Stack>

        <Box flex={1} align="right">
          <ThemeToggleButton />

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList bg={useColorModeValue('#dd6b20', '#fbd38d')} >
                <MenuItem
                  as={MenuLink}
                  href="/"
                  bg={useColorModeValue('#dd6b20', '#fbd38d')} 
                  color={useColorModeValue('white', 'black')} 
                  _hover={{
                    bg: useColorModeValue('#c05621', '#f6ad55'), 
                    color: useColorModeValue('white', 'black') 
                  }}
                >
                  About
                </MenuItem>
                
                <MenuItem
                  as={MenuLink}
                  href="/works"
                  bg={useColorModeValue('#dd6b20', '#fbd38d')}
                  color={useColorModeValue('white', 'black')}
                  _hover={{
                    bg: useColorModeValue('#c05621', '#f6ad55'),
                    color: useColorModeValue('white', 'black')
                  }}
                >
                  Portfolio
                </MenuItem>

                <MenuItem
                  as={MenuLink}
                  href="/wallpapers"
                  bg={useColorModeValue('#dd6b20', '#fbd38d')}
                  color={useColorModeValue('white', 'black')}
                  _hover={{
                    bg: useColorModeValue('#c05621', '#f6ad55'),
                    color: useColorModeValue('white', 'black')
                  }}
                >
                  Projects
                </MenuItem>

                <MenuItem
                  as={Link}
                  href="https://github.com/factaxd"
                  bg={useColorModeValue('#dd6b20', '#fbd38d')}
                  color={useColorModeValue('white', 'black')}
                  _hover={{
                    bg: useColorModeValue('#c05621', '#f6ad55'),
                    color: useColorModeValue('white', 'black')
                  }}
                >
                  GitHub
                </MenuItem>

                <MenuItem
                  as={Link}
                  href="https://factaxd.itch.io/"
                  bg={useColorModeValue('#dd6b20', '#fbd38d')}
                  color={useColorModeValue('white', 'black')}
                  _hover={{
                    bg: useColorModeValue('#c05621', '#f6ad55'),
                    color: useColorModeValue('white', 'black')
                  }}
                >
                  itch.io
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
