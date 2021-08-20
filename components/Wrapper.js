import React, { useState } from 'react';
import { Form, useField } from 'react-final-form'
import { connectionRequest } from '../utils/handleAPI';

import {
    Container,
    Wrap,
    Box,
    Heading,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,
    Switch,
    useBoolean
 } from "@chakra-ui/react"


const Wrapper = ({proto, setProto}) => {

    const [close, closeButton] = useBoolean()
    const [message, setMessage] = useState([])
    const onSubmit = async () => {
        let req;
        proto ? req = 'UDP' : req = 'TCP'
        console.log(`This is ${req}`)
        console.log(`Close button: ${close}`)
    
        console.log(`Close in button: ${close}`)
        const res = await connectionRequest(req)
        
    
        console.log(res.messageFromClient)
        setMessage(res.messageFromClient) 
    }



    return (
        <Flex>
            <Box py={6} px={[2, 5, 12, 24]}>
                <Box
                    maxW={'370px'}
                    w={'370px'}
                    bg={useColorModeValue('white', 'gray.800')}
                    boxShadow={'3xl'}
                    border={'4px solid #e0e0e0'}
                    rounded={'md'}
                    overflow={'hidden'}
                >


                    <Box p={6}>
                        <Stack spacing={0} align={'center'} mb={5}>

                            <Heading
                                color={useColorModeValue('gray.700', 'white')}
                                align={'center'}
                                pb={4}
                                fontSize={'2xl'}
                                fontFamily={'body'}>
                                Server 1
                            </Heading>
                            <Text color={'gray.500'} textAlign='justify'>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                                erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                                et ea rebum.
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                                erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                                et ea rebum.

                            </Text>
                        </Stack>
                        
                        <Form
        onSubmit={onSubmit}
        render={({
          handleSubmit,
          form,
          errors,
          submitting,
          pristine,
          values
        }) => (
          <Box
            as="form"
            p={4}
            borderWidth="1px"
            rounded="lg"
            shadow="1px 1px 3px rgba(0,0,0,0.3)"
            onSubmit={handleSubmit}
          >
            <InputControl name="message" label="Send Message" />
            <ButtonGroup spacing={4}>
              <Button
                isLoading={submitting}
                loadingText="Submitting"
                variantColor="teal"
                type="submit"
              >
                Submit
              </Button>
              <Button
                variant="outline"
                onClick={form.reset}
                isDisabled={submitting || pristine}
                isLoading={submitting}
                                    loadingText="Listening to Requests"
                                    type="submit"
                                    w={'full'}
                                    mt={1}
                                    bg={useColorModeValue('#48BB78', 'green.400')}
                                    color={'white'}
                                    rounded={'md'}
                                    _hover={{
                                    transform: 'translateY(-2px)',
                                    boxShadow: 'lg',
                                    }}
              >
                Reset
              </Button>
            </ButtonGroup>
            <Box as="pre" my={10}>
              {JSON.stringify(values, 0, 2)}
            </Box>
          </Box>
        )}
      />
                    </Box>
                </Box>
            </Box>

            {/* Display */}


            <Box py={6} px={[2, 5, 12, 24]}>
                <Box
                    w={'400px'}
                    h={'300px'}
                    bg={useColorModeValue('white', 'gray.800')}
                    boxShadow={'3xl'}
                    border={'solid #e0e0e0'}
                    rounded={'md'}
                    overflow={'hidden'}
                >
                    <Box p={6}>
                        <Heading fontSize={'lg'}>Connection Mode: {proto ? 'UDP' : 'TCP'} Close Button: {close.toString()}</Heading>
                        {message}
                    </Box>
                </Box>
            </Box>
        </Flex>

    )
}

export default Wrapper
