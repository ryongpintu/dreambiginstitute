import Link from "next/link";
import clsx from "clsx";

type TProps = {
    variant?: "dark" | "light";
    className?: string;
};

const Logo = ({ variant, className }: TProps) => {
    return (
        <Link href="/" className={clsx("tw-inline-block", className)}>
            {variant === "dark" && (
                <img
                    src="/images/logo/logo.jpg"
                    alt="Logo"
                    width={158}
                    height={26}
                />
            )}
            {variant === "light" && (
                <img
                    src="/images/logo/logo.jpg"
                    alt="Logo"
                    width={158}
                    height={26}
                />
            )}
        </Link>
    );
};

export default Logo;
