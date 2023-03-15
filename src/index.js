import React from 'react';
import reactdom from 'react-dom/client'
import App from './app';
const el = document.getElementById('root')
const root = reactdom.createRoot(el)

root.render(
    <>
    <App/>
    </>
)