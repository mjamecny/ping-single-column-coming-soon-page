import { useState, useEffect } from "react"
export default function App() {
  const [email, setEmail] = useState("")
  const [error, setError] = useState(false)
  const [errMsg, setErrMsg] = useState("")

  const regex = new RegExp(/\S+@\S+\.\S+/)
  const isValid = regex.test(email)

  useEffect(() => {
    setError(false)
    if (email !== "") {
      if (!isValid) {
        setError(true)
        setErrMsg("Please provide a valid email")
      } else {
        setError(false)
      }
    }
  }, [email])

  function handleSubmit(e) {
    e.preventDefault()

    if (email === "") {
      setError(true)
      setErrMsg("Whoops! It looks like you forgot to add your email")
      return
    }

    if (!isValid) {
      setError(true)
      setErrMsg("Please provide a valid email")
    } else {
      setError(false)
    }
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="h-screen lg:h-auto max-w-[720px] flex flex-col items-center justify-center px-2.4 gap-4.8">
        <img src="logo.svg" alt="logo" />
        <div className="flex flex-col items-center gap-1.6">
          <h1 className="text-gray text-3 md:text-4.4">
            We are launching{" "}
            <span className="text-very-dark-blue font-bold">soon!</span>
          </h1>
          <p className="text-1.6 md:text-2">Subscribe and get notified</p>
        </div>
        <form
          className="flex flex-col md:flex-row gap-1.2 w-full relative"
          onSubmit={handleSubmit}
        >
          <input
            className={`border-2 ${
              error ? "border-light-red" : "border-pale-blue"
            } ${
              error ? "outline-light-red" : "outline-pale-blue"
            } rounded-full py-1.2 px-3.2 w-full lg:w-[80%]`}
            type="email"
            name="email"
            id="email"
            placeholder="Your email address..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="text-light-red absolute top-[60px] left-[30px]">
            {error && errMsg}
          </span>

          <button className="bg-blue text-[#fff] rounded-full py-1.2 px-3.2 font-semibold w-full md:w-[30%] shadow-md shadow-blue/50 md:hover:opacity-80 transition-opacity duration-300">
            Notify Me
          </button>
        </form>
        <img src="illustration-dashboard.png" alt="illustration" />
        <div className="flex flex-col items-center gap-2.4">
          <div className="flex gap-1.6">
            <a href="#">
              <svg
                className="fill-blue hover:opacity-80 transition-opacity duration-300"
                xmlns="http://www.w3.org/2000/svg"
                height="2rem"
                viewBox="0 0 512 512"
              >
                <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
              </svg>
            </a>
            <a href="#">
              <svg
                className="fill-blue hover:opacity-80 transition-opacity duration-300"
                xmlns="http://www.w3.org/2000/svg"
                height="2rem"
                viewBox="0 0 512 512"
              >
                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
              </svg>
            </a>
            <a href="#">
              <svg
                className="fill-blue hover:opacity-80 transition-opacity duration-300"
                xmlns="http://www.w3.org/2000/svg"
                height="2rem"
                viewBox="0 0 448 512"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </a>
          </div>
          <p className="text-gray">
            &copy; Copyright Ping. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}
