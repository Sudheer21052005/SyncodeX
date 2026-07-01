import FormComponent from "@/components/forms/FormComponent"

function HomePage() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100">
            <div className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-10 sm:px-10">
                <div className="grid gap-12 lg:grid-cols-[1.3fr_0.9fr] lg:items-center">
                    <section className="space-y-8">
                        <div className="inline-flex rounded-full bg-cyan-500/15 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300 ring-1 ring-cyan-500/20">
                            Realtime collaboration for teams
                        </div>
                        <h1 className="max-w-3xl text-5xl font-semibold leading-tight text-white sm:text-6xl">
                            SyncodeX — code together in realtime with zero friction.
                        </h1>
                        <p className="max-w-2xl text-lg leading-8 text-slate-300">
                            Build, edit, draw, and chat in one modern workspace. SyncodeX gives teams a fast and friendly way to collaborate on code from anywhere.
                        </p>
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                            <a
                                href="#join"
                                className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-6 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-400"
                            >
                                Start a room
                            </a>
                            <a
                                href="https://github.com/Sudheer21052005/SyncodeX"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 px-6 py-3 text-base text-slate-200 transition hover:border-slate-500"
                            >
                                View repository
                            </a>
                        </div>
                    </section>
                    <section className="rounded-[32px] border border-slate-800/80 bg-slate-900/95 p-8 shadow-2xl shadow-slate-950/40">
                        <div className="mb-6 flex items-center justify-between gap-4">
                            <div>
                                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">SyncodeX</p>
                                <h2 className="mt-2 text-3xl font-semibold text-white">Join a room or create one instantly</h2>
                            </div>
                        </div>
                        <div id="join" className="rounded-3xl bg-slate-950/80 p-6">
                            <FormComponent />
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default HomePage
