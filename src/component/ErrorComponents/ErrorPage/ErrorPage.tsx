import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Nav from "../../Nav";

const ErrorPage = () => {
  const error = useRouteError();

  // <>
  //   <h1>Oops...</h1>
  //   <p>
  //     {/* to tell the user this page donesn't exist
  //      if true, user tried to access invalid browser */}
  //     {isRouteErrorResponse(error)
  //       ? "Invalid Page"
  //       : "Sorry, an unexpected error has occurred."}
  //   </p>
  // </>

  if (isRouteErrorResponse(error))
    return (
      <div className="min-h-dvh">
        <Nav />
        <div className="text-center h-full">
          <p className="text-base font-semibold text-indigo-600">404</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
            Page not found
          </h1>
          <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </a>
            <a href="#" className="text-sm font-semibold text-gray-900">
              Contact support <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    );
  return (
    <div>
      <p>Sorry, an unexpected error has occurred..!</p>
    </div>
  );
};

export default ErrorPage;
