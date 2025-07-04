import type { ColorValue } from 'react-native';

export interface LoaderProps {
  show: boolean;
  size?: number | 'small' | 'large' | undefined;
  color?: ColorValue | undefined;
}
