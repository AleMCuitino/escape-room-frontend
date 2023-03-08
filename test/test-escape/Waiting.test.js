import Waiting from "../../src/pages/escape-room/start/Waiting";
import React from 'react';
import { render, screen } from '@testing-library/react';

describe('Waiting component', () => {
    test('renders text correctly', () => {
        render(<Waiting />);
        expect(screen.getByText('Factoria ha sido hackeada...')).toBeInTheDocument();
    });

    test('renders hourglass image', () => {
        render(<Waiting />);
        expect(screen.getByTitle('hour')).toBeInTheDocument();
    });
});