import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      {error?.status === 404 && (
        <>
          <h1>Oops!</h1>
          <p>The path is unknown. Please try another one!</p>
          <p>
            <i>{`${error.status} ${error.statusText || error.message}`}</i>
          </p>
        </>
      )}
    </div>
  );
}
