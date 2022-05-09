import { Children } from ".";
import { ToastProviderProps } from "./Toast/createToastProvider";
import { OverlayProvider } from "@react-aria/overlays";
import { DefaultMessages, DefaultMessagesContext } from "./DefaultMessagesContext";
import { LinkComponentContext, LinkComponentProps } from "./util/link";
import { ComponentType, FunctionComponent, useContext } from "react";
import { I18nProvider } from "@react-aria/i18n";

type Props = {
  children?: Children;
  toastDismissAfterMs?: number;
  /**
   * The component which will be used to render a link (such as in `ButtonLink`).
   * You can use this to customize the link rendering, such as using React Router's `Link` component.
   * When you do so, make sure to use the `makeLinkComponent` utility and to forward the ref to your
   * custom component, e.g.
   *
   * ```ts
   * import { Link } from "react-router-dom";
   * import { Box } from "design-system";
   *
   * const linkComponent = makeLinkComponent(({ href, ...props }, ref) => {
   *  if (href.startsWith("http")) {
   *    return <Box as="a" ref={ref} {...props} />;
   *  } else {
   *    return <Link ref={ref} to={href} {...props} />;
   *  }
   * })
   * ```
   *
   * Defaults to a regular `<a>` tag.
   */
  linkComponent?: ComponentType<LinkComponentProps>;
  locale?: string;
} & DefaultMessages;

export function createBentoProvider(ToastProvider: FunctionComponent<ToastProviderProps>) {
  return function BentoProvider({
    children,
    toastDismissAfterMs = 5000,
    defaultMessages,
    linkComponent,
    locale,
  }: Props) {
    const linkComponentFromContext = useContext(LinkComponentContext);

    return (
      <I18nProvider locale={locale}>
        <OverlayProvider style={{ height: "100%" }}>
          <DefaultMessagesContext.Provider value={{ defaultMessages }}>
            <LinkComponentContext.Provider value={linkComponent ?? linkComponentFromContext}>
              <ToastProvider dismissAfterMs={toastDismissAfterMs}>{children}</ToastProvider>
            </LinkComponentContext.Provider>
          </DefaultMessagesContext.Provider>
        </OverlayProvider>
      </I18nProvider>
    );
  };
}
