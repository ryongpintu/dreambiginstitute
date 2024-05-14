import { forwardRef } from "react";
import cn from "clsx";
import Feedback from "./feedback";
import { IInputProps } from "./types";

interface IProps extends IInputProps {
    type?: string;
    bg?: "white" | "light";
}

const Select = forwardRef<HTMLSelectElement, IProps>(
    (
        {
            className,
            bg,
            type,
            disabled,
            state,
            feedbackText,
            id,
            name,
            options,
            onChange,
            onClick,
            onBlur,
            readonly,
            showState,
            showErrorOnly,
            customStyle,
            ...restProps
        },
        ref
    ) => {
        const defaultClass =
            "tw-block tw-w-full tw-h-14 tw-rounded tw-py-[0.188rem] tw-px-5 tw-text-base tw-text-body tw-border tw-border-gray-200 tw-placeholder-body";
        const focusClass =
            customStyle !== "nofocus" &&
            !readonly &&
            "focus:tw-shadow-none focus:tw-outline-0 focus:tw-text-body focus:tw-bg-white focus:tw-border-primary";
        const readOnlyAndDisabledClass =
            (readonly || disabled) && "tw-bg-gray-300 tw-opacity-100";
        const readOnlyFocusClass =
            customStyle !== "nofocus" &&
            readonly &&
            "focus:tw-shadow-none focus:tw-outline-0 focus:tw-text-body";
        const successClass =
            !showErrorOnly && state === "success" && "!tw-border-success";
        const warningClass =
            !showErrorOnly && state === "warning" && "!tw-border-warning";
        const errorClass = state === "error" && "!tw-border-danger";
        const focusBorderClass =
            customStyle !== "nofocus" && !state && "focus:tw-border-primary";
        const noFocusClass = customStyle === "nofocus" && "focus:tw-outline-0";

        return (
            <>
                <div className="mt-1">
                    <select
                        id={id}
                        name={name}
                        onChange={onChange}
                        onClick={onClick}
                        onBlur={onBlur}
                        ref={ref}
                        className={cn(
                            "form-control",
                            defaultClass,
                            focusClass,
                            readOnlyAndDisabledClass,
                            readOnlyFocusClass,
                            successClass,
                            warningClass,
                            errorClass,
                            focusBorderClass,
                            noFocusClass,
                            bg === "white" && "tw-bg-white",
                            bg === "light" && "tw-bg-gray-200",
                            className
                        )}
                        {...restProps}
                    >
                        {options?.map(({ label, value }) => (
                            <option key={value} value={value}>
                                {label}
                            </option>
                        ))}
                    </select>
                </div>
                {feedbackText && showState && (
                    <Feedback state={state} showErrorOnly={showErrorOnly}>
                        {feedbackText}
                    </Feedback>
                )}
            </>
        );
    }
);

Select.displayName = "Select";

Select.defaultProps = {
    type: "text",
    showState: true,
    showErrorOnly: true,
};

export default Select;
