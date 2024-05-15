import { useState } from "react";
import { TabContainer, TabNav, TabPane, TabList, TabContent } from "@ui/tab";
import { ICourse, ICurriculum, IInstructor } from "@utils/types";
import Button from "@components/ui/button";
import EnrollModal from "@components/modals/enroll-modal";
import OverviewPanel from "./overview-panel";
import CurriculamPanel from "./curriculam-panel";

type TProps = {
    data: {
        course: ICourse;
        curriculum: ICurriculum[];
        instructor: IInstructor;
    };
};

const CourseDetails = ({ data: { course, curriculum } }: TProps) => {
    const [show, setShow] = useState(false);
    return (
        <section className="course-details">
            <div className="tw-container tw-grid lg:tw-grid-cols-3 tw-gap-12">
                <div className="lg:tw-col-[1/3]">
                    <TabContainer variant="underline">
                        <TabList>
                            <TabNav>Overview</TabNav>
                            <TabNav>Curriculam</TabNav>
                            <TabNav>Instructor</TabNav>
                            <TabNav>Reviews</TabNav>
                        </TabList>
                        <TabContent className="tw-mt-10 lg:tw-mt-[50px]">
                            <TabPane>
                                {course?.description && (
                                    <OverviewPanel
                                        description={course?.description}
                                    />
                                )}
                            </TabPane>
                            <TabPane>
                                {curriculum && (
                                    <CurriculamPanel
                                        curriculum={curriculum}
                                        courseSlug={course.slug}
                                    />
                                )}
                            </TabPane>
                            <TabPane>
                                <h1>We will available soon</h1>
                            </TabPane>
                            <TabPane>
                                <h1>No review yet !</h1>
                            </TabPane>
                        </TabContent>
                    </TabContainer>
                </div>
                <div className="lg:tw-col-[3/-1]">
                    <div className="tw-sticky tw-top-24">
                        <Button
                            fullwidth
                            className="tw-mb-4"
                            onClick={() => setShow(true)}
                        >
                            Enroll Now
                        </Button>
                        <EnrollModal
                            show={show}
                            onClose={() => setShow(false)}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CourseDetails;
