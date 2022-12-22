import React from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n/config";
import Select from "../Select";
import styled from "styled-components";

const LanguageSelectorContainer = styled.div`
  padding-top: 2rem;
`;

const LanguageSelector = () => {
  const { t } = useTranslation();

  const changeLanguage = (lng: any) => {
    i18n.changeLanguage(lng);
  };

  const options = [
    { label: t("language.es"), value: "es" },
    { label: t("language.en"), value: "en" },
  ];
  return (
    <LanguageSelectorContainer>
      <Select
        value={i18n.language}
        onChange={(e) => {
          changeLanguage(e.target.value);
        }}
        data-testid="language-selector"
      >
        {options.map(({ label, value }) => {
          return (
            <option key={`${label}-${value}`} value={value}>
              {label}
            </option>
          );
        })}
      </Select>
    </LanguageSelectorContainer>
  );
};

export default LanguageSelector;
