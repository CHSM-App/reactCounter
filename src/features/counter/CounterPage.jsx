import { useCounter } from "./useCounter";

function CounterPage() {
  const { count, isLoading, message, increaseCount, saveCount } = useCounter();
  const messageStyles =
    message?.type === "success"
      ? "border-emerald-200 bg-emerald-50 text-emerald-700"
      : "border-rose-200 bg-rose-50 text-rose-700";

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4 py-10">
      {message && (
        <div
          role={message.type === "error" ? "alert" : "status"}
          className={`fixed right-4 top-4 z-10 rounded-lg border px-4 py-3 text-sm font-medium shadow-sm ${messageStyles}`}
        >
          {message.text}
        </div>
      )}

      <section className="w-full max-w-md rounded-xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
          Current Count
        </p>

        <h1 className="mt-3 text-6xl font-bold text-slate-950">{count}</h1>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <button
            type="button"
            onClick={increaseCount}
            className="rounded-lg bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Increase
          </button>

          <button
            type="button"
            onClick={saveCount}
            disabled={isLoading}
            className="rounded-lg bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-slate-400"
          >
            {isLoading ? "Saving..." : "Save Count"}
          </button>
        </div>

        {isLoading && (
          <p className="mt-4 text-sm font-medium text-slate-500">
            Saving count to the server...
          </p>
        )}
      </section>
    </main>
  );
}

export default CounterPage;
