import { Link } from "react-router-dom";

const Home = () => {
    
return (
    <h1>Welcome, this is a simple application for viewing user cards with twets.
        Click <Link to='/tweets'>here</Link> to view application.
    </h1>
)
}

export default Home;