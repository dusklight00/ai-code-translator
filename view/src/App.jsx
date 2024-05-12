import {
  Heading,
  Flex,
  Spacer,
  VStack,
  Button,
  Center,
  Box,
  HStack,
  Select,
} from "@chakra-ui/react";

import instance from "../instance";
import { useState, useEffect } from "react";
import SplitEditor from "./component/SplitEditor";
import TranslateButton from "./component/TranslateButton";

function App() {
  const [initialCode, setInitialCode] = useState("");
  const [targetCode, setTargetCode] = useState("");
  // const [initialLangauge, setInitialLanguage] = useState("javascript");
  // const [targetLanguage, setTargetLanguage] = useState("javascript");

  return (
    <div>
      <Center h="300px">
        <Flex>
          <Spacer />
          <VStack gap="30px">
            <Heading size="4xl">AI Code Translator</Heading>
            <TranslateButton
              initialCode={initialCode}
              setTargetCode={setTargetCode}
            />
          </VStack>
          <Spacer />
        </Flex>
      </Center>
      <SplitEditor
        initialCode={initialCode}
        targetCode={targetCode}
        setInitialCode={setInitialCode}
        setTargetCode={setTargetCode}
      />
    </div>
  );
}

export default App;
