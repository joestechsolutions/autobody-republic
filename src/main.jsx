import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Book from './Book.jsx'
import Admin from './Admin.jsx'
import './styles.css'

const path = window.location.pathname
const Page = path === '/book' ? Book : path === '/admin' ? Admin : App
createRoot(document.getElementById('root')).render(<Page />)
