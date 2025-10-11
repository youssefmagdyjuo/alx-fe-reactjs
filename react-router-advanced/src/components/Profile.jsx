import { Link, Routes, Route } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";

export default function Profile() {
    const id = 5;

    return (
        <div>
            <nav>
                <Link to={`details/${id}`}>Profile Details</Link> ||||
                <Link to={`settings/${id}`}>Profile Settings</Link>
            </nav>

            {/* ✅ Nested Routes داخل Profile */}
            <Routes>
                <Route path={`details/:id`} element={<ProfileDetails />} />
                <Route path={`settings/:id`} element={<ProfileSettings />} />
            </Routes>
        </div>
    );
}
