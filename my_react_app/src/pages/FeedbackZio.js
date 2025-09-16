import React, { useState, useMemo } from "react";

// Default export so it renders in the preview
export default function FeedbackApp() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;
  const positivePct = useMemo(
    () => (total ? Math.round((good / total) * 100) : 0),
    [good, total]
  );

  function reset() {
    setGood(0);
    setNeutral(0);
    setBad(0);
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">Customer Feedback</h1>

        {/* Controls */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
          <FeedbackButton label="Good" onClick={() => setGood(g => g + 1)} />
          <FeedbackButton label="Neutral" onClick={() => setNeutral(n => n + 1)} />
          <FeedbackButton label="Bad" onClick={() => setBad(b => b + 1)} />
        </div>

        {/* Stats */}
        <section aria-labelledby="statsTitle" className="space-y-3">
          <h2 id="statsTitle" className="text-lg font-medium">Statistics (this session only)</h2>

          {total === 0 ? (
            <p className="text-gray-600">No feedback yet. Click a button above to start.</p>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <StatCard title="Good" value={good} />
              <StatCard title="Neutral" value={neutral} />
              <StatCard title="Bad" value={bad} />
              <StatCard title="Total" value={total} />
            </div>
          )}

          <div className="mt-2">
            <span className="text-sm text-gray-500">Positive feedback:</span>
            <div className="mt-1 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-2 bg-green-500"
                style={{ width: `${positivePct}%` }}
                aria-label="Positive feedback percentage"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={positivePct}
                role="progressbar"
              />
            </div>
            <p className="mt-1 text-sm text-gray-700">{positivePct}% positive</p>
          </div>
        </section>

        {/* Actions */}
        <div className="mt-6 flex gap-3">
          <button
            type="button"
            onClick={reset}
            className="px-4 py-2 rounded-xl border border-gray-300 hover:bg-gray-100 active:scale-[.99] transition"
          >
            Reset
          </button>
        </div>

        <footer className="mt-6 text-xs text-gray-500">
          Data is kept only in memory; reloading the page clears the counters.
        </footer>
      </div>
    </div>
  );
}

function FeedbackButton({ label, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full px-4 py-3 rounded-2xl font-medium shadow-sm border border-gray-200 hover:shadow active:scale-[.99] transition"
    >
      {label}
    </button>
  );
}

function StatCard({ title, value }) {
  return (
    <div className="rounded-2xl border border-gray-200 p-4">
      <div className="text-sm text-gray-500">{title}</div>
      <div className="text-2xl font-semibold">{value}</div>
    </div>
  );
}
