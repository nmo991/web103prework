import { createClient } from '@supabase/supabase-js';
const URL = 'https://thmvvgigragscfsgrwka.supabase.co';
const API_KEY = 'sb_publishable_u7CA2AQx3nrGD26wfQ1Y6Q_qmo2j3YE';
export const supabase = createClient(URL, API_KEY);