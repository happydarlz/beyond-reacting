
-- Contact form submissions
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Anyone can submit contact form
CREATE POLICY "Anyone can insert contact submissions"
ON public.contact_submissions FOR INSERT
WITH CHECK (true);

-- Only authenticated (admin) can view
CREATE POLICY "Authenticated users can view contact submissions"
ON public.contact_submissions FOR SELECT
TO authenticated
USING (true);

-- Career applications
CREATE TABLE public.career_applications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  position TEXT,
  experience TEXT,
  cover_letter TEXT,
  resume_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.career_applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert career applications"
ON public.career_applications FOR INSERT
WITH CHECK (true);

CREATE POLICY "Authenticated users can view career applications"
ON public.career_applications FOR SELECT
TO authenticated
USING (true);

-- Product interest form submissions
CREATE TABLE public.product_interests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.product_interests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert product interests"
ON public.product_interests FOR INSERT
WITH CHECK (true);

CREATE POLICY "Authenticated users can view product interests"
ON public.product_interests FOR SELECT
TO authenticated
USING (true);

-- Only authenticated can delete
CREATE POLICY "Authenticated users can delete contact submissions"
ON public.contact_submissions FOR DELETE
TO authenticated
USING (true);

CREATE POLICY "Authenticated users can delete career applications"
ON public.career_applications FOR DELETE
TO authenticated
USING (true);

CREATE POLICY "Authenticated users can delete product interests"
ON public.product_interests FOR DELETE
TO authenticated
USING (true);
