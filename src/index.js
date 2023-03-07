import { render } from '@testing-library/react';
import React from 'react'
import { createRoot} from 'react-dom/client'
import App from './App'

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);

