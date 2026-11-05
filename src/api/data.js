import { supabase } from '../Client';

export const dataApi = {
  // Fetch all active services, ordered
  async getServices() {
    const { data, error } = await supabase
      .from('services')
      .select('*')
      .eq('is_active', true)
      .order('display_order', { ascending: true });
    if (error) throw error;
    return data;
  },

  // Fetch gallery images
  async getGallery() {
    const { data, error } = await supabase
      .from('gallery')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) throw error;
    return data;
  },

  // Fetch testimonials
  async getTestimonials() {
    const { data, error } = await supabase
      .from('testimonials')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) throw error;
    return data;
  },

  // Submit contact form
  async sendContact(formData) {
    const { error } = await supabase
      .from('contact_messages')
      .insert([formData]);
    if (error) throw error;
    return true;
  },

  // Upload image to Supabase Storage (for future admin panel use)
  async uploadImage(file, path) {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}.${fileExt}`;
    const filePath = `${path}/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from('salon-images')
      .upload(filePath, file);

    if (uploadError) throw uploadError;

    const { data: { publicUrl } } = supabase.storage
      .from('salon-images')
      .getPublicUrl(filePath);

    return publicUrl;
  }
};