export default function LoginSingup() {
  return (
    <form action="/" className="justify-self-center self-center w-80">
      <h2 className="mb-8 uppercase text-center font-medium tracking-widest">
        create your account here
      </h2>

      <input
        type="text"
        placeholder="Company Name"
        className="login-singup-input"
      />
      <input
        type="text"
        placeholder="Email Address"
        className="login-singup-input"
      />
      <input
        type="text"
        placeholder="Password"
        className="login-singup-input"
      />
      <input type="text" placeholder="Country" className="login-singup-input" />
      <input
        type="text"
        placeholder="Phone Number"
        className="login-singup-input"
      />
      <div className="mb-3">
        <input type="checkbox" id="agree" className="mr-3" />
        <label htmlFor="agree" className="text-xs font-light text-text">
          I agree to the &nbsp;
          <a href="#" className="text-accent underline">
            Terms of Service
          </a>
          &nbsp; and &nbsp;
          <a href="#" className="text-accent underline">
            Privacy Policy
          </a>
          .
        </label>
      </div>
      <button className="py-4 w-full bg-red uppercase text-white font-semibold">
        create your free account
      </button>
    </form>
  );
}
