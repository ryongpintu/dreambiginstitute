import clsx from "clsx";
import Social, { SocialLink } from "@components/ui/social";
import WidgetTitle from "./widget-title";

type TProps = {
    className?: string;
    mode?: "light" | "dark";
};

const TextWidget = ({ className, mode }: TProps) => {
    return (
        <div className={clsx(className)}>
            <WidgetTitle mode={mode}>Address</WidgetTitle>
            <div
                className={clsx(
                    "content ",
                    mode === "dark" && "tw-text-gray-400"
                )}
            >
                <p className="tw-mb-[11px]">Saraiya Stand Near Pani Tanki</p>
                <p className="tw-mb-[11px]">
                    +91 9229 854 855 (6am - 7pm , Monday - Sunday){" "}
                </p>
                <p className="tw-mb-[11px]">
                    <a
                        href="#!"
                        className={clsx(
                            "hover:tw-text-primary",
                            mode === "dark" && "tw-text-gray-400"
                        )}
                    >
                        dreambiginstitute.info@gmail.com{" "}
                    </a>
                </p>
            </div>
            <Social
                color={mode === "dark" ? "white" : "light"}
                className="tw-gap-6.1 tw-mt-6.1"
            >
                <SocialLink href="#" label="Facebook lnik">
                    <i className="fab fa-facebook-square" />
                </SocialLink>
                <SocialLink href="#" label="twitter lnik">
                    <i className="fab fa-twitter" />
                </SocialLink>
                <SocialLink href="#" label="instagram lnik">
                    <i className="fab fa-instagram" />
                </SocialLink>
                <SocialLink href="#" label="linkedin lnik">
                    <i className="fab fa-linkedin" />
                </SocialLink>
            </Social>
        </div>
    );
};

export default TextWidget;
