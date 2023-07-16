import { Link } from "react-router-dom";

function FlagCard({ name, flag, population, region, capital }) {
  return (
    <Link to={`/${name}`}>
      <div className="rounded-lg mt-10 hover:scale-105 w-72 transition-all duration-300 dark:drop-shadow-xl">
        <div className="px-8">
          <img
            src={flag}
            alt={name}
            className="rounded-tr-lg rounded-tl-lg w-full h-52 transition-all"
          />
          <div className="px-7 py-8 bg-darkBlue transition-all duration-300 dark:bg-white text-white  rounded-br-lg rounded-bl-lg h-52 dark:text-veryDarkBlue2">
            <div className="font-nunito3 text-xl mb-5">{name}</div>
            <div className="font-nunito2">
              <div>
                Population:
                <span className="text-darkGray font-nunito1">{population}</span>
              </div>
              <div>
                Region:
                <span className="text-darkGray font-nunito1"> {region}</span>
              </div>
              <div>
                Capital:
                <span className="text-darkGray font-nunito1">{capital}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default FlagCard;
