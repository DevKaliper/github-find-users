/* eslint-disable react/no-unescaped-entities */



const FindUser = ({user, setUser, handleSubmit}) => {// eslint-disable-line no-unused-vars
  const handleChange = (e, setSomething) => {
    setSomething(e.target.value)
    
  }
  return (
    <div className="mockup-code font-bold text-white glass relative my-14 ml-14 w-1/4 shadow-2xl overflow-visible bg-[#655E4A]  ">
      <pre
        data-prefix="$"
        className="mb-5">
        <code>Look for any Github's user</code>
      </pre>
      <pre
        data-prefix=">"
        className="text-white">
        <input
          type="text"
          placeholder="Type here"
          value={user}
          onChange={(e) => handleChange(e, setUser)}
          className="input input-bordered w-auto 2xl:max-w-xs bg-transparent"
        />
      </pre>
      <button onClick={handleSubmit} className="btn w-fit h-fit glass  absolute -right-4 shadow-xl bg-white hover:text-white text-black">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-5 w-5 2xl:w-6 2xl:h-6 ">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </button>
    </div>
  );
};

export default FindUser;
