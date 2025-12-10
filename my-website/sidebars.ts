import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  textbookSidebar: [
    {
      type: 'category',
      label: 'Foundations of Physical AI',
      link: {
        type: 'doc',
        id: 'foundations-of-physical-ai/index',
      },
      items: [
        'foundations-of-physical-ai/introduction-to-physical-ai',
        'foundations-of-physical-ai/robotics-fundamentals',
      ],
    },
    {
      type: 'category',
      label: 'Humanoid Robotics Fundamentals',
      link: {
        type: 'doc',
        id: 'humanoid-robotics-fundamentals/index',
      },
      items: [
        'humanoid-robotics-fundamentals/humanoid-control-systems',
        'humanoid-robotics-fundamentals/machine-learning-for-robotics',
      ],
    },
    {
      type: 'category',
      label: 'Advanced Control Systems',
      link: {
        type: 'doc',
        id: 'advanced-control-systems/index',
      },
      items: [
        'advanced-control-systems/advanced-humanoid-locomotion',
      ],
    },
    {
      type: 'category',
      label: 'Real-world Applications',
      link: {
        type: 'doc',
        id: 'real-world-applications/index',
      },
      items: [
        'real-world-applications/real-world-applications',
      ],
    },
  ],
};

export default sidebars;
