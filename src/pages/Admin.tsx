import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type Tab = "contact" | "careers" | "product" | "manage-products" | "settings";

const STATUS_OPTIONS = [
  { value: "coming_soon", label: "Coming Soon" },
  { value: "in_development", label: "In Development" },
  { value: "beta", label: "Beta" },
  { value: "live", label: "Live" },
];

const Admin = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [tab, setTab] = useState<Tab>("contact");
  const [contacts, setContacts] = useState<any[]>([]);
  const [careers, setCareers] = useState<any[]>([]);
  const [interests, setInterests] = useState<any[]>([]);
  const [managedProducts, setManagedProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Product form
  const [productDialog, setProductDialog] = useState(false);
  const [editingProduct, setEditingProduct] = useState<any>(null);
  const [productForm, setProductForm] = useState({
    title: "", description: "", status: "coming_soon", sort_order: 0, features: ""
  });
  const [saving, setSaving] = useState(false);

  // Settings state
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [changingPassword, setChangingPassword] = useState(false);

  useEffect(() => {
    const isAuth = localStorage.getItem("admin_authenticated");
    if (isAuth !== "true") { navigate("/admin-login"); return; }
    fetchData();
  }, [navigate]);

  const fetchData = async () => {
    setLoading(true);
    const [c, ca, p, mp] = await Promise.all([
      supabase.from("contact_submissions").select("*").order("created_at", { ascending: false }),
      supabase.from("career_applications").select("*").order("created_at", { ascending: false }),
      supabase.from("product_interests").select("*").order("created_at", { ascending: false }),
      supabase.from("products" as any).select("*").order("sort_order", { ascending: true }),
    ]);
    setContacts(c.data || []);
    setCareers(ca.data || []);
    setInterests(p.data || []);
    setManagedProducts(mp.data || []);
    setLoading(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("admin_authenticated");
    navigate("/admin-login");
  };

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();
    const storedPassword = localStorage.getItem("admin_password") || "Sujatha@1234";
    if (currentPassword !== storedPassword) {
      toast({ title: "Current password is incorrect", variant: "destructive" }); return;
    }
    if (newPassword.length < 6) {
      toast({ title: "New password must be at least 6 characters", variant: "destructive" }); return;
    }
    setChangingPassword(true);
    localStorage.setItem("admin_password", newPassword);
    setChangingPassword(false);
    toast({ title: "Password updated successfully!" });
    setCurrentPassword(""); setNewPassword("");
  };

  const openAddProduct = () => {
    setEditingProduct(null);
    setProductForm({ title: "", description: "", status: "coming_soon", sort_order: managedProducts.length, features: "" });
    setProductDialog(true);
  };

  const openEditProduct = (p: any) => {
    setEditingProduct(p);
    const featuresStr = Array.isArray(p.features)
      ? p.features.map((f: any) => `${f.title}: ${f.desc}`).join("\n")
      : "";
    setProductForm({
      title: p.title, description: p.description, status: p.status,
      sort_order: p.sort_order, features: featuresStr,
    });
    setProductDialog(true);
  };

  const handleSaveProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!productForm.title.trim() || !productForm.description.trim()) {
      toast({ title: "Title and description are required", variant: "destructive" }); return;
    }
    setSaving(true);
    const features = productForm.features.trim()
      ? productForm.features.split("\n").filter(Boolean).map((line) => {
          const [title, ...rest] = line.split(":");
          return { title: title.trim(), desc: rest.join(":").trim() };
        })
      : [];
    const payload = {
      title: productForm.title.trim(),
      description: productForm.description.trim(),
      status: productForm.status,
      sort_order: productForm.sort_order,
      features,
    };

    if (editingProduct) {
      await (supabase.from("products" as any) as any).update(payload).eq("id", editingProduct.id);
    } else {
      await supabase.from("products" as any).insert(payload as any);
    }
    setSaving(false);
    setProductDialog(false);
    toast({ title: editingProduct ? "Product updated!" : "Product added!" });
    fetchData();
  };

  const handleDeleteProduct = async (id: string) => {
    if (!confirm("Delete this product?")) return;
    await (supabase.from("products" as any) as any).delete().eq("id", id);
    toast({ title: "Product deleted" });
    fetchData();
  };

  const formatDate = (d: string) => new Date(d).toLocaleDateString("en-IN", {
    day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit",
  });

  const inputClass =
    "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

  const tabs: { key: Tab; label: string; count?: number }[] = [
    { key: "contact", label: "Contact Messages", count: contacts.length },
    { key: "careers", label: "Career Applications", count: careers.length },
    { key: "product", label: "Product Interests", count: interests.length },
    { key: "manage-products", label: "Manage Products", count: managedProducts.length },
    { key: "settings", label: "Settings" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="container-narrow flex h-16 items-center justify-between">
          <h1 className="text-lg font-medium text-foreground">Finitix Admin</h1>
          <button onClick={handleLogout} className="text-sm text-muted-foreground hover:text-foreground transition-colors">Logout</button>
        </div>
      </header>

      <div className="container-narrow py-8">
        <div className="flex gap-1 overflow-x-auto border-b border-border mb-8">
          {tabs.map((t) => (
            <button key={t.key} onClick={() => setTab(t.key)}
              className={`whitespace-nowrap px-4 py-3 text-sm font-medium transition-colors border-b-2 ${
                tab === t.key ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"
              }`}>
              {t.label} {t.count !== undefined && <span className="ml-1 text-xs opacity-60">({t.count})</span>}
            </button>
          ))}
        </div>

        {loading ? <p className="text-muted-foreground">Loading...</p> : (
          <>
            {/* Contact Messages */}
            {tab === "contact" && (
              <div className="space-y-4">
                {contacts.length === 0 ? <p className="text-muted-foreground">No contact messages yet.</p> : contacts.map((c) => (
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
                {careers.length === 0 ? <p className="text-muted-foreground">No career applications yet.</p> : careers.map((c) => (
                  <div key={c.id} className="rounded-xl border border-border bg-card p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-medium text-foreground">{c.name}</p>
                        <p className="text-sm text-muted-foreground">{c.email} {c.phone && `• ${c.phone}`}{c.position && ` • ${c.position}`}{c.experience && ` • ${c.experience}`}</p>
                      </div>
                      <span className="text-xs text-muted-foreground whitespace-nowrap">{formatDate(c.created_at)}</span>
                    </div>
                    {c.cover_letter && <p className="mt-3 text-sm text-foreground/80 whitespace-pre-wrap">{c.cover_letter}</p>}
                    {c.resume_url && (
                      <a href={supabase.storage.from("resumes").getPublicUrl(c.resume_url).data.publicUrl} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-sm text-primary hover:underline">📄 View Resume</a>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Product Interests */}
            {tab === "product" && (
              <div className="space-y-4">
                {interests.length === 0 ? <p className="text-muted-foreground">No product interests yet.</p> : interests.map((p) => (
                  <div key={p.id} className="rounded-xl border border-border bg-card p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-medium text-foreground">{p.name}</p>
                        <p className="text-sm text-muted-foreground">{p.email} {p.phone && `• ${p.phone}`} {p.company && `• ${p.company}`}</p>
                      </div>
                      <span className="text-xs text-muted-foreground whitespace-nowrap">{formatDate(p.created_at)}</span>
                    </div>
                    {p.message && <p className="mt-3 text-sm text-foreground/80 whitespace-pre-wrap">{p.message}</p>}
                  </div>
                ))}
              </div>
            )}

            {/* Manage Products */}
            {tab === "manage-products" && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-medium text-foreground">Products</h2>
                  <button onClick={openAddProduct} className="btn-outline-premium border-primary text-primary hover:bg-primary hover:text-primary-foreground text-xs">
                    + Add Product
                  </button>
                </div>
                <div className="space-y-4">
                  {managedProducts.length === 0 ? <p className="text-muted-foreground">No products yet.</p> : managedProducts.map((p) => (
                    <div key={p.id} className="rounded-xl border border-border bg-card p-5">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-3">
                            <p className="font-medium text-foreground">{p.title}</p>
                            <span className="rounded-full border border-border px-2 py-0.5 text-[10px] text-muted-foreground">
                              {STATUS_OPTIONS.find((s) => s.value === p.status)?.label || p.status}
                            </span>
                          </div>
                          <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{p.description}</p>
                        </div>
                        <div className="flex gap-2 shrink-0">
                          <button onClick={() => openEditProduct(p)} className="text-xs text-primary hover:underline">Edit</button>
                          <button onClick={() => handleDeleteProduct(p.id)} className="text-xs text-destructive hover:underline">Delete</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Settings */}
            {tab === "settings" && (
              <div className="max-w-sm">
                <h2 className="text-xl font-medium text-foreground">Change Password</h2>
                <form onSubmit={handleChangePassword} className="mt-6 space-y-4">
                  <div>
                    <label className="mb-1.5 block text-sm text-muted-foreground">Current Password</label>
                    <input type="password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} className={inputClass} placeholder="Enter current password" required />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm text-muted-foreground">New Password</label>
                    <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} className={inputClass} placeholder="Enter new password" required minLength={6} />
                  </div>
                  <button type="submit" disabled={changingPassword} className="btn-outline-premium border-primary text-primary hover:bg-primary hover:text-primary-foreground disabled:opacity-50">
                    {changingPassword ? "Updating..." : "Update Password"}
                  </button>
                </form>
              </div>
            )}
          </>
        )}
      </div>

      {/* Product Add/Edit Dialog */}
      <Dialog open={productDialog} onOpenChange={setProductDialog}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>{editingProduct ? "Edit Product" : "Add Product"}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSaveProduct} className="space-y-4 mt-2">
            <div>
              <label className="mb-1 block text-sm text-muted-foreground">Title *</label>
              <input type="text" value={productForm.title} onChange={(e) => setProductForm({ ...productForm, title: e.target.value })} className={inputClass} placeholder="Product name" required maxLength={200} />
            </div>
            <div>
              <label className="mb-1 block text-sm text-muted-foreground">Description *</label>
              <textarea value={productForm.description} onChange={(e) => setProductForm({ ...productForm, description: e.target.value })} className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" placeholder="Short product description" required maxLength={1000} />
            </div>
            <div>
              <label className="mb-1 block text-sm text-muted-foreground">Status</label>
              <select value={productForm.status} onChange={(e) => setProductForm({ ...productForm, status: e.target.value })} className={inputClass}>
                {STATUS_OPTIONS.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}
              </select>
            </div>
            <div>
              <label className="mb-1 block text-sm text-muted-foreground">Sort Order</label>
              <input type="number" value={productForm.sort_order} onChange={(e) => setProductForm({ ...productForm, sort_order: parseInt(e.target.value) || 0 })} className={inputClass} />
            </div>
            <div>
              <label className="mb-1 block text-sm text-muted-foreground">Features (one per line: Title: Description)</label>
              <textarea value={productForm.features} onChange={(e) => setProductForm({ ...productForm, features: e.target.value })} className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" placeholder={"One-Click Deploy: Upload and deploy instantly\nAuto Scaling: Scales on demand"} />
            </div>
            <button type="submit" disabled={saving} className="btn-outline-premium w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground disabled:opacity-50">
              {saving ? "Saving..." : editingProduct ? "Update Product" : "Add Product"}
            </button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Admin;
