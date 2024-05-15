import clsx from "clsx";
import Anchor from "@ui/anchor";
import WidgetTitle from "./widget-title";

type TProps = {
    className?: string;
    mode?: "light" | "dark";
};

const TwoColumnListWidget = ({ className, mode }: TProps) => {
    return (
        <div className={clsx(className)}>
            <WidgetTitle mode={mode}>Explore</WidgetTitle>
            <ul
                className={clsx(
                    "tw-flex tw-flex-wrap tw-text-md tw-font-medium",
                    mode === "dark" && "tw-text-gray-400"
                )}
            >
                <li className="tw-w-1/2 tw-pr-5 tw-mb-[11px]">
                    <Anchor path="/bes">Courses</Anchor>
                </li>
                <li className="tw-w-1/2 tw-pr-5 tw-mb-[11px]">
                    <Anchor path="/blogs/blog-grid">Blog</Anchor>
                </li>
                <li className="tw-w-1/2 tw-mb-[11px]">
                    <Anchor path="/become-a-teacher">Become a Teacher</Anchor>
                </li>
                <li className="tw-w-1/2 tw-pr-5 tw-mb-[11px]">
                    <Anchor path="/contact-us">Contact us</Anchor>
                </li>
            </ul>
        </div>
    );
};

export default TwoColumnListWidget;
