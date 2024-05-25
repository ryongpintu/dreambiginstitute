import { forwardRef, useState } from "react";
import clsx from "clsx";
import { useForm, SubmitHandler } from "react-hook-form";
import Input from "@ui/form-elements/input";
import Button from "@ui/button";
import { hasKey } from "@utils/methods";
import Select from "@components/ui/form-elements/select";
import toast from "react-hot-toast";

import { client, USER_API_END_POINT } from "services/user";
import { AxiosError } from "axios";

type TProps = {
    className?: string;
};

interface IFormValues {
    name: string;
    email: string;
    phone: string;
    subjectChoice: string;
    message: string;
    board: string;
    presentClass: string;
}

const BoardOptions = [
    { label: "Select Board", value: "" },
    { label: "JAC", value: "JAC" },
    { label: "CBSE", value: "CBSE" },
];
const ClassOptions = [
    { label: "Select  Class", value: "" },
    { value: "ten", label: "Ten(10)" },
    { value: "nine", label: "Nine(9)" },
    { value: "eight", label: "Eight(8)" },
    { value: "eleven", label: "Inter of Arts" },
];

const SubjOptions = [
    { label: "Select Course", value: "" },
    { value: "MS", label: "Math + Science - Fee: ₹350" },
    {
        value: "Computer,Spoken Eng",
        label: "Computer Training+ Spoken English - Fee: ₹500",
    },

    {
        value: "MS,Computer,Spoken Eng",
        label: "Both(Math+Science and Computer T + Spoken Eng) - Fee: 750",
    },
];

const JacSubjOptions = [
    { label: "Select Course", value: "" },
    { value: "MS", label: "Math + Science - Fee: ₹250" },
    {
        value: "Computer,Spoken Eng",
        label: "Computer Training+ Spoken English - Fee: ₹500",
    },

    {
        value: "MS,Computer,Spoken Eng",
        label: "Both(Math+Science and Computer T + Spoken Eng) - Fee: 600",
    },
];
const ArtsSubOptions = [
    { label: "Select Course", value: "" },
    { value: "Arts", label: "Arts - Fee: ₹500" },
    {
        value: "Computer,Spoken Eng",
        label: "Computer Training+ Spoken English - Fee: ₹500",
    },
    {
        value: "DCA",
        label: "DCA  - Fee: ₹2000",
    },

    {
        value: "ADCA",
        label: "ADCA + - Fee: ₹3500",
    },
    {
        value: "ADCA_Arts",
        label: "ADCA+ and Art Course - Fee: ₹4000",
    },
];

const ContactForm = forwardRef<HTMLFormElement, TProps>(
    ({ className }, ref) => {
        const [classSelected, setClassSelected] = useState("");
        const [boardSelected, setBoardSelected] = useState("");
        const {
            register,
            handleSubmit,
            formState: { errors },
            reset,
        } = useForm<IFormValues>();

        const onSubmit: SubmitHandler<IFormValues> = async (data) => {
            // eslint-disable-next-line no-console

            try {
                await client.post(USER_API_END_POINT, data);
                toast.success("Thank you! Our Team will reach you ");
                reset();
            } catch (err: unknown) {
                const knownError = err as AxiosError;
                toast.error(knownError?.response?.data as string);
            }
        };

        const getCourseOptions = () => {
            const JacVsCbse =
                boardSelected === "CBSE" ? SubjOptions : JacSubjOptions;
            const courseOptions =
                classSelected === "eleven" ? ArtsSubOptions : JacVsCbse;

            return courseOptions;
        };

        return (
            <form
                className={clsx(className)}
                ref={ref}
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="tw-grid tw-grid-cols-1 tw-gap-5 tw-mb-5 md:tw-grid-cols-2 md:tw-gap-7.5 md:tw-mb-7.5">
                    <div>
                        <label htmlFor="name" className="tw-sr-only">
                            Full Name
                        </label>
                        <Input
                            id="name"
                            placeholder="Full Name *"
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
                            Phone
                        </label>
                        <Input
                            id="phone"
                            type="tel"
                            bg="light"
                            placeholder="Phone number"
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
                <div className="tw-mb-5 md:tw-mb-7.5">
                    <label htmlFor="board" className="tw-sr-only">
                        Board
                    </label>

                    <Select
                        id="board"
                        placeholder="Board *"
                        bg="light"
                        options={BoardOptions}
                        feedbackText={errors?.board?.message}
                        state={hasKey(errors, "board") ? "error" : "success"}
                        showState={!!hasKey(errors, "board")}
                        {...register("board", {
                            required: "board is required",
                        })}
                        onChange={({ target }) =>
                            setBoardSelected(target.value)
                        }
                    />
                </div>
                <div className="tw-mb-5 md:tw-mb-7.5">
                    <label htmlFor="presentClass" className="tw-sr-only">
                        Present Class
                    </label>

                    <Select
                        id="presentClass"
                        placeholder="Class *"
                        bg="light"
                        options={ClassOptions}
                        feedbackText={errors?.presentClass?.message}
                        state={
                            hasKey(errors, "presentClass") ? "error" : "success"
                        }
                        showState={!!hasKey(errors, "presentClass")}
                        {...register("presentClass", {
                            required: "Class is required",
                        })}
                        onChange={({ target }) =>
                            setClassSelected(target.value)
                        }
                    />
                </div>

                <div className="tw-mb-5 md:tw-mb-7.5">
                    <label htmlFor="subjectChoice" className="tw-sr-only">
                        Subject
                    </label>

                    <Select
                        id="subjectChoice"
                        placeholder="Subject *"
                        options={getCourseOptions()}
                        bg="light"
                        feedbackText={errors?.subjectChoice?.message}
                        state={
                            hasKey(errors, "subjectChoice")
                                ? "error"
                                : "success"
                        }
                        showState={!!hasKey(errors, "subjectChoice")}
                        {...register("subjectChoice", {
                            required: "subject is required",
                        })}
                    />
                </div>
                <Button type="submit" className="tw-w-[180px]">
                    Submit
                </Button>
            </form>
        );
    }
);

export default ContactForm;
