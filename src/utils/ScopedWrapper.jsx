import React from 'react';
import mapClasses from "./classnames";

const ScopedWrapper = ({ children, classes }) => {
    const cloneWithScopedClasses = (child) => {
        if (!React.isValidElement(child)) return child; // Ignore non-React elements like strings or null

        const updatedProps = {
            className: child.props.className
                ? mapClasses(classes, child.props.className)
                : undefined,
        };

        // Recursively apply scoped classes to children
        const updatedChildren = child.props.children
            ? React.Children.map(child.props.children, cloneWithScopedClasses)
            : child.props.children;

        return React.cloneElement(child, { ...updatedProps, children: updatedChildren });
    };

    return <>{React.Children.map(children, cloneWithScopedClasses)}</>;
};

export default ScopedWrapper;
