import UserList from "@/app/features/user-list";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 p-8">
      <div className="mx-auto max-w-3xl">
        <UserList />
      </div>
    </main>
  );
}
