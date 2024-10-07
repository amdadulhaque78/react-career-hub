import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h2>oops!</h2>
            <Link to="/"><button>Go Back</button></Link>
        </div>
    );
};

export default ErrorPage;