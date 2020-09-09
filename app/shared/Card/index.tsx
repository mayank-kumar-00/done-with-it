import React from 'react';
import { View, Image } from 'react-native';

import AppText from '../AppText';
import CardProps from './model';
import styles from './styles';

export default function Card({ image, subtitle, title }: CardProps) {
    return (
        <View style={styles.container}>
            <Image source={image} style={styles.image} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subtitle}>{subtitle}</AppText>
            </View>
        </View>
    );
}
