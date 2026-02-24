import React from 'react';
import { Box } from '@mui/material';
import Heading from "@theme/Heading";
import Timeline from "@site/src/components/Common/Timeline";

import styles from './styles.module.css';

const pastWebsites = [
    {
        title: 'Version 1.0',
        description: 'The beginning: A minimalist portfolio focusing on core links and a clean typography-first approach.',
        url: 'https://www.santanu.dev/v1',
        year: '2016',
        milestone: 'Launch'
    },
    {
        title: 'Version 2.0',
        description: 'Evolution: A modern card-based Material Design layout with project showcases and interactive elements.',
        url: 'https://www.santanu.dev/v2',
        year: '2019',
        milestone: 'Redesign'
    },
    {
        title: 'Version 3.0',
        description: 'Maturity: Advanced React-based site with dark mode, complex components, and a sleek, futuristic aesthetic.',
        url: 'https://www.santanu.dev/v3',
        year: '2022',
        milestone: 'Refinement'
    }
];

export default function PastVersions() {
    return (
        <Box className={styles.timelineContainer}>
            <div className="text--center padding-bottom--xl">
                <Heading as="h2" className={styles.sectionTitle}>Journey Over Time</Heading>
                <p className={styles.sectionSubtitle}>
                    See how my digital presence has evolved through the years
                </p>
            </div>

            <Timeline items={pastWebsites} />
        </Box>
    );
}
