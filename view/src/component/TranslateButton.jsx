import React from "react";

import { Button } from "@chakra-ui/react";
import instance from "../../instance";

async function translateCode(code, language) {
  const result = await instance.get("/translate", {
    params: { code, language },
  });
  return result.data.translated_code;
}

function TranslateButton({ initialCode, setTargetCode }) {
  const handleTranslateCode = async () => {
    const translation = await translateCode(initialCode, "c");
    setTargetCode(translation);
    console.log(translation);
  };

  return (
    <div>
      <Button colorScheme="blue" size="lg" onClick={handleTranslateCode}>
        Translate
      </Button>
    </div>
  );
}

export default TranslateButton;
