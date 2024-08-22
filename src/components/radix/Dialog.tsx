import React from "react";
import * as Dialog from "@radix-ui/react-dialog";

const DialogDemo = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className="Button violet">Edit profile</button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content className="DialogContent">
        <Dialog.Title className="DialogTitle">Edit profile</Dialog.Title>
        <Dialog.Description className="DialogDescription">
          Make changes to your profile here. Click save when youre done.
        </Dialog.Description>
        <div
          style={{ display: "flex", marginTop: 25, justifyContent: "flex-end" }}
        >
          <Dialog.Close asChild>
            <button className="Button green">Save changes</button>
          </Dialog.Close>
        </div>
        <Dialog.Close asChild>
          <button className="IconButton" aria-label="Close">
            X
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default DialogDemo;
