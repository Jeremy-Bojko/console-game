import { createRoot } from 'react-dom/client';
import { Board } from './components/Board';
import React from 'react';
import { Game } from './components/Game';

const root = createRoot(document.getElementById('app'));
root.render(<Game />);
