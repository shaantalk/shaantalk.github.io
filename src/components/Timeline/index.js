import React from 'react';
import { Box } from '@mui/material';
import { useTrail, animated, config } from '@react-spring/web';
import Heading from "@theme/Heading";
import Link from "@docusaurus/Link";
import styles from './styles.module.css';

/**
 * Reusable Timeline Component
 * @param {Array} items - Array of timeline items
 * @param {string} items[].title - Title of the version/event
 * @param {string} items[].description - Description text
 * @param {string} items[].url - Link to the version
 * @param {string} items[].year - Year string
 * @param {string} items[].milestone - Small badge text (e.g., 'Launch', 'Redesign')
 */
export default function Timeline({ items }) {
    const trail = useTrail(items.length, {
        from: { opacity: 0, x: -20 },
        to: { opacity: 1, x: 0 },
        config: config.gentle,
        delay: 300,
    });

    return (
        <div className={styles.timeline}>
            {trail.map((style, index) => {
                const item = items[index];
                return (
                    <animated.div key={index} style={style} className={styles.timelineItem}>
                        <div className={styles.timelineMarker}>
                            <div className={styles.markerDot}></div>
                        </div>

                        <div className={styles.timelineContent}>
                            <div className={styles.timelineBadge}>
                                {item.milestone}
                            </div>

                            <div className={styles.timelineHeader}>
                                <span className={styles.timelineYear}>{item.year}</span>
                                <Heading as="h3" className={styles.timelineTitle}>{item.title}</Heading>
                            </div>

                            <p className={styles.timelineDescription}>
                                {item.description}
                            </p>

                            {item.url && (
                                <Link to={item.url} className={styles.timelineLink} target="_blank">
                                    Visit Version <span className={styles.linkArrow}>→</span>
                                </Link>
                            )}
                        </div>
                    </animated.div>
                );
            })}
        </div>
    );
}
