import spinner from "../assets/svg/spinner.svg"

export default function Spinner() {
  return (
    <div className="bg-black bg-opacity-30 flex justify-center items-center z-50 fixed top-0 bottom-0 left-0 right-0">
      <div>
        <img src={ spinner } alt="Loading..."  />
      </div>
    </div>
  );
}
