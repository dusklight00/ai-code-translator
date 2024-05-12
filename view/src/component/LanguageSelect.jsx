import React from "react";

import { Select } from "@chakra-ui/react";

function LanguageSelect({ languages, currentLanguage, setLanguage }) {
  return (
    <Select
      defaultValue={currentLanguage}
      onChange={(e) => setLanguage(e.target.value)}
    >
      {languages.map((language) => (
        <option key={language} value={language}>
          {language}
        </option>
      ))}
    </Select>
  );
}

export default LanguageSelect;
