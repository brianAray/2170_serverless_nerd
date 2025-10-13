import { useContext } from 'react'
import type { User } from '../../App'
import { UserContext } from './context';

interface ProfileProps {

}

function Profile({}: ProfileProps) {
    const user: User | undefined = useContext(UserContext);
  return (

    <div>{user && user.name}</div>
  )
}

export default Profile