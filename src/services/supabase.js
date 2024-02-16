import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://eikzgovtnjzwrjzuvith.supabase.co';
const supabaseKey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVpa3pnb3Z0bmp6d3JqenV2aXRoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDcxNDg2NzcsImV4cCI6MjAyMjcyNDY3N30.XF3Qpt1PaZBk5A2irqtXI2PmxJNG6-WGqb39VxvnkxA';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
