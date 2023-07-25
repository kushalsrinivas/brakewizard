import "@/styles/globals.css";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://wwhqntmkovojikbaytco.supabase.co";
const supabaseKey ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind3aHFudG1rb3ZvamlrYmF5dGNvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAyOTAzNzMsImV4cCI6MjAwNTg2NjM3M30.Dqi9XP9tWgeQPUACoRPOfM_fIw5CPF9HK2z0h8AJS-8";
const supabase = createClient(supabaseUrl, supabaseKey);
export default function App({ Component, pageProps }) {
  return (
    <SessionContextProvider supabaseClient={supabase}>
      <Component {...pageProps} />
    </SessionContextProvider>
  );
}
