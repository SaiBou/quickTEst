import React from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from 'react-native';
import { Text, Button, Card, Chip, List } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { getServiceById } from '../data/services';

const { width } = Dimensions.get('window');

const ServiceDetailScreen = ({ route, navigation }) => {
  const { serviceId } = route.params;
  const service = getServiceById(serviceId);

  if (!service) {
    return (
      <View style={styles.container}>
        <Text>Service non trouvé</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={{ uri: service.image }}
        style={styles.header}
      >
        <View style={styles.headerOverlay}>
          <Icon name={service.icon} size={40} color="#fff" />
          <Text style={styles.title}>{service.title}</Text>
          <Chip icon="currency-eur" style={styles.priceChip}>
            {service.price}
          </Chip>
        </View>
      </ImageBackground>

      <View style={styles.content}>
        <Card style={styles.descriptionCard}>
          <Card.Content>
            <Text style={styles.sectionTitle}>Description</Text>
            <Text style={styles.description}>{service.fullDescription}</Text>
          </Card.Content>
        </Card>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Caractéristiques</Text>
          <View style={styles.features}>
            {service.features.map((feature, index) => (
              <View key={index} style={styles.featureItem}>
                <Icon name="check-circle" size={20} color="#00B487" />
                <Text style={styles.featureText}>{feature}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>FAQ</Text>
          <List.AccordionGroup>
            {service.faq.map((item, index) => (
              <List.Accordion
                key={index}
                title={item.question}
                id={String(index)}
                style={styles.faqItem}
              >
                <List.Item
                  description={item.answer}
                  descriptionNumberOfLines={0}
                  style={styles.faqAnswer}
                />
              </List.Accordion>
            ))}
          </List.AccordionGroup>
        </View>
      </View>

      <View style={styles.bottomBar}>
        <Button
          mode="contained"
          onPress={() => {/* Handle reservation */}}
          style={styles.reserveButton}
          contentStyle={styles.reserveButtonContent}
        >
          Réserver maintenant
        </Button>
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
    height: 250,
  },
  headerOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 20,
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginVertical: 10,
  },
  priceChip: {
    backgroundColor: '#fff',
    alignSelf: 'flex-start',
  },
  content: {
    padding: 15,
  },
  descriptionCard: {
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#666',
  },
  features: {
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 15,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  featureText: {
    marginLeft: 10,
    fontSize: 16,
  },
  faqItem: {
    backgroundColor: '#f5f5f5',
    marginBottom: 1,
  },
  faqAnswer: {
    backgroundColor: '#fff',
  },
  bottomBar: {
    padding: 15,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  reserveButton: {
    backgroundColor: '#00B487',
  },
  reserveButtonContent: {
    height: 50,
  },
});

export default ServiceDetailScreen;