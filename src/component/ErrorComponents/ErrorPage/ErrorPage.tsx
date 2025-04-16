import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";
import Nav from "../../Nav";
import PageContainer from "../../../UI/PageContainer";

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
      <PageContainer>
        <Nav />
        <div className="text-center mt-32">
          <p className="text-2xl font-semibold text-indigo-600">404</p>
          <h1 className="mt-4 text-6xl font-semibold tracking-tight text-balance text-gray-900 sm:text-8xl dark:text-gray-100">
            Page not found
          </h1>
          <p className="mt-8 text-2xl font-medium text-pretty text-gray-500 sm:text-2xl">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-12 flex items-center justify-center gap-x-6">
            <Link
              to={"/"}
              className="rounded-md bg-indigo-600 px-4 py-3 text-xl font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </Link>
            <a
              href="#"
              className="text-xl font-semibold text-gray-900 dark:text-gray-100"
            >
              Contact support <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </PageContainer>
    );

  return (
    <div>
      <p>Sorry, an unexpected error has occurred..!</p>
    </div>
  );
};

export default ErrorPage;
