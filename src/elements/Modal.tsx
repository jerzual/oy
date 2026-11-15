import { useEffect, useId, useRef, type FC, type MouseEvent, type ReactNode } from "react";
import { cx } from "../../styled-system/css";
import { modal, type ModalVariantProps } from "../../styled-system/recipes";

export type ModalProps = ModalVariantProps & {
	open: boolean;
	/** called on Escape, backdrop click, or the close button */
	onClose: () => void;
	title: ReactNode;
	footer?: ReactNode;
	closeLabel?: string;
	/** close when clicking the dithered backdrop (default: true) */
	closeOnBackdrop?: boolean;
	className?: string;
	children?: ReactNode;
};

/** Modal built on the native `<dialog>`: focus trap, Escape and top layer come for free. */
export const Modal: FC<ModalProps> = ({
	open,
	onClose,
	title,
	footer,
	closeLabel = "Close",
	closeOnBackdrop = true,
	size,
	className,
	children,
}) => {
	const ref = useRef<HTMLDialogElement>(null);
	const titleId = useId();
	const classes = modal({ size });

	useEffect(() => {
		const dialog = ref.current;
		if (!dialog) return;
		if (open && !dialog.open) {
			// jsdom and very old browsers lack showModal
			if (typeof dialog.showModal === "function") dialog.showModal();
			else dialog.setAttribute("open", "");
		} else if (!open && dialog.open) {
			if (typeof dialog.close === "function") dialog.close();
			else dialog.removeAttribute("open");
		}
	}, [open]);

	const handleClick = (event: MouseEvent<HTMLDialogElement>) => {
		// the content fills the dialog box, so a click on the dialog itself is on the backdrop
		if (closeOnBackdrop && event.target === event.currentTarget) onClose();
	};

	return (
		// Backdrop click is a mouse affordance only, keyboard users close with Escape.
		// oxlint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
		<dialog
			ref={ref}
			aria-labelledby={titleId}
			className={cx(classes.root, className)}
			onCancel={(event) => {
				// let React state drive closing
				event.preventDefault();
				onClose();
			}}
			onClick={handleClick}
		>
			<div className={classes.content}>
				<header className={classes.header}>
					<h2 id={titleId} className={classes.title}>
						{title}
					</h2>
					<button type="button" className={classes.close} aria-label={closeLabel} onClick={onClose}>
						X
					</button>
				</header>
				<div className={classes.body}>{children}</div>
				{footer ? <footer className={classes.footer}>{footer}</footer> : null}
			</div>
		</dialog>
	);
};
