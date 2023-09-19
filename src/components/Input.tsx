import { ChangeEventHandler } from "react";

export const Input = ({
  name,
  errorM,
  onChange,
}: {
  name: string;
  errorM: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}) => {
  return (
    <>
      <label htmlFor={name} className="md:max-w-2xl">
        <input
          className="border-2 p-2 outline-none w-96 rounded-md md:shrink-0 inputWidth"
          type={`${
            name === "password" || name === "Confirm Password"
              ? "password"
              : "text"
          }`}
          id={name}
          name={name}
          placeholder={name[0].toUpperCase() + name.slice(1, name.length)}
          required={true}
          aria-describedby={errorM}
          onChange={onChange}
        />
        <br />
        {name === "Calendly Link" && (
          <p className="text-sm">
            if you do not have a calendly account click{" "}
            <a
              href={"https://calendly.com/app/signup?lang=en"}
              target={"_blank"}
              rel="noopener noreferrer"
              className="text-sky-600 font-semibold hover:underline"
            >
              here
            </a>
          </p>
        )}
        {/* <p id={errorM}>{errorM}</p> */}
      </label>
    </>
  );
};
