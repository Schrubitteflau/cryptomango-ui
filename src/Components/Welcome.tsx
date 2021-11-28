import { Link } from "react-router-dom";

export default function Welcome()
{
    return (
        <>
            <h1>Welcome to cryptomango</h1>
            <Link to="/app">
                Start app
            </Link>
        </>
        
    );
}
