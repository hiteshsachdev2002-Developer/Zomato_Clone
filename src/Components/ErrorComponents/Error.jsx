import { useRouteError } from "react-router";

function Error()
{
  const error = useRouteError();
  console.error(error);
  return ( 
    <div className="error-page">
      <h1>{error.status}</h1>
      <p>{error.statusText}</p>
    </div>
   )

}

export default Error;
