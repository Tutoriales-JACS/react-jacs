import {Link} from 'react-router-dom';

function Navigation(){

    return(
        <nav className='navbar navbar-collapse'>
            <ul className='navbar-nav'>
                <li className='nav-item '><Link to='/' > Home</Link></li>
                <li className='nav-item '><Link to='/login' > Login</Link> </li>
                <li className='nav-item '><Link to='/profile' > Profile</Link></li>
                <li className='nav-item '><Link to='/register' > Register</Link> </li>
            </ul>
        </nav>
    )
}

export default Navigation;