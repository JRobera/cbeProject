export default function WrapperSpinner({ className }) {
  return (
    <section className=" h-dvh flex items-center justify-center bg-light-gray">
      <div
        className={
          " w-10 h-10 rounded-full border-2 border-secondary !border-x-transparent animate-spin " +
          className
        }
      ></div>
    </section>
  );
}