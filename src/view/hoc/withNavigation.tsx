import { NavigateFunction, useNavigate } from "react-router-dom";

export interface WithNavigationProps {
  navigate: NavigateFunction;
}

export const withNavigation = <TProps extends object>(
  WrappedComponent: React.ComponentType<TProps & WithNavigationProps>,
): React.FC<TProps> => {
  return (props: Omit<TProps, keyof WithNavigationProps>) => {
    const navigate = useNavigate();

    return <WrappedComponent navigate={navigate} {...(props as TProps)} />;
  };
};
