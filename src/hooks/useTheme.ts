import { theme } from '../config/theme';

export const useTheme = () => {
  return {
    ...theme,
    // Helper functions can be added here
    getColorClass: (variant: 'primary' | 'expert', type: 'text' | 'bg' | 'border' | 'hover' = 'text', shade: 'light' | 'DEFAULT' | 'dark' = 'DEFAULT') => {
      const colorSet = theme.colors[variant];
      if (type === 'text') {
        return colorSet[shade];
      }
      return colorSet[type][shade];
    },
  };
};