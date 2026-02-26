
CREATE TABLE public.products (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  features JSONB DEFAULT '[]'::jsonb,
  status TEXT NOT NULL DEFAULT 'coming_soon',
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;

-- Anyone can view products (public page)
CREATE POLICY "Anyone can view products" ON public.products FOR SELECT USING (true);

-- Anyone can insert (admin uses anon key)
CREATE POLICY "Anyone can insert products" ON public.products FOR INSERT WITH CHECK (true);

-- Anyone can update (admin uses anon key)
CREATE POLICY "Anyone can update products" ON public.products FOR UPDATE USING (true);

-- Anyone can delete (admin uses anon key)
CREATE POLICY "Anyone can delete products" ON public.products FOR DELETE USING (true);

-- Seed Cloudsnap Studio
INSERT INTO public.products (title, description, features, status, sort_order) VALUES (
  'Cloudsnap Studio',
  'An AI-powered cloud deployment platform that eliminates infrastructure complexity. Upload your project, connect your cloud, and deploy — with one click. No DevOps expertise required.',
  '[{"title":"One-Click Deploy","desc":"Upload your project or import from GitHub and deploy instantly."},{"title":"Auto Stack Detection","desc":"Automatically detects your tech stack and chooses the optimal strategy."},{"title":"Multi-Cloud Support","desc":"Deploy to AWS, GCP, or Azure using secure OAuth."},{"title":"Real-Time Observability","desc":"Built-in monitoring, live logs, and intelligent alerting."},{"title":"Auto-Scaling","desc":"Infrastructure that scales on demand and self-heals."},{"title":"AI Model Deployment","desc":"Deploy trained AI/ML models with zero infrastructure knowledge."}]',
  'coming_soon',
  0
);
