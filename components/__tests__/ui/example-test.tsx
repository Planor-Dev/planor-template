// THIS IS AN EXAMPLE TEST

import * as React from 'react';
import { render, screen } from '@testing-library/react-native';
import { Text } from '@/components/ui/text';

describe('Text', () => {
  it('renders correctly', () => {
    render(<Text>My First Test</Text>);
    expect(screen.getByText('My First Test')).toBeTruthy();
  });
});
