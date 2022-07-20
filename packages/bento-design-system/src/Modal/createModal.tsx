import { FunctionComponent, useRef } from "react";
import { ActionsProps, ButtonProps, Children, LocalizedString, Title } from "..";
import { Box, Column, Columns, Inset } from "../internal";
import { useOverlay, usePreventScroll, useModal } from "@react-aria/overlays";
import { useDialog } from "@react-aria/dialog";
import { FocusScope } from "@react-aria/focus";
import { modalRecipe, underlay, modalBody } from "./Modal.css";
import useKeyPressEvent from "react-use/lib/useKeyPressEvent";
import { ModalContext } from "./ModalContext";
import { useDefaultMessages } from "../util/useDefaultMessages";
import { IconButtonProps } from "../IconButton/createIconButton";
import { createPortal } from "../util/createPortal";
import { ModalConfig } from "./Config";
import { match } from "ts-pattern";

export type ModalSize = "small" | "medium" | "large" | "wide";
export type ModalKind = "normal" | "warning" | "destructive";
type Props = {
  title: LocalizedString;
  children: Children;
  primaryAction?: Omit<ButtonProps, "kind" | "hierarchy" | "size">;
  secondaryAction?: Omit<ButtonProps, "kind" | "hierarchy" | "size">;
  onClose: () => void;
  closeButtonLabel?: LocalizedString;
  /** @deprecated use kind='destructive' instead */
  isDestructive?: boolean;
  loadingMessage?: ActionsProps["loadingMessage"];
  error?: ActionsProps["error"];
  size?: ModalSize;
  kind?: ModalKind;
  autoFocus?: boolean;
};

type CustomModalProps = Pick<Props, "children" | "isDestructive" | "size" | "autoFocus"> & {
  ["aria-label"]: string;
};

export function createModal(
  config: ModalConfig,
  {
    Actions,
    IconButton,
  }: {
    Actions: FunctionComponent<ActionsProps>;
    IconButton: FunctionComponent<IconButtonProps>;
  }
) {
  function CustomModal(props: CustomModalProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { overlayProps, underlayProps } = useOverlay({ ...props, isOpen: true }, ref);

    usePreventScroll();

    const { modalProps } = useModal();

    const { dialogProps } = useDialog(
      {
        "aria-label": props["aria-label"],
        role: props.isDestructive ? "alertdialog" : "dialog",
      },
      ref
    );

    return createPortal(
      <Box className={underlay} {...underlayProps} color={undefined}>
        <ModalContext.Provider value={true}>
          <FocusScope contain restoreFocus autoFocus={props.autoFocus ?? true}>
            <Box
              className={modalRecipe({ elevation: config.elevation })}
              {...overlayProps}
              {...modalProps}
              {...dialogProps}
              color={undefined}
              borderRadius={config.radius}
              style={{ width: config.width[props.size || "medium"] }}
            >
              {props.children}
            </Box>
          </FocusScope>
        </ModalContext.Provider>
      </Box>
    );
  }

  function Modal(props: Props) {
    // Trigger the primary action on 'Enter' if there is one
    useKeyPressEvent(
      (key) => key.code === "Enter",
      () => props.primaryAction?.onPress()
    );

    const { defaultMessages } = useDefaultMessages();

    const kind = props.kind == null && props.isDestructive ? "destructive" : props.kind ?? "normal";

    const icon = match(kind)
      .with("normal", () => null)
      .with("warning", (k) => config.titleIcon[k]({ color: "warning", size: config.titleIconSize }))
      .with("destructive", (k) =>
        config.titleIcon[k]({ color: "negative", size: config.titleIconSize })
      )
      .exhaustive();

    return (
      <CustomModal {...props} aria-label={props.title}>
        <Inset spaceX={config.paddingX} spaceY={config.paddingY}>
          <Columns space={16} alignY="top">
            <Columns space={16} alignY="center">
              {icon && <Column width="content">{icon}</Column>}
              <Title size={config.titleSize}>{props.title}</Title>
            </Columns>
            <Column width="content">
              <IconButton
                icon={config.closeIcon}
                label={props.closeButtonLabel ?? defaultMessages.Modal.closeButtonLabel}
                onPress={props.onClose}
                size={config.closeIconSize}
                tabIndex={-1}
                kind="transparent"
                hierarchy="secondary"
              />
            </Column>
          </Columns>
        </Inset>
        <Box className={modalBody} paddingX={config.paddingX}>
          {props.children}
        </Box>
        <Inset spaceX={config.paddingX} spaceY={config.paddingY}>
          <Actions
            primaryAction={
              props.primaryAction
                ? { ...props.primaryAction, isDestructive: kind === "destructive" }
                : undefined
            }
            secondaryAction={props.secondaryAction}
            size="large"
            loadingMessage={props.loadingMessage}
            error={props.error}
          />
        </Inset>
      </CustomModal>
    );
  }

  return { CustomModal, Modal };
}

export type { Props as ModalProps };
