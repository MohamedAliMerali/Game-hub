const ErrorMessage = ({ errorMessage }: { errorMessage: string }) => {
  return (
    <div>
      <p className="font-medium text-4xl text-center text-red-700">
        {errorMessage}
      </p>
    </div>
  );
};

export default ErrorMessage;
