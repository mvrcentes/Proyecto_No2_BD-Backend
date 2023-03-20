// import  createClient  from '@supabase/supabase-js'
require('dotenv').config({ path: './.env.local' })

const { createClient } = require('@supabase/supabase-js')
const cors = require("cors");
const express = require("express")

const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.VITE_SUPABASE_ANON_KEY)

console.log(supabase)


