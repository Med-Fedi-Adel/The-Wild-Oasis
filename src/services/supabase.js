import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://lhinmeeiefkswtpwhkuk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxoaW5tZWVpZWZrc3d0cHdoa3VrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMxNzUyNjUsImV4cCI6MjAwODc1MTI2NX0.9ntpzQQoQL8uepg4BaSXreD623GBArlzZ20u9Xvx1zk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
