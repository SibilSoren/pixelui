import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Elevated: Story = {
  args: {
    variant: 'elevated',
    children: <div style={{ width: '280px' }}><h3 style={{ margin: 0 }}>Card Title</h3><p style={{ margin: '8px 0 0', color: 'var(--pixel-text-muted)' }}>Card description goes here</p></div>,
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    children: <div style={{ width: '280px' }}><h3 style={{ margin: 0 }}>Outlined Card</h3><p style={{ margin: '8px 0 0', color: 'var(--pixel-text-muted)' }}>With a subtle border</p></div>,
  },
};

export const Filled: Story = {
  args: {
    variant: 'filled',
    children: <div style={{ width: '280px' }}><h3 style={{ margin: 0 }}>Filled Card</h3><p style={{ margin: '8px 0 0', color: 'var(--pixel-text-muted)' }}>Solid background</p></div>,
  },
};
