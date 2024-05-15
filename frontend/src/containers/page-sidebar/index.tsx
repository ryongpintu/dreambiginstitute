import RecentCoursesWidget from "@widgets/recent-courses-widget";
import { ICourse } from "@utils/types";

type TProps = {
    recentCourses: ICourse[];
};

const PageSidebar = ({ recentCourses }: TProps) => {
    return <RecentCoursesWidget recentCourses={recentCourses} />;
};

export default PageSidebar;
