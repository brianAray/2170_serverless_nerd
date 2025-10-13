import { useContext } from 'react'
import type { User } from '../../App'
import { UserContext } from './context'

interface SidebarProps {

}
function Sidebar({}: SidebarProps) {
    const user: User | undefined = useContext(UserContext);
    
  return (
    <div>
        <h4>{user?.name}</h4>
        <p>Subscription Status: {user?.isSubscribed ? "yes": "no"}</p>
    </div>
  )
}

export default Sidebar