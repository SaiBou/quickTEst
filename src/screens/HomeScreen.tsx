import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from 'react-native';
import { Text, Button, Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const { width } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {
  const services = [
    {
      id: 'transport',
      title: 'Transport de colis',
      icon: 'package',
      description: 'Livraison rapide et sécurisée',
    },
    {
      id: 'demenagement',
      title: 'Déménagement',
      icon: 'home-move',
      description: 'Service complet de déménagement',
    },
    {
      id: 'nettoyage',
      title: 'Nettoyage',
      icon: 'broom',
      description: 'Services de nettoyage professionnel',
    },
    {
      id: 'depannage',
      title: 'Dépannage',
      icon: 'wrench',
      description: 'Intervention rapide',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={{ uri: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg' }}
        style={styles.hero}
      >
        <View style={styles.heroOverlay}>
          <Text style={styles.heroTitle}>QuickServe</Text>
          <Text style={styles.heroSubtitle}>
            Des services professionnels à portée de main
          </Text>
          <Button
            mode="contained"
            onPress={() => navigation.navigate('Services')}
            style={styles.heroButton}
          >
            Découvrir nos services
          </Button>
        </View>
      </ImageBackground>

      <View style={styles.servicesSection}>
        <Text style={styles.sectionTitle}>Nos Services</Text>
        <View style={styles.servicesGrid}>
          {services.map((service) => (
            <Card
              key={service.id}
              style={styles.serviceCard}
              onPress={() => navigation.navigate('Services', {
                screen: 'ServiceDetail',
                params: { serviceId: service.id }
              })}
            >
              <Card.Content style={styles.cardContent}>
                <Icon name={service.icon} size={32} color="#00B487" />
                <Text style={styles.serviceTitle}>{service.title}</Text>
                <Text style={styles.serviceDescription}>
                  {service.description}
                </Text>
              </Card.Content>
            </Card>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  hero: {
    height: 300,
    justifyContent: 'center',
  },
  heroOverlay: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 20,
    height: '100%',
    justifyContent: 'center',
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  heroSubtitle: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 20,
  },
  heroButton: {
    width: 200,
    backgroundColor: '#00B487',
  },
  servicesSection: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  serviceCard: {
    width: (width - 60) / 2,
    marginBottom: 20,
    elevation: 4,
  },
  cardContent: {
    alignItems: 'center',
    padding: 15,
  },
  serviceTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
    textAlign: 'center',
  },
  serviceDescription: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
});

export default HomeScreen;