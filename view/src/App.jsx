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

const LANGUAGES = [
  "javascript",
  "python",
  "java",
  "c",
  "cpp",
  "csharp",
  "ruby",
  "go",
  "swift",
  "php",
  "typescript",
  "rust",
  "kotlin",
  "scala",
  "r",
  "perl",
  "haskell",
  "lua",
  "shell",
  "dart",
  "bash",
  "powershell",
];

function App() {
  const [initialCode, setInitialCode] = useState("");
  const [targetCode, setTargetCode] = useState("");
  const [initialLangauge, setInitialLanguage] = useState("javascript");
  const [targetLanguage, setTargetLanguage] = useState("javascript");

  return (
    <div>
      <Center h="300px">
        <Flex>
          <Spacer />
          <VStack gap="30px">
            <Heading size="4xl">AI Code Translator</Heading>
            <TranslateButton
              initialCode={initialCode}
              targetLanguage={targetLanguage}
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
        languages={LANGUAGES}
        initialLangauge={initialLangauge}
        targetLanguage={targetLanguage}
        setInitialLanguage={setInitialLanguage}
        setTargetLanguage={setTargetLanguage}
      />
    </div>
  );
}

export default App;
