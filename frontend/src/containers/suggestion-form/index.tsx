import SuggestionForm from "@components/forms/suggestion-form";

const SuggestionBox = () => {
    return (
        <div className="tw-py-15 md:tw-py-20 lg:tw-py-[100px] tw-bg-[url('/images/bg/become-a-teache-bg.jpg')] tw-bg-cover tw-bg-fixed">
            <div className="tw-container">
                <SuggestionForm className="lg:tw-w-2/3 xl:tw-w-1/2 lg:tw-ml-auto" />
            </div>
        </div>
    );
};

export default SuggestionBox;
