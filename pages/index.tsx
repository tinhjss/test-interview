import DynamicText from "components/DynamicText";
import { Center, Input } from "@chakra-ui/react";
import React, { useRef } from "react";

const Home = () => {
  const value = useRef<any>()
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(value?.current?.children?.length>0){
      value.current.children[0].textContent= e.target.value || "Random Text"
    }
  };
  return (
    <Center 
      w={"100%"} 
      h={"100vh"} 
      bg='white' 
      flexDir={"column"} 
      ref={value}
    >
      <DynamicText />
      <Input
        borderWidth={"1px"}
        h={"21px"}
        padding={1}
        fontSize={"13px"}
        borderRadius={"3px"}
        borderColor={"black"}
        _hover={{ borderColor: "black" }}
        onChange={onChange} w={"147px"}
      />
    </Center>
  );
};

export default Home;
