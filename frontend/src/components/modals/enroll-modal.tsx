import { Modal, ModalHeader, ModalClose, ModalBody } from "@ui/modal";
import ContactForm from "@components/forms/contact-form";
import { scrollUpVariants } from "@utils/variants";
import { motion } from "framer-motion";

const AnimatedContactForm = motion(ContactForm);
type TProps = {
    show: boolean;
    onClose: () => void;
};

const EnrollModal = ({ show, onClose }: TProps) => {
    return (
        <Modal show={show} onClose={onClose}>
            <ModalHeader>
                <h4 className="tw-mb-0">Course Enrolled</h4>
                <ModalClose onClose={onClose}>x</ModalClose>
            </ModalHeader>
            <ModalBody className="tw-p-14 tw-text-center">
                <AnimatedContactForm
                    className="tw-max-w-[770px] tw-mx-auto"
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.4 }}
                    variants={scrollUpVariants}
                />
            </ModalBody>
        </Modal>
    );
};

export default EnrollModal;
