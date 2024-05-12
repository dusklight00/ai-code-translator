import React, { useState } from "react";

import { Button } from "@chakra-ui/react";
import instance from "../../instance";

async function translateCode(code, language) {
  const result = await instance.get("/translate", {
    params: { code, language },
  });
  return result.data.translated_code;
}

function TranslateButton({ initialCode, targetLanguage, setTargetCode }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleTranslateCode = async () => {
    setIsLoading(true);
    const translation = await translateCode(initialCode, targetLanguage);
    setIsLoading(false);
    setTargetCode(translation);
  };

  return (
    <div>
      <Button
        colorScheme="blue"
        size="lg"
        onClick={handleTranslateCode}
        loadingText="Translating..."
        isLoading={isLoading}
      >
        Translate
      </Button>
    </div>
  );
}

export default TranslateButton;
