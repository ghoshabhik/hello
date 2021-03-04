import { Link } from 'react-router-dom'

export const UserHeader = ({currentUser}) => {
    return (
        <div className="my-3">
            Welcome <strong className="text-success">{currentUser}</strong>{" "}
            <Link to='/hello'>logoff</Link>
        </div>
    )
}

export default UserHeader