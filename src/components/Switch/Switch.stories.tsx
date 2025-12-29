import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from './Switch';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { label: 'Dark mode' },
};

export const Checked: Story = {
  args: { label: 'Notifications', checked: true },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px' }}>
      <Switch size="sm" label="Small" />
      <Switch size="md" label="Medium" />
    </div>
  ),
};

export const Interactive: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return <Switch checked={checked} onChange={setChecked} label={checked ? 'On' : 'Off'} />;
  },
};
