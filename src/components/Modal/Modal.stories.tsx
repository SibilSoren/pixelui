import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import { Button } from '../Button';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Modal Title">
          <p>This is the modal content. Press Escape or click outside to close.</p>
        </Modal>
      </>
    );
  },
};

export const Sizes: Story = {
  render: () => {
    const [size, setSize] = useState<'sm' | 'md' | 'lg' | null>(null);
    return (
      <>
        <div style={{ display: 'flex', gap: '8px' }}>
          <Button variant="secondary" onClick={() => setSize('sm')}>Small</Button>
          <Button variant="secondary" onClick={() => setSize('md')}>Medium</Button>
          <Button variant="secondary" onClick={() => setSize('lg')}>Large</Button>
        </div>
        <Modal isOpen={!!size} onClose={() => setSize(null)} title={`${size?.toUpperCase()} Modal`} size={size || 'md'}>
          <p>This is a {size} modal example.</p>
        </Modal>
      </>
    );
  },
};
