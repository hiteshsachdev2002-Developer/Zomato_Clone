import react from 'react';
import Button from '../ButtonComponents/Button';
import { MdDarkMode } from "react-icons/md";

function WebSettings()
{
    return(
        <>
           <div className='webSettings'>
           <Button type={"Dark"} icon={<MdDarkMode />} />
           </div>
        </>
    )
}


export default WebSettings;