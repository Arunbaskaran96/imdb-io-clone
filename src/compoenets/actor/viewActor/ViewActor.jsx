import { Drawer } from "@mantine/core";
import React from "react";

function ViewActor(props) {
  const { opened, close } = props;
  //   const [opened, { open, close }] = useDisclosure(false);
  return (
    <Drawer opened={opened} onClose={close} withCloseButton={false}>
      Drawer without header, press escape or click on overlay to close
    </Drawer>
  );
}

export default ViewActor;
