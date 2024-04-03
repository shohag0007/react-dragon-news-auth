import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex bg-rose-500 font-semibold text-white text-2xl">
            <button className="btn btn-secondary">Breaking News</button>
            <Marquee pauseOnHover={true} speed={100}>
                <Link className="mr-12" to="/">...........Shohag........</Link>
                <Link className="mr-12" to="/">..........Breaking News........</Link>
                <Link className="mr-12" to="/">...........Shohag News Gallery........</Link>
  Thanks Shohag..........!!!
</Marquee>
        </div>
    );
};

export default BreakingNews;