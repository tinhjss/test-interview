import React, { useState } from "react";
import { Center, Text, Input } from "@chakra-ui/react";

const DynamicText = () => {
  return (
  <Text
    maxW={"500px"}
    overflowWrap={"break-word"}
    fontSize={"2em"}
    fontWeight={"bold"}
    my={"21px"}
  >
    Random Text
  </Text>
  )
};

export default DynamicText;
