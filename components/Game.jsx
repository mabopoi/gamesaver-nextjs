import React, { useState, useRef } from 'react';
import Axios from 'axios';
import { useRouter } from 'next/router';
import UpdateGameForm from './UpdateGameForm';
import {
  Stack,
  Text,
  Button,
  IconButton,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from '@chakra-ui/core';

const Game = (props) => {
  const { moves, opponent, result, userColor, date, _id } = props.data;
  const router = useRouter();
  const [isUpdateOpen, setIsUpdateOpen] = useState(false);
  const toggle = () => setIsUpdateOpen(!isUpdateOpen);
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = useRef();

  const handleClick = async (e) => {
    onClose();
    const deletedGame = await Axios.delete(`api/games/${_id}`);
    if (deletedGame.status == 200) {
      router.reload();
    }
  };
  return (
    <Stack
      backgroundColor='teal.100'
      borderRadius={4}
      margin={4}
      paddingLeft={3}
      isInline
    >
      {isUpdateOpen ? (
        <UpdateGameForm data={props.data} />
      ) : (
        <Stack>
          <Text>Moves: {moves}</Text>
          <Text>You played against: {opponent}</Text>
          <Text>Result: {result}</Text>
          <Text>Your color: {userColor}</Text>
          {date ? <Text> {date}</Text> : <Text> Unknown date</Text>}
        </Stack>
      )}
      <Stack>
        <IconButton
          icon='close'
          variantColor='red'
          onClick={() => setIsOpen(true)}
        />

        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay />
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Delete Customer
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button variantColor='red' onClick={handleClick} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        <IconButton icon='edit' onClick={toggle} />
      </Stack>
    </Stack>
  );
};

export default Game;
