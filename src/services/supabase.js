import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://hbltivphcyncyavtwyvk.supabase.co';
const supabaseKey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhibHRpdnBoY3luY3lhdnR3eXZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY2MTAwNDksImV4cCI6MjA1MjE4NjA0OX0.DwSAoER8fHfD0agv9YGyE9z-kQWne2Dou9cVly1j1oI';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
