import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTrail, animated, config } from '@react-spring/web';
import Heading from "@theme/Heading";
import Link from "@docusaurus/Link";
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
    const trail = useTrail(pastWebsites.length, {
        from: { opacity: 0, x: -20 },
        to: { opacity: 1, x: 0 },
        config: config.gentle,
        delay: 300,
    });

    return (
        <Box className={styles.timelineContainer}>
            <div className="text--center padding-bottom--xl">
                <Heading as="h2" className={styles.sectionTitle}>Journey Over Time</Heading>
                <p className={styles.sectionSubtitle}>
                    Trace the evolution of my digital presence from its inception to today
                </p>
            </div>

            <div className={styles.timeline}>
                {trail.map((style, index) => {
                    const site = pastWebsites[index];
                    return (
                        <animated.div key={index} style={style} className={styles.timelineItem}>
                            <div className={styles.timelineMarker}>
                                <div className={styles.markerDot}></div>
                            </div>

                            <div className={styles.timelineContent}>
                                <div className={styles.timelineBadge}>
                                    {site.milestone}
                                </div>
                                <div className={styles.timelineHeader}>
                                    <span className={styles.timelineYear}>{site.year}</span>
                                    <Heading as="h3" className={styles.timelineTitle}>{site.title}</Heading>
                                </div>

                                <p className={styles.timelineDescription}>
                                    {site.description}
                                </p>

                                <Link to={site.url} className={styles.timelineLink} target="_blank">
                                    Visit Version <span className={styles.linkArrow}>→</span>
                                </Link>
                            </div>

                        </animated.div>
                    );
                })}
            </div>
        </Box>
    );
}
