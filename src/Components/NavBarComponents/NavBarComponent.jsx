import { Link } from "react-router-dom";
function NavBarComponent({icon, type,LinkTo})
{
    return(
        <>
          <Link  to={LinkTo} className='navBarComponent'>
            <div className='navBarIcon'>{icon}</div>
            <div className='navBarType'>{type}</div>
          </Link>
        </>
    )
}

export default NavBarComponent;