import { createContext, useContext, type FC, type HTMLAttributes } from "react";
import { cx } from "../../styled-system/css";
import { card, type CardVariantProps } from "../../styled-system/recipes";

type CardClasses = ReturnType<typeof card>;
const CardContext = createContext<CardClasses>(card());

export type CardProps = HTMLAttributes<HTMLElement> & CardVariantProps;

export const Card: FC<CardProps> = ({ variant, className, ...props }) => {
	const classes = card({ variant });
	return (
		<CardContext.Provider value={classes}>
			<section className={cx(classes.root, className)} {...props} />
		</CardContext.Provider>
	);
};

export const CardHeader: FC<HTMLAttributes<HTMLElement>> = ({ className, ...props }) => (
	<header className={cx(useContext(CardContext).header, className)} {...props} />
);

export const CardTitle: FC<HTMLAttributes<HTMLHeadingElement>> = ({
	className,
	children,
	...props
}) => (
	<h2 className={cx(useContext(CardContext).title, className)} {...props}>
		{children}
	</h2>
);

export const CardBody: FC<HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => (
	<div className={cx(useContext(CardContext).body, className)} {...props} />
);

export const CardFooter: FC<HTMLAttributes<HTMLElement>> = ({ className, ...props }) => (
	<footer className={cx(useContext(CardContext).footer, className)} {...props} />
);
