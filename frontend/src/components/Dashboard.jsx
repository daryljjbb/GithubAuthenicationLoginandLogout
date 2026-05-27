export default function Dashboard({ user }) {

  return (
    <div className="bg-white shadow-lg rounded-xl p-6">

      <h1 className="text-3xl font-bold mb-4">
        Dashboard
      </h1>

      <div className="space-y-2">

        <p>
          <strong>Username:</strong> {user?.username}
        </p>

        <p>
          <strong>Email:</strong> {user?.email}
        </p>

        <p>
          <strong>Role:</strong> {user?.role}
        </p>

      </div>
    </div>
  );
}