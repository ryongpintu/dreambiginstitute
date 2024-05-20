import clsx from "clsx";
import { useForm, SubmitHandler } from "react-hook-form";
import Button from "@ui/button";
import Input from "@ui/form-elements/input";
import { hasKey } from "@utils/methods";
import { client, FACULTY_API_END_POINT } from "services/user";
import Select from "@components/ui/form-elements/select";
import toast from "react-hot-toast";
import { AxiosError } from "axios";

type TProps = {
    className?: string;
};

interface IFormValues {
    name: string;
    email: string;
    phone: string;
    board: string;
    address: string;
    qualification: string;
}

const BoardOptions = [
    { label: "Select 10th Board type", value: "" },
    { label: "JAC", value: "JAC" },
    { label: "CBSE", value: "CBSE" },
];

const InstructorForm = ({ className }: TProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<IFormValues>();

    const onSubmit: SubmitHandler<IFormValues> = async (data) => {
        // eslint-disable-next-line no-console

        try {
            await client.post(FACULTY_API_END_POINT, data);
            toast.success("Thank you! Our Team will reach you ");
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
                Register to become an Instructor
            </h4>
            <form
                className="become-teacher-form"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="tw-mb-3.8">
                    <label htmlFor="name" className="tw-sr-only">
                        Full Name
                    </label>
                    <Input
                        id="name"
                        bg="light"
                        placeholder="Full Name *"
                        feedbackText={errors?.name?.message}
                        state={hasKey(errors, "name") ? "error" : "success"}
                        showState={!!hasKey(errors, "name")}
                        {...register("name", {
                            required: "Name is required",
                        })}
                    />
                </div>

                <div className="tw-mb-3.8">
                    <label htmlFor="phone" className="tw-sr-only">
                        Phone
                    </label>
                    <Input
                        id="phone"
                        bg="light"
                        placeholder="Phone number *"
                        feedbackText={errors?.phone?.message}
                        state={hasKey(errors, "phone") ? "error" : "success"}
                        max={10}
                        showState={!!hasKey(errors, "phone")}
                        {...register("phone", {
                            required: "Phone is required",
                        })}
                    />
                </div>
                <div className="tw-mb-7.5">
                    <label htmlFor="email" className="tw-sr-only">
                        Email *
                    </label>
                    <Input
                        id="email"
                        placeholder="Email *"
                        bg="light"
                        feedbackText={errors?.email?.message}
                        state={hasKey(errors, "email") ? "error" : "success"}
                        showState={!!hasKey(errors, "email")}
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: "invalid email address",
                            },
                        })}
                    />
                </div>
                <div className="tw-mb-3.8">
                    <label htmlFor="address" className="tw-sr-only">
                        Class 10th Board
                    </label>

                    <Select
                        id="board"
                        placeholder="Class 10th Board *"
                        bg="light"
                        options={BoardOptions}
                        feedbackText={errors?.board?.message}
                        state={hasKey(errors, "board") ? "error" : "success"}
                        showState={!!hasKey(errors, "board")}
                        {...register("board", {
                            required: "board is required",
                        })}
                    />
                </div>
                <div className="tw-mb-3.8">
                    <label htmlFor="qualification" className="tw-sr-only">
                        Qualification
                    </label>
                    <Input
                        id="qualification"
                        bg="light"
                        placeholder="Qualification: Graduation , B.Ed,"
                        feedbackText={errors?.qualification?.message}
                        state={
                            hasKey(errors, "qualification")
                                ? "error"
                                : "success"
                        }
                        max={10}
                        showState={!!hasKey(errors, "qualification")}
                        {...register("qualification", {
                            required: "Qualification is required",
                        })}
                    />
                </div>
                <div className="tw-mb-7.5">
                    <label htmlFor="address" className="tw-sr-only">
                        Address
                    </label>
                    <Input
                        id="address"
                        placeholder="Address "
                        bg="light"
                        feedbackText={errors?.address?.message}
                        state={hasKey(errors, "address") ? "error" : "success"}
                        showState={!!hasKey(errors, "address")}
                        {...register("address", {
                            required: "Address is required",
                        })}
                    />
                </div>

                <div className="tw-text-center">
                    <Button type="submit">Submit</Button>
                </div>
            </form>
        </div>
    );
};

export default InstructorForm;
