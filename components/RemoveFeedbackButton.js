import React, { useState } from "react";
import { DeleteIcon } from "@chakra-ui/icons";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  AlertDialogCloseButton,
  IconButton,
} from "@chakra-ui/react";

const RemoveButton = ({ id, onRemove }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const confirmDeletion = () => {
    onRemove(id);
    setIsOpen(false);
  };

  const cancelDeletion = () => {
    setIsOpen(false);
  }
  return (
    <>
      <IconButton
        variant="outline"
        colorScheme="black"
        aria-label="Remove feedback"
        icon={<DeleteIcon />}
        onClick={() => setIsOpen(true)}
      />
      <AlertDialog
        motionPreset="slideInBottom"
        //leastDestructiveRef={cancelRef}
        onClose={cancelDeletion}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>Discard Changes?</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            Are you sure you want to delete this feedback? It will be erased from
            the database.
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button //ref={cancelRef} 
              onClick={cancelDeletion}>
              No
            </Button>
            <Button colorScheme="red" ml={3} onClick={confirmDeletion}>
              Yes
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default RemoveButton;
