const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div className="container max-w-[800px] py-10 text-center">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary} className="otherButton">
        Go home
      </button>
    </div>
  );
};
export default ErrorFallback;
