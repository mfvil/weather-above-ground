import * as React from 'react';

// export interface WrapperProps{
//     children: React.ReactNode;
// }
 
const Wrapper = ({children}) => {
    <div className='flex items-center w-screen h-screen'>
        {children}
    </div>
}
    

 
export default Wrapper;