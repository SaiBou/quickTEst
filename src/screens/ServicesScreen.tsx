import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { Text, Card, Chip } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { services } from '../data/services';

const { width } = Dimensions.get('window');

const ServicesScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Nos Services</Text>
        <Text style={styles.subtitle}>
          Découvrez notre gamme complète de services professionnels
        </Text>
      </View>

      <View style={styles.servicesGrid}>
        {services.map((service) => (
          <TouchableOpacity
            key={service.id}
            onPress={() => navigation.navigate('ServiceDetail', { serviceId: service.id })}
            style={styles.serviceCardWrapper}
          >
            <Card style={styles.serviceCard}>
              <Card.Cover source={{ uri: service.image }} style={styles.cardImage} />
              <Card.Content style={styles.cardContent}>
                <View style={styles.iconContainer}>
                  <Icon name={service.icon} size={24} color="#00B487" />
                </View>
                <Text style={styles.serviceTitle}>{service.title}</Text>
                <Text style={styles.serviceDescription} numberOfLines={2}>
                  {service.description}
                </Text>
                <View style={styles.priceContainer}>
                  <Chip icon="currency-eur" style={styles.priceChip}>
                    {service.price}
                  </Chip>
                </View>
              </Card.Content>
            </Card>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  servicesGrid: {
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  serviceCardWrapper: {
    width: (width - 30) / 2,
    marginBottom: 10,
  },
  serviceCard: {
    elevation: 4,
  },
  cardImage: {
    height: 120,
  },
  cardContent: {
    padding: 10,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0,180,135,0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  serviceTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  serviceDescription: {
    fontSize: 12,
    color: '#666',
    marginBottom: 10,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  priceChip: {
    backgroundColor: 'rgba(0,180,135,0.1)',
  },
});

export default ServicesScreen;