import React, { ReactElement } from "react";
import { IntlProvider, MessageFormatElement } from "react-intl";
import { useAppSelector } from "../../app/hooks";
import message from "../../translate";
import { getLanguage } from "./appSlice";

interface InitialProps {
  children: ReactElement;
}

export default function Initial({ children }: InitialProps): ReactElement {
  const language = useAppSelector(getLanguage);

  return (
    <IntlProvider messages={message[language] as any} locale={language}>
      {children}
    </IntlProvider>
  );
}
