import { messages } from "@/lib/db";
import { deleteMessageAction } from "./actions";

export default function MessagesPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      {/* Header */}
      <div className="mb-10">
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
          Inbox
        </p>

        <h1 className="text-4xl font-bold tracking-tight">
          Received messages
        </h1>

        <p className="mt-2 text-muted-foreground">
          Manage your messages through Userly.
        </p>
      </div>

      {/* Messages */}
      <div className="space-y-5">
        {messages.length === 0 ? (
          <div className="rounded-2xl border border-border bg-card p-10 text-center shadow-card">
            <p className="text-lg font-medium">
              No messages yet.
            </p>

            <p className="mt-2 text-sm text-muted-foreground">
              Messages you receive will appear here.
            </p>
          </div>
        ) : (
          messages.map((msg) => (
            <div
              key={msg.id}
              className="group rounded-2xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:border-primary/40 hover:shadow-soft"
            >
              <div className="flex items-start justify-between gap-6">
                {/* Message content */}
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-card-foreground">
                    {msg.name}
                  </p>

                  <p className="mt-1 text-sm text-muted-foreground">
                    {msg.email}
                  </p>

                  <p className="mt-4 leading-relaxed text-card-foreground">
                    {msg.message}
                  </p>
                </div>

                {/* Delete button */}
                <form action={deleteMessageAction.bind(null, msg.id)}>
                  <button
                    type="submit"
                    className="rounded-lg border border-destructive/30 px-4 py-2 text-sm font-medium text-destructive transition-all hover:bg-destructive hover:text-destructive-foreground hover:shadow-soft"
                  >
                    Delete
                  </button>
                </form>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}