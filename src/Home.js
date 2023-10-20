import './App.css';
import { Link, Outlet } from "react-router-dom";


export default function Home(){
    return(
        <>
        <nav>
          <ul style={{listStyleType:'none'}}>
            <li>
             <Link to={'cart'}>Product</Link>
            </li>
            <li>
             <Link to={'Contact'}>Contact</Link>
            </li>
            <li>
             <Link to={'About'}>About</Link>
            </li>
            <li>
             <Link to={'Todolist'}>Todolist</Link>
            </li> 
            <li>
             <Link to={'Main'}>Contacts</Link>
            </li> 
          </ul>
        </nav>
        <div>
            <Outlet/>
        </div>
        </>
        
    )
}