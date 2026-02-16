import { useState } from "react";
import { useNavigate } from "react-router-dom";

const DEFAULT_PASSWORD = "Sujatha@1234";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const storedPassword = localStorage.getItem("admin_password") || DEFAULT_PASSWORD;

    if (password === storedPassword) {
      localStorage.setItem("admin_authenticated", "true");
      navigate("/admin");
    } else {
      setError("Invalid password");
    }
    setLoading(false);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-sm">
        <h1 className="text-2xl font-medium tracking-tight text-foreground text-center">
          Admin Panel
        </h1>
        <p className="mt-2 text-center text-sm text-muted-foreground">
          Enter password to access admin dashboard
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div>
            <label className="mb-1.5 block text-sm text-muted-foreground">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(""); }}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              placeholder="••••••••"
              required
            />
            {error && <p className="mt-1.5 text-sm text-destructive">{error}</p>}
          </div>
          <button
            type="submit"
            disabled={loading}
            className="btn-outline-premium w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground disabled:opacity-50"
          >
            {loading ? "Please wait..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
