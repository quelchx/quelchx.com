import {
  Button,
  chakra,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  VStack,
  useColorModeValue
} from "@chakra-ui/react";
import React from "react";
import { BsPerson } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

const Form = () => {
  return (
    <chakra.form
      method="POST"
      name="contact"
      data-netlify="true"
      netlify-honeypot="bot-field"
      bg={useColorModeValue("white", "gray.700")}
      borderRadius="lg"
      p={8}
      color={useColorModeValue("gray.700", "whiteAlpha.900")}
      shadow="base"
    >
      <input type="hidden" name="form-name" value="contact" />

      <VStack spacing={5}>
        <FormControl isRequired>
          <FormLabel>Name</FormLabel>

          <InputGroup>
            <InputLeftElement children={<BsPerson />} />
            <Input type="text" name="name" placeholder="Your Name" />
          </InputGroup>
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Email</FormLabel>

          <InputGroup>
            <InputLeftElement children={<MdOutlineEmail />} />
            <Input type="email" name="email" placeholder="Your Email" />
          </InputGroup>
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Message</FormLabel>

          <Textarea
            name="message"
            placeholder="Your Message"
            rows={6}
            resize="none"
          />
        </FormControl>
        <chakra.div className="relative">
          <div data-netlify-recaptcha="true"></div>
        </chakra.div>
        <Button
          type="submit"
          colorScheme="blue"
          bg="blue.400"
          color="white"
          _hover={{
            bg: "blue.500",
          }}
          isFullWidth
        >
          Send Message
        </Button>
      </VStack>
    </chakra.form>
  );
};

export default Form;
