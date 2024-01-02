import { useNavigate } from 'react-router-dom';
import './Home.css'

const Home = () => {
    const navigate =useNavigate();
    return (
        <div className="home">
            <div className="home-body">
                <h1>User Management System</h1>
                <button className='ui-btn' onClick={()=> navigate('/users')}>Users Information</button>
                
            
            </div>
        </div>
    )
}

export default Home
