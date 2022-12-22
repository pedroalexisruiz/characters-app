/**
 * @jest-environment jsdom
 * @jest-environment-options {"url": "https://jestjs.io/"}
 */

import * as React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { I18nextProvider } from "react-i18next";
import i18n from "../../i18n/config";
import LanguageSelector from "./LanguageSelector";

describe("LanguageSelector", function () {
  it("Mount the component", () => {
    //ARRANGE
    const selectsCount = 1;
    const { container, getByText } = render(
      <I18nextProvider i18n={i18n}>
        <LanguageSelector />
      </I18nextProvider>
    );

    //ASSERT
    expect(container.getElementsByTagName("select").length).toBe(selectsCount);
    expect((getByText("Español") as HTMLOptionElement).selected).toBeTruthy();
    expect((getByText("Inglés") as HTMLOptionElement).selected).toBeFalsy();
  });

  it("Change Language", async () => {
    //ARRANGE
    const user = userEvent.setup();
    const { getByTestId, getByRole } = render(
      <I18nextProvider i18n={i18n}>
        <LanguageSelector />
      </I18nextProvider>
    );

    //ACT
    await user.selectOptions(getByTestId("language-selector"), "en");

    //ASSERT
    expect(
      (getByRole("option", { name: "Spanish" }) as HTMLOptionElement).selected
    ).toBeFalsy();
    expect(
      (getByRole("option", { name: "English" }) as HTMLOptionElement).selected
    ).toBeTruthy();
  });
});
