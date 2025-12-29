import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from './Alert';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {
  args: {
    type: 'info',
    title: 'Information',
    children: 'This is an informational alert.',
  },
};

export const Success: Story = {
  args: {
    type: 'success',
    title: 'Success!',
    children: 'Your changes have been saved.',
  },
};

export const Warning: Story = {
  args: {
    type: 'warning',
    title: 'Warning',
    children: 'Your session will expire in 5 minutes.',
  },
};

export const Error: Story = {
  args: {
    type: 'error',
    title: 'Error',
    children: 'Something went wrong. Please try again.',
  },
};

export const AllTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '400px' }}>
      <Alert type="info">Info message</Alert>
      <Alert type="success">Success message</Alert>
      <Alert type="warning">Warning message</Alert>
      <Alert type="error">Error message</Alert>
    </div>
  ),
};
