import {
  Heading,
  Flex,
  Spacer,
  VStack,
  Button,
  Center,
  Box,
} from "@chakra-ui/react";

import Editor from "@monaco-editor/react";

function App() {
  const code = "var message = 'Monaco Editor!' \nconsole.log(message);";

  return (
    <div>
      <Center h="300px">
        <Flex>
          <Spacer />
          <VStack gap="30px">
            <Heading>AI Code Translator</Heading>
            <Button colorScheme="blue">Translate</Button>
          </VStack>
          <Spacer />
        </Flex>
      </Center>
      <Box border="1px" borderRadius="8px">
        <Editor
          height="100px"
          language="javascript"
          theme="vs-dark"
          value={code}
          borderRadius="8px"
          options={{
            inlineSuggest: true,
            fontSize: "16px",
            formatOnType: true,
            autoClosingBrackets: true,
            minimap: { enabled: false },
          }}
        />
      </Box>
    </div>
  );
}

export default App;
