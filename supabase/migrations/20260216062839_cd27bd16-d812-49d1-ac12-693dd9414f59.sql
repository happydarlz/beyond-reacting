
-- Create storage bucket for resumes
INSERT INTO storage.buckets (id, name, public) VALUES ('resumes', 'resumes', false);

-- Allow anyone to upload resumes (PDF only)
CREATE POLICY "Anyone can upload resumes"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'resumes');

-- Only authenticated users can view/download resumes
CREATE POLICY "Authenticated users can view resumes"
ON storage.objects FOR SELECT
USING (bucket_id = 'resumes' AND auth.role() = 'authenticated');

-- Only authenticated users can delete resumes
CREATE POLICY "Authenticated users can delete resumes"
ON storage.objects FOR DELETE
USING (bucket_id = 'resumes' AND auth.role() = 'authenticated');
