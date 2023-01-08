import { useState } from 'react';
import next from 'next';
import { Modal, Button, Group } from '@mantine/core';
import {
    Paper,
    Title,
    Container
  } from '@mantine/core';
import { createStyles, Select, TextInput } from '@mantine/core';
import { DatePicker } from '@mantine/dates';

const useStyles = createStyles((theme) => ({
    root: {
      position: 'relative',
    },
  
    input: {
      height: 'auto',
      paddingTop: 18,
    },
  
    label: {
      position: 'absolute',
      pointerEvents: 'none',
      fontSize: theme.fontSizes.xs,
      paddingLeft: theme.spacing.sm,
      paddingTop: theme.spacing.sm / 2,
      zIndex: 1,
    },
  }));
  

export default function EventModal() {
  const [opened, setOpened] = useState(false);
  const { classes } = useStyles();

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
      >
        <Container size={420} my={40}>
      <Title
        align="center"
        sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
      >
        Create New Event
      </Title>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
      <TextInput label="Camp Location" placeholder="Texas A&M University" classNames={classes} />
      <TextInput label="Stadium Address" placeholder="15329 Huston 21st" classNames={classes} style={{marginTop: 20}} />
        <Select
        style={{ marginTop: 20, zIndex: 2 }}
        data={['React', 'Angular', 'Svelte', 'Vue']}
        placeholder="Pick one"
        label="Your favorite library/framework"
        classNames={classes}
        />

        <DatePicker
        style={{ marginTop: 20 }}
        label="Camp Dates"
        placeholder="Camp will run through"
        classNames={classes}
        clearable={false}
        />
      </Paper>
    </Container>
      </Modal>

      <Group position="center">
        <Button variant="gradient" gradient={{ from: 'yellow', to: 'black' }} size='xs' uppercase onClick={() => setOpened(true)}>Add Event</Button>
      </Group>
    </>
  );
}