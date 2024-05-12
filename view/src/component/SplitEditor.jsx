import React from "react";

import { Center, HStack, Select, VStack } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";

import LanguageSelect from "./LanguageSelect";

function SplitEditor({
  initialCode,
  targetCode,
  setInitialCode,
  setTargetCode,
  languages,
  initialLangauge,
  targetLanguage,
  setInitialLanguage,
  setTargetLanguage,
}) {
  return (
    <div>
      <Center>
        <HStack className="box-border p-4" w="80%">
          <VStack w="50%" className="py-1" gap="10px">
            <LanguageSelect
              languages={languages}
              currentLanguage={initialLangauge}
              setLanguage={setInitialLanguage}
            />
            <Editor
              height="400px"
              language={initialLangauge}
              theme="vs-dark"
              value={initialCode}
              borderRadius="8px"
              options={{
                inlineSuggest: true,
                fontSize: "16px",
                formatOnType: true,
                autoClosingBrackets: true,
                minimap: { enabled: false },
              }}
              onChange={setInitialCode}
            />
          </VStack>
          <VStack w="50%" className="py-1" gap="10px">
            <LanguageSelect
              languages={languages}
              currentLanguage={targetLanguage}
              setLanguage={setTargetLanguage}
            />
            <Editor
              height="400px"
              language={targetLanguage}
              theme="vs-dark"
              value={targetCode}
              borderRadius="8px"
              onChange={setTargetCode}
              options={{
                inlineSuggest: true,
                fontSize: "16px",
                formatOnType: true,
                autoClosingBrackets: true,
                minimap: { enabled: false },
              }}
            />
          </VStack>
        </HStack>
      </Center>
    </div>
  );
}

export default SplitEditor;
