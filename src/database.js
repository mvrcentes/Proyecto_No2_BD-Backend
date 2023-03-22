import  { createClient }  from '@supabase/supabase-js'
// require('dotenv').config({ path: './.env.local' })
import dotenv from 'dotenv'
dotenv.config({ path: './.env.local' })

// const { createClient } = require('@supabase/supabase-js')

// const cors = require("cors");
import cors from 'cors'

// const express = require("express")
import express from 'express'

const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.VITE_SUPABASE_ANON_KEY)
// const supabase = createClient(import.meta.env.SUPABASE_URL, import.meta.env.SUPABASE_ANON_KEY)

console.log(supabase)

export default supabase
// module.exports = supabase