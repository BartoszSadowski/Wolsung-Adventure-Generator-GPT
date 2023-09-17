import { AdventureProvider } from './adventure/adventure.provider';

const provider = new AdventureProvider();
console.log(provider.generate());