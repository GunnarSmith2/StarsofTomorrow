import next from 'next';
import { useToggle, upperFirst } from '@mantine/hooks';
import {
    Box,
    TextInput,
    PasswordInput,
    Checkbox,
    Anchor,
    Paper,
    Title,
    Text,
    Container,
    Group,
    Button,
    Space,
  } from '@mantine/core';
import { ActionToggle } from './components/Colormode';
  
  export default function AuthenticationTitle() {
    return (
      <Container size={420} my={40} >
        <ActionToggle />
        <Title
          align="center"
          sx={{fontFamily:'proxima-nova, Verdana, Arial, sans-serif', fontWeight: 900 }}
        >
          Sign In
        </Title>
        <Space h='md' />
        <Text align='center' size="md"  sx={{ fontFamily:'proxima-nova, Verdana, Arial, sans-serif', fontWeight: 900, paddingTop: '1rem' }} >
            Scouting the Stars of Tomorrow
        </Text>
  
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <TextInput label="Scout ID" placeholder="Enter your Scout ID" required />
          <PasswordInput label="Password" placeholder="Your password" required mt="md" />
          <Group position="apart" mt="lg">
            <Checkbox label="Remember me" sx={{ lineHeight: 1 }} />
            <Anchor<'a'> onClick={(event) => event.preventDefault()} href="#" size="sm">
              Forgot password?
            </Anchor>
          </Group>
          <Button color="yellow" fullWidth mt="xl">
            Sign in
          </Button>
        </Paper>
        <Text color="dimmed" size="sm" align="center" mt={5}>
          Do not have an account yet?{' '}
          <Anchor<'a'> href="#" size="sm" color='yellow' onClick={(event) => event.preventDefault()}>
            Create account
          </Anchor>
        </Text>
      </Container>
    );
  }