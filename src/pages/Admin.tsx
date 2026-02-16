import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

type Tab = "contact" | "careers" | "product" | "settings";

const Admin = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [tab, setTab] = useState<Tab>("contact");
  const [contacts, setContacts] = useState<any[]>([]);
  const [careers, setCareers] = useState<any[]>([]);
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);

  // Settings state
  const [newPassword, setNewPassword] = useState("");
  const [changingPassword, setChangingPassword] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate("/admin-login");
        return;
      }
      setUser(session.user);
      fetchData();
    };

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) navigate("/admin-login");
      else setUser(session.user);
    });

    checkAuth();
    return () => subscription.unsubscribe();
  }, [navigate]);

  const fetchData = async () => {
    setLoading(true);
    const [c, ca, p] = await Promise.all([
      supabase.from("contact_submissions").select("*").order("created_at", { ascending: false }),
      supabase.from("career_applications").select("*").order("created_at", { ascending: false }),
      supabase.from("product_interests").select("*").order("created_at", { ascending: false }),
    ]);
    setContacts(c.data || []);
    setCareers(ca.data || []);
    setProducts(p.data || []);
    setLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin-login");
  };

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword.length < 6) {
      toast({ title: "Password must be at least 6 characters", variant: "destructive" });
      return;
    }
    setChangingPassword(true);
    const { error } = await supabase.auth.updateUser({ password: newPassword });
    setChangingPassword(false);
    if (error) {
      toast({ title: "Failed to change password", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Password updated successfully!" });
      setNewPassword("");
    }
  };

  const formatDate = (d: string) => new Date(d).toLocaleDateString("en-IN", {
    day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit",
  });

  const tabs: { key: Tab; label: string; count: number }[] = [
    { key: "contact", label: "Contact Messages", count: contacts.length },
    { key: "careers", label: "Career Applications", count: careers.length },
    { key: "product", label: "Product Interests", count: products.length },
    { key: "settings", label: "Settings", count: 0 },
  ];

  if (!user) return null;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container-narrow flex h-16 items-center justify-between">
          <h1 className="text-lg font-medium text-foreground">Finitix Admin</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">{user.email}</span>
            <button onClick={handleLogout} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="container-narrow py-8">
        {/* Tabs */}
        <div className="flex gap-1 overflow-x-auto border-b border-border mb-8">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`whitespace-nowrap px-4 py-3 text-sm font-medium transition-colors border-b-2 ${
                tab === t.key
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {t.label} {t.key !== "settings" && <span className="ml-1 text-xs opacity-60">({t.count})</span>}
            </button>
          ))}
        </div>

        {loading ? (
          <p className="text-muted-foreground">Loading...</p>
        ) : (
          <>
            {/* Contact Messages */}
            {tab === "contact" && (
              <div className="space-y-4">
                {contacts.length === 0 ? (
                  <p className="text-muted-foreground">No contact messages yet.</p>
                ) : contacts.map((c) => (
                  <div key={c.id} className="rounded-xl border border-border bg-card p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-medium text-foreground">{c.name}</p>
                        <p className="text-sm text-muted-foreground">{c.email} {c.phone && `• ${c.phone}`}</p>
                      </div>
                      <span className="text-xs text-muted-foreground whitespace-nowrap">{formatDate(c.created_at)}</span>
                    </div>
                    <p className="mt-3 text-sm text-foreground/80 whitespace-pre-wrap">{c.message}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Career Applications */}
            {tab === "careers" && (
              <div className="space-y-4">
                {careers.length === 0 ? (
                  <p className="text-muted-foreground">No career applications yet.</p>
                ) : careers.map((c) => (
                  <div key={c.id} className="rounded-xl border border-border bg-card p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-medium text-foreground">{c.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {c.email} {c.phone && `• ${c.phone}`}
                          {c.position && ` • ${c.position}`}
                          {c.experience && ` • ${c.experience}`}
                        </p>
                      </div>
                      <span className="text-xs text-muted-foreground whitespace-nowrap">{formatDate(c.created_at)}</span>
                    </div>
                    {c.cover_letter && (
                      <p className="mt-3 text-sm text-foreground/80 whitespace-pre-wrap">{c.cover_letter}</p>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Product Interests */}
            {tab === "product" && (
              <div className="space-y-4">
                {products.length === 0 ? (
                  <p className="text-muted-foreground">No product interests yet.</p>
                ) : products.map((p) => (
                  <div key={p.id} className="rounded-xl border border-border bg-card p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-medium text-foreground">{p.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {p.email} {p.phone && `• ${p.phone}`} {p.company && `• ${p.company}`}
                        </p>
                      </div>
                      <span className="text-xs text-muted-foreground whitespace-nowrap">{formatDate(p.created_at)}</span>
                    </div>
                    {p.message && (
                      <p className="mt-3 text-sm text-foreground/80 whitespace-pre-wrap">{p.message}</p>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Settings */}
            {tab === "settings" && (
              <div className="max-w-sm">
                <h2 className="text-xl font-medium text-foreground">Change Password</h2>
                <form onSubmit={handleChangePassword} className="mt-6 space-y-4">
                  <div>
                    <label className="mb-1.5 block text-sm text-muted-foreground">New Password</label>
                    <input
                      type="password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      placeholder="Enter new password"
                      required
                      minLength={6}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={changingPassword}
                    className="btn-outline-premium border-primary text-primary hover:bg-primary hover:text-primary-foreground disabled:opacity-50"
                  >
                    {changingPassword ? "Updating..." : "Update Password"}
                  </button>
                </form>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Admin;
