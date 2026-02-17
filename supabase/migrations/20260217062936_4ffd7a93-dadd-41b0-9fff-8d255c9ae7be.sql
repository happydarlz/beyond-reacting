
-- Drop restrictive SELECT policies and recreate as permissive
DROP POLICY "Authenticated users can view contact submissions" ON public.contact_submissions;
CREATE POLICY "Anyone can view contact submissions" ON public.contact_submissions FOR SELECT USING (true);

DROP POLICY "Authenticated users can view career applications" ON public.career_applications;
CREATE POLICY "Anyone can view career applications" ON public.career_applications FOR SELECT USING (true);

DROP POLICY "Authenticated users can view product interests" ON public.product_interests;
CREATE POLICY "Anyone can view product interests" ON public.product_interests FOR SELECT USING (true);
