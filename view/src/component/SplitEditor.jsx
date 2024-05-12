import React from "react";

import { Center, HStack, Select, VStack } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";

function SplitEditor({
  initialCode,
  targetCode,
  setInitialCode,
  setTargetCode,
}) {
  const code = "var message = 'Monaco Editor!' \nconsole.log(message);";

  return (
    <div>
      <Center>
        <HStack className="box-border p-4" w="80%">
          <VStack w="50%" className="py-1" gap="10px">
            <Select placeholder="Select option">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
            <Editor
              height="400px"
              language="javascript"
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
              onChange={(value) => {
                setInitialCode(value);
              }}
            />
          </VStack>
          <VStack w="50%" className="py-1" gap="10px">
            <Select placeholder="Select option">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
            <Editor
              height="400px"
              language="javascript"
              theme="vs-dark"
              value={targetCode}
              borderRadius="8px"
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
