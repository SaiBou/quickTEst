import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Import screens
import HomeScreen from './src/screens/HomeScreen';
import ServicesScreen from './src/screens/ServicesScreen';
import ServiceDetailScreen from './src/screens/ServiceDetailScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import AboutScreen from './src/screens/AboutScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const queryClient = new QueryClient();

const ServicesStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="ServicesList" component={ServicesScreen} options={{ title: 'Services' }} />
    <Stack.Screen name="ServiceDetail" component={ServiceDetailScreen} options={{ title: 'Détails' }} />
  </Stack.Navigator>
);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                switch (route.name) {
                  case 'Home':
                    iconName = focused ? 'home' : 'home-outline';
                    break;
                  case 'Services':
                    iconName = focused ? 'briefcase' : 'briefcase-outline';
                    break;
                  case 'Profile':
                    iconName = focused ? 'account' : 'account-outline';
                    break;
                  case 'About':
                    iconName = focused ? 'information' : 'information-outline';
                    break;
                  default:
                    iconName = 'circle';
                }

                return <Icon name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: '#00B487',
              tabBarInactiveTintColor: 'gray',
            })}
          >
            <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Accueil' }} />
            <Tab.Screen 
              name="Services" 
              component={ServicesStack} 
              options={{ headerShown: false }}
            />
            <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profil' }} />
            <Tab.Screen name="About" component={AboutScreen} options={{ title: 'À propos' }} />
          </Tab.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </QueryClientProvider>
  );
};

export default App;