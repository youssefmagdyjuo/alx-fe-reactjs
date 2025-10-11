import { Link ,Outlet} from 'react-router-dom'
export default function Profile() {
    const id = 5;
    return (
        <div>
        <nav>
            <Link to={`ProfileDetails/${id}`}>
            ProfileDetails
            </Link>|||||
            <Link to={`ProfileSettings/${id}`}>
            ProfileSettings
            </Link>
        </nav>
        <Outlet/>
        </div>
    )
}
