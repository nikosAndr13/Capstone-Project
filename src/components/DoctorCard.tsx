export const Card = ({
  username,
  email,
  calendly,
  specialization,
}: {
  username: string;
  email: string;
  calendly: string;
  specialization: string;
}) => {
  return (
    <>
      <div className="flex flex-col border-2  gap-4 w-[350px]  justify-evenly p-4 rounded-md hover:shadow-2xl">
        <h3 className="text-3xl underline">{username}</h3>
        <h3 className="font-semibold">{email}</h3>
        <p className="">{specialization}</p>
        {calendly === undefined ? (
          <a
            href={calendly}
            target={"_blank"}
            className={`cursor-pointer font-semibold border-2 p-2 rounded-md relative bg-sky-600 border-sky-600 text-white cursor-pointer hover:border-sky-500 hover:bg-sky-500 transition duration-170 ease-in-out hover:ease-in-out`}
          >
            Non working Link
          </a>
        ) : (
          <a
            href={calendly}
            target={"_blank"}
            className={`cursor-pointer font-semibold border-2 p-2 rounded-md relative bg-sky-600 border-sky-600 text-white cursor-pointer hover:border-sky-500 hover:bg-sky-500 transition duration-170 ease-in-out hover:ease-in-out`}
          >
            Close an appointment
          </a>
        )}
      </div>
    </>
  );
};
