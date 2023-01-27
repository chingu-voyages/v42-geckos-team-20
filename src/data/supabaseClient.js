import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mjueonjsuqddnxvjhama.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1qdWVvbmpzdXFkZG54dmpoYW1hIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ0MjEwMDEsImV4cCI6MTk4OTk5NzAwMX0.-fNLz8OZt-EJ_nj7q0kXA3jtua3cfA5lg0C-jSs8KSw'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)