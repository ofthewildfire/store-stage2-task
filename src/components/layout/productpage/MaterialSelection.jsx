const MaterialSelection = () => {
  return (
    <div className="w-[20rem] max-sm:hidden max-md:hidden">
      <h3 className="flex items-center gap-2 text-white font-bold text-[1.5rem] bg-[#3A83A1] p-2">
        Material{" "}
      </h3>
      <ul className="bg-white grid gap-5 p-2 grid-cols-2 grid-flow-dense">
        <li className="border text-center w-fit p-2 bg-[#3A83A1] flex items-center gap-2">
          Ceramic{" "}
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15 5L5 15M5 5L15 15"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </li>
        <li className="border text-center w-fit p-2 flex items-center gap-2 text-[#B5B5B5] text-[.875rem]">
          Steel{" "}
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15 5L5 15M5 5L15 15"
              stroke="#B5B5B5"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </li>
        <li className="border text-center w-fit p-2 flex items-center gap-2 text-[#B5B5B5] text-[.875rem]">
          Aluminium{" "}
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15 5L5 15M5 5L15 15"
              stroke="#B5B5B5"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </li>
        <li className="border text-center w-fit p-2 flex items-center gap-2 text-[#B5B5B5] text-[.875rem]">
          Wood{" "}
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15 5L5 15M5 5L15 15"
              stroke="#B5B5B5"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </li>
        <li className="border text-center w-fit p-2 flex items-center gap-2 text-[#B5B5B5] text-[.875rem]">
          Glass{" "}
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15 5L5 15M5 5L15 15"
              stroke="#B5B5B5"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </li>
        <li className="border text-center w-fit p-2 flex items-center gap-2 text-[#B5B5B5] text-[.875rem]">
          Plastic{" "}
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15 5L5 15M5 5L15 15"
              stroke="#B5B5B5"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </li>
      </ul>
    </div>
  );
};

export default MaterialSelection;
