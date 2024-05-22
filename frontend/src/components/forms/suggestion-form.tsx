import clsx from "clsx";
import { useForm, SubmitHandler } from "react-hook-form";
import Input from "@ui/form-elements/input";
import Textarea from "@ui/form-elements/textarea";
import Button from "@ui/button";
import { hasKey } from "@utils/methods";
import { SUGGESTION_API_END_POINT, client } from "services/user";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

interface IFormValues {
    name: string;
    phone: string;
    suggestion: string;
}

const SuggestionForm = ({ className }: { className?: string }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<IFormValues>();

    const onSubmit: SubmitHandler<IFormValues> = async (data) => {
        // eslint-disable-next-line no-console

        try {
            await client.post(SUGGESTION_API_END_POINT, data);
            toast.success("Thank you for your valuable suggestion ");
            reset();
        } catch (err: unknown) {
            const knownError = err as AxiosError;
            toast.error(knownError?.response?.data as string);
        }
    };

    return (
        <div
            className={clsx(
                "tw-bg-white tw-rounded tw-py-7.5 tw-px-3.8 sm:tw-pt-14 sm:tw-pb-15 sm:tw-px-[50px] tw-shadow-2md tw-shadow-black/10",
                className
            )}
        >
            <h4 className="tw-text-[28px] tw-mb-5 sm:tw-text-[34px] sm:tw-mb-9 tw-leading-snug tw-text-center">
                Please Share Your valuable suggestion
            </h4>
            <form className="suggestions" onSubmit={handleSubmit(onSubmit)}>
                <div className="tw-grid sm:tw-grid-cols-2 tw-gap-5 tw-mb-5 lg:tw-gap-7.5 lg:tw-mb-7.5">
                    <div>
                        <label htmlFor="name" className="tw-sr-only">
                            Name
                        </label>
                        <Input
                            id="name"
                            placeholder="Your Name *"
                            bg="light"
                            feedbackText={errors?.name?.message}
                            state={hasKey(errors, "name") ? "error" : "success"}
                            showState={!!hasKey(errors, "name")}
                            {...register("name", {
                                required: "Name is required",
                            })}
                        />
                    </div>
                    <div>
                        <label htmlFor="phone" className="tw-sr-only">
                            phone
                        </label>
                        <Input
                            type="phone"
                            id="phone"
                            placeholder="Your phone *"
                            bg="light"
                            feedbackText={errors?.phone?.message}
                            state={
                                hasKey(errors, "phone") ? "error" : "success"
                            }
                            showState={!!hasKey(errors, "phone")}
                            {...register("phone", {
                                required: "Phone is required",
                            })}
                        />
                    </div>
                </div>
                <div className="tw-mb-5 lg:tw-mb-7.5">
                    <label htmlFor="suggestion" className="tw-sr-only">
                        suggestion
                    </label>
                    <Textarea
                        id="suggestion"
                        placeholder="Your Suggestion *"
                        bg="light"
                        feedbackText={errors?.suggestion?.message}
                        state={
                            hasKey(errors, "suggestion") ? "error" : "success"
                        }
                        showState={!!hasKey(errors, "suggestion")}
                        {...register("suggestion", {
                            required: "Suggestion is required",
                        })}
                    />
                </div>

                <div className="tw-mt-5 lgtw-mt-7.5 tw-text-center">
                    <Button type="submit" className="tw-w-[180px]">
                        Submit
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default SuggestionForm;
