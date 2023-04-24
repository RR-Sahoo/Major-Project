export const UserIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="blue"
      viewBox="0 0 24 24"
      stroke-width={1.5}
      stroke="blue"
      className="w-8 h-8 bg-sky-200 rounded-2xl"
      {...props}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
      />
    </svg>
  );
};

export const ArrowIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="w-6 h-6"
      {...props}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
};
