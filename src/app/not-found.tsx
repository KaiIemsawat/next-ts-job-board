import H1 from "@/components/ui/h1";

const NotFound = () => {
  return (
    <main className="m-auto my-10 max-w-5xl space-y-5 px-3 text-center">
      <H1>
        Not Found <span className="font-thin">| </span>404
      </H1>

      <p>Sorry, the page you are trying to visit does not exist.</p>
    </main>
  );
};
export default NotFound;
